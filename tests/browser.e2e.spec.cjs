const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => localStorage.clear());
  await page.reload();
});

test("les 30 modules sont accessibles, ordonnés et complets", async ({ page }) => {
  const buttons = page.locator("#moduleList [data-module]");
  await expect(buttons).toHaveCount(30);
  await expect(buttons.locator(".module-number")).toHaveText(Array.from({ length: 30 }, (_, index) => String(index + 1)));

  for (let id = 1; id <= 30; id += 1) {
    await buttons.nth(id - 1).click();
    await expect(page.locator(".module-kicker")).toContainText(`Module ${id}/30`);
    await expect(page.locator(".lesson-detail")).toHaveCount(5);
    await expect(page.locator(".lesson-index-item")).toHaveCount(5);
    await expect(page.locator(".lesson-detail summary > span")).toHaveText(["01", "02", "03", "04", "05"]);
    await expect(page.locator(".module-quiz .quiz-card")).toHaveCount(3);
    await expect(page.locator(".lesson-visual img")).toBeVisible();
  }
});

test("les clics principaux, quiz, progression et module suivant répondent", async ({ page }) => {
  await page.getByRole("button", { name: "Commencer le module 1" }).click();
  await page.getByRole("button", { name: "Voir la correction" }).click();
  await expect(page.locator("#answerBox")).toBeVisible();

  for (let question = 0; question < 3; question += 1) {
    await page.locator(`input[name="mq${question}"]`).first().check();
  }
  await page.getByRole("button", { name: "Corriger les 3 réponses" }).click();
  await expect(page.locator(".quiz-feedback strong")).toBeVisible();

  await page.locator(".lesson-complete").first().click();
  await expect(page.locator(".module-progress-ring")).toContainText("1/5 leçons");
  await expect(page.locator(".lesson-detail summary > span").first()).toHaveText("01");

  await page.getByRole("button", { name: "Module suivant" }).click();
  await expect(page.locator(".module-kicker")).toContainText("Module 2/30");
  await page.getByRole("button", { name: "Retourner à la page d’accueil" }).click();
  await expect(page.locator(".hero")).toBeVisible();
});

test("recherche, filtres, calculateurs, examens et thème fonctionnent", async ({ page }) => {
  await page.getByLabel("Rechercher dans la formation").fill("Wyckoff");
  await expect(page.locator(".result-card")).not.toHaveCount(0);
  await page.getByLabel("Niveau").selectOption("4");
  await expect(page.locator(".result-card")).not.toHaveCount(0);

  await page.locator('[data-view="dashboard"]').click();
  await page.locator("#capital").fill("10000");
  await page.locator("#riskPct").fill("1");
  await page.locator("#stopDistance").fill("50");
  await page.locator("#pointValue").fill("10");
  await expect(page.locator("#sizeResult")).toContainText("0,20 lot");

  await page.locator("[data-tool='expectancy']").click();
  await expect(page.locator("#expectancyResult")).toContainText("+0,35 R / trade");

  await page.locator("[data-exam='1']").click();
  await page.getByRole("button", { name: "Commencer l’entraînement" }).click();
  await expect(page.locator(".exam-question")).toHaveCount(10);

  await page.locator("#themeButton").click();
  await expect(page.locator("body")).toHaveClass(/light/);
});

test("le journal ajoute une entrée et propose les deux exports", async ({ page }) => {
  await page.locator("[data-module='22']").click();
  await page.locator("#journalForm [name='asset']").fill("EURUSD");
  await page.locator("#journalForm [name='setup']").fill("Test automatisé du journal");
  await page.getByRole("button", { name: "Enregistrer l’entrée" }).click();
  await expect(page.locator(".journal-entry")).toContainText("EURUSD");
  await expect(page.locator("#exportCsv")).toBeEnabled();
  await expect(page.locator("#exportJson")).toBeEnabled();
});

test("Agrandir ouvre une modale accessible sans nouvel onglet", async ({ page, context }) => {
  const pagesBefore = context.pages().length;
  const trigger = page.getByRole("button", { name: "Agrandir le scénario" });
  await trigger.focus();
  await trigger.click();
  await expect(page.locator("#imageModal")).toBeVisible();
  await expect(page.locator("#imageModalContent")).toHaveAttribute("src", "assets/hero-market-briefing.svg");
  await expect(page.locator("#imageModalClose")).toBeFocused();
  expect(context.pages().length).toBe(pagesBefore);

  await page.getByRole("button", { name: "Agrandir davantage l’illustration" }).click();
  await expect(page.locator("#imageZoomValue")).toHaveText("125 %");
  await page.keyboard.press("Escape");
  await expect(page.locator("#imageModal")).toBeHidden();
  await expect(trigger).toBeFocused();

  await trigger.click();
  await page.locator("#imageModal").click({ position: { x: 4, y: 4 } });
  await expect(page.locator("#imageModal")).toBeHidden();
});

test("les masterclass affichent leurs badges, exercices et le Guide Orderflow", async ({ page }) => {
  await expect(page.locator(".elective-card")).toHaveCount(5);
  await expect(page.locator(".elective-card .track-badge")).toHaveText(["Essentiel", "Essentiel", "Avancé", "Avancé", "Avancé"]);
  await page.locator('[data-module="29"]').click();
  await expect(page.locator(".module-kicker")).toContainText("Avancé · à la carte");
  await expect(page.locator(".graphic-exercise")).toBeVisible();
  await expect(page.locator(".guide-resource")).toContainText("Le Guide Orderflow");
  await expect(page.locator(".resource-download")).toHaveAttribute("download", "");
  await expect(page.locator("body")).not.toContainText("Flux d’ordres intensif");
});
