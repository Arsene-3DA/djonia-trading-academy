const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { loadCourse } = require("./helpers/course-fixture.cjs");

const { appSource, projectRoot, read } = loadCourse();
const html = read("index.html");
const styles = read("styles.css");

test("les scripts se chargent dans l’ordre contenu → application → enrichissement", () => {
  const scripts = Array.from(html.matchAll(/<script\s+src="([^"]+)"/g), match => match[1]);
  assert.deepEqual(scripts, ["course-content.js", "content-protection.js", "app.js", "course-enrichment.js", "fundednext.js", "account-config.js", "accounts.js"]);
});

test("tous les contrôles permanents ont une liaison de clic ou de changement", () => {
  const expectedBindings = [
    '.dashboard-link").addEventListener("click"',
    'getElementById("brandHomeButton").addEventListener("click"',
    'getElementById("profileButton").addEventListener("click"',
    'menuButton.addEventListener("click"',
    'sidebarCloseButton.addEventListener("click"',
    'sidebarBackdrop.addEventListener("click"',
    'getElementById("themeButton").addEventListener("click"',
    'searchInput.addEventListener("input"',
    'levelFilter.addEventListener("change"',
    'toolFilter.addEventListener("change"'
  ];
  expectedBindings.forEach(binding => assert.ok(appSource.includes(binding), `liaison absente : ${binding}`));
});

test("les contrôles dynamiques essentiels sont reliés", () => {
  [
    "continueButton", "nextModuleButton", "toolsButton", "allModulesButton",
    "backDashboard", "startTraining", "startTimed", "examForm",
    "validateTimed", "answerButton", "completeButton", "nextLesson",
    "journalForm", "exportCsv", "exportJson"
  ].forEach(id => assert.match(appSource, new RegExp(id), `contrôle non référencé : ${id}`));
  assert.match(appSource, /\.module-quiz/);
  assert.match(appSource, /\.lesson-complete/);
  assert.match(appSource, /\.graphic-answer-button/);
});

