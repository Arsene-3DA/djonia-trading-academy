const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.route("**/account-config.js", async route => {
    const response = await route.fetch();
    const body = (await response.text()).replace(/enabled:\s*false(\s*,)/, "enabled: true$1");
    await route.fulfill({
      status: response.status(),
      contentType: "text/javascript; charset=utf-8",
      body
    });
  });
  await page.addInitScript(() => {
    const listeners = new Set();
    const records = new Map();
    let signOuts = 0;
    window.__signOuts = () => signOuts;
    window.supabase = {
      createClient() {
        return {
          from() {
            return {
              select: () => ({
                eq: (_key, id) => ({
                  maybeSingle: async () => ({ data: records.get(id) || null, error: null })
                })
              })
            };
          },
          async rpc(_name, args) {
            const id = "student";
            const old = records.get(id) || { revision: 0 };
            if (old.revision !== args.expected_revision) return { data: null, error: new Error("conflict") };
            const revision = old.revision + 1;
            records.set(id, { revision, payload: JSON.parse(JSON.stringify(args.new_payload)) });
            return { data: revision, error: null };
          },
          auth: {
            getSession: async () => ({ data: { session: null }, error: null }),
            onAuthStateChange(callback) {
              listeners.add(callback);
              queueMicrotask(() => {
                callback("INITIAL_SESSION", null);
                window.__authReady = true;
              });
              return { data: { subscription: { unsubscribe() { listeners.delete(callback); } } } };
            },
            async signOut() {
              signOuts += 1;
              if (signOuts > 5) throw new Error("boucle signOut");
              for (const callback of [...listeners]) callback("SIGNED_OUT", null);
              return { error: null };
            },
            signInWithOAuth: async () => ({ data: {}, error: null }),
            resetPasswordForEmail: async () => ({ data: {}, error: null }),
            updateUser: async () => ({ data: {}, error: null })
          }
        };
      }
    };
  });
});

test("une visite sans session affiche les modules et ne boucle pas sur signOut", async ({ page }) => {
  await page.goto("/");
  await page.waitForFunction(() => window.__authReady === true);
  await expect(page.locator("body")).toBeVisible();
  await expect(page.locator("#moduleList [data-module]")).toHaveCount(30);
  await expect(page.locator("#accountGoogleLogin")).toBeVisible();
  await expect(page.locator("body")).toContainText("Connexion obligatoire");
  expect(await page.evaluate(() => window.__signOuts())).toBe(0);
});

test("la déconnexion explicite efface la progression et ne signe la sortie qu’une fois", async ({ page }) => {
  page.on("dialog", dialog => dialog.accept());
  await page.goto("/");
  await page.waitForFunction(() => window.__authReady === true);
  expect(await page.evaluate(() => window.__signOuts())).toBe(0);

  await page.evaluate(() => window.DjoniaAccounts.loadAccount({ user: { id: "student", email: "student@example.test" } }));
  await expect(page.locator("#accountLogout")).toBeVisible();
  await page.locator('#moduleList [data-module="1"]').click();
  await page.locator(".lesson-complete").first().click();
  await expect(page.locator("#sidebarProgressCount")).toContainText("1/125");
  await expect(page.locator("#accountStatus")).toContainText("synchronisée");

  await page.locator("#accountButton").click();
  await page.locator("#accountLogout").click();
  await expect(page.locator("#accountGoogleLogin")).toBeVisible();
  await expect(page.locator("#accountLogout")).toHaveCount(0);
  await expect(page.locator("#sidebarProgressCount")).toContainText("0/125");
  expect(await page.evaluate(() => window.__signOuts())).toBe(1);
});