test("la numérotation reste visible même après validation", () => {
  assert.match(appSource, /<span class="module-number">\$\{m\.id\}<\/span>/);
  assert.doesNotMatch(appSource, /module-number[^\n]*\?\s*"✓"/);
  assert.doesNotMatch(appSource, /lesson-index-item[^\n]*\?\s*"✓"/);
  assert.doesNotMatch(appSource, /<summary><span>\$\{isDone\s*\?\s*"✓"/);
});

test("le stockage local est protégé par un repli mémoire", () => {
  assert.match(appSource, /const safeStorage\s*=\s*\{/);
  assert.match(appSource, /try\s*\{[\s\S]*localStorage\.getItem/);
  assert.match(appSource, /catch\s*\(error\)\s*\{[\s\S]*memoryStore/);
});

test("toutes les ressources locales référencées existent", () => {
  const combined = [html, styles, appSource].join("\n");
  const references = new Set(Array.from(combined.matchAll(/(?:src=|url\(|["'])(assets\/[A-Za-z0-9._/-]+\.(?:svg|png|webp|jpg|jpeg))/g), match => match[1]));
  assert.ok(references.size >= 15);
  references.forEach(reference => assert.ok(fs.existsSync(path.join(projectRoot, reference)), `ressource absente : ${reference}`));
});

test("le code JavaScript principal ne contient plus l’ancien tirage otherConcepts", () => {
  assert.doesNotMatch(appSource, /otherConcepts/);
  assert.match(appSource, /module\.concepts/);
  assert.match(appSource, /module\.errors/);
});

test("la grille d’examens est une surface Papier et les tirets décoratifs ont disparu", () => {
  assert.match(appSource, /<section class="exam-overview">/);
  assert.match(styles, /\.exam-overview\s*\{[\s\S]*background:\s*var\(--paper\)/);
  assert.doesNotMatch(appSource, /level-dot/);
  assert.doesNotMatch(styles, /\.level-card::after/);
  assert.doesNotMatch(styles, /\.(?:eyebrow|section-label|hero-strap)::before/);
});

test("toutes les images dynamiques reçoivent des dimensions intrinsèques", () => {
  assert.match(appSource, /const imageDimensions\s*=\s*Object\.freeze/);
  assert.match(appSource, /function imageSizeAttributes/);
  const imageTemplates = Array.from(appSource.matchAll(/<img\b[^>]*>/g), match => match[0]);
  assert.ok(imageTemplates.length >= 10);
  imageTemplates.forEach(image => assert.match(image, /imageSizeAttributes\(/, `dimensions absentes : ${image}`));
});

test("les garde-fous responsive couvrent mobile, tablette et images détaillées", () => {
  assert.match(styles, /body\s*\{[\s\S]*min-width:\s*0/);
  assert.match(styles, /@media \(max-width:\s*1180px\)[\s\S]*\.feature-grid, \.course-layout\s*\{\s*grid-template-columns:\s*1fr/);
  assert.match(styles, /@media \(max-width:\s*900px\)[\s\S]*\.sidebar-close\s*\{/);
  assert.match(styles, /\.primary-btn, \.secondary-btn, \.complete-button, \.lesson-complete\s*\{[\s\S]*min-height:\s*44px/);
  assert.match(appSource, /class="figure-zoom-link"/);
  assert.match(appSource, /class="lesson-visual-link"/);
});

test("les agrandissements utilisent une modale en place et accessible", () => {
  assert.match(html, /id="imageModal"[^>]*role="dialog"[^>]*aria-modal="true"/);
  assert.match(appSource, /function openImageModal/);
  assert.match(appSource, /function closeImageModal/);
  assert.match(appSource, /event\.key === "Escape"/);
  assert.match(appSource, /event\.key === "Tab"/);
  assert.match(appSource, /event\.target === imageModal/);
  assert.match(appSource, /imageModalReturnFocus\.focus/);
  assert.doesNotMatch(appSource, /window\.open/);
  assert.doesNotMatch(appSource, /data-modal-src="[^"]+"[^>]*target="_blank"/);
  assert.match(styles, /\.image-modal-stage\s*\{[\s\S]*touch-action:\s*pan-x pan-y pinch-zoom/);
});

test("les trois SVG principaux conservent leur cadrage et le hero est corrigé", () => {
  const hero = read("assets/hero-market-briefing.svg");
  const analysis = read("assets/analysis-workbench.svg");
  const risk = read("assets/risk-journal-sheet.svg");
  [hero, analysis, risk].forEach(source => assert.match(source, /preserveAspectRatio="xMidYMid meet"/));
  assert.match(styles, /\.hero-image\s*\{[\s\S]*object-fit:\s*contain/);
  assert.doesNotMatch(hero, /bougies fictifs/i);
  assert.match(hero, /bougies fictives/i);
  ["POI · ZONE DE DEMANDE", "CHoCH", "FVG", "HH", "HL", "SWEEP", "ENTRÉE", "SL", "TP"].forEach(label => {
    assert.ok(hero.includes(label), `label hero absent : ${label}`);
  });
});

test("le Guide Orderflow reste une méthode sans automatisation de signal", () => {
  const guide = read("guide-orderflow.md");
  assert.match(guide, /ne (?:produit|donne) aucun signal/i);
  assert.match(guide, /qualité de la donnée/i);
  assert.match(guide, /conflit/i);
  assert.doesNotMatch(guide, /exécute automatiquement|achat garanti|vente garantie/i);
  assert.doesNotMatch(appSource, /Flux d’ordres intensif/i);
});

test("le rendu place sources, synthèse, quiz puis cas intégré dans l’ordre pédagogique", () => {
  const sourcePosition = appSource.indexOf("${sourceSection(module)}");
  const synthesisPosition = appSource.indexOf("${synthesisSection(module)}");
  const quizPosition = appSource.indexOf("${quizSection(module)}");
  const casePosition = appSource.indexOf("${integratedCaseSection(id)}");
  assert.ok(sourcePosition >= 0 && sourcePosition < synthesisPosition);
  assert.ok(synthesisPosition < quizPosition);
  assert.ok(quizPosition < casePosition);
  assert.match(appSource, /data-synthesis-module/);
  assert.match(appSource, /data-integrated-case/);
  assert.match(appSource, /data-mastery-gate="required"/);
  assert.match(appSource, /\.integrated-answer-button/);
});

test("la stratégie complète est rendue dans le module 20 avec ses trois issues", () => {
  assert.match(appSource, /function namedStrategySection/);
  assert.match(appSource, /data-named-strategy="SSR"/);
  assert.match(appSource, /\$\{namedStrategySection\(id\)\}/);
  assert.match(styles, /\.strategy-rules/);
  assert.match(styles, /\.strategy-path\.up/);
  assert.match(styles, /\.strategy-path\.down/);
});
