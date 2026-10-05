import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Window } from "happy-dom";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(dirname, "..");

function read(relativePath) {
  return fs.readFileSync(path.join(projectRoot, relativePath), "utf8");
}

function cleanText(value) {
  return String(value).replace(/\s+/g, " ").trim();
}

function fire(window, element, type) {
  element.dispatchEvent(new window.Event(type, { bubbles: true, cancelable: true }));
}

function setValue(window, selector, value) {
  const element = window.document.querySelector(selector);
  assert.ok(element, `élément introuvable : ${selector}`);
  element.value = value;
  fire(window, element, "input");
  return element;
}

function createSite({ storageDisabled = false, accountClient = null } = {}) {
  const window = new Window({ url: "http://djonia.test/" });
  const html = read("index.html").replace(/<script\b[^>]*><\/script>/gi, "");
  window.document.documentElement.innerHTML = html;
  window.__lastScrolledElement = null;
  window.HTMLElement.prototype.scrollIntoView = function scrollIntoView() {
    window.__lastScrolledElement = this.id || this.className || this.tagName;
  };
  window.scrollTo = () => {};
  if (storageDisabled) {
    Object.defineProperty(window, "localStorage", {
      configurable: true,
      value: {
        getItem: () => { throw new Error("Stockage désactivé pour le test"); },
        setItem: () => { throw new Error("Stockage désactivé pour le test"); }
      }
    });
  }
  if(accountClient) window.supabase={createClient:()=>accountClient};
  const accountConfig = accountClient
    ? 'window.DJONIA_ACCOUNT_CONFIG={url:"https://test.supabase.co",publishableKey:"sb_publishable_test"};'
    : 'window.DJONIA_ACCOUNT_CONFIG={url:"",publishableKey:""};';
  const source = ["course-content.js", "app.js", "course-enrichment.js", "fundednext.js", "account-config.js", "accounts.js"]
    .map(filename => `${filename === "account-config.js" ? accountConfig : read(filename)}\n//# sourceURL=${filename}`)
    .join("\n;\n");
  window.eval(source);
  return window;
}

test("intégration sans localStorage : le site reste navigable et avertit l’élève", () => {
  const window = createSite({ storageDisabled: true });
  const { document } = window;
  try {
    assert.ok(document.querySelector(".storage-alert"));
    assert.equal(document.querySelectorAll("#moduleList [data-module]").length, 30);
    document.querySelector('#moduleList [data-module="1"]').click();
    assert.match(cleanText(document.querySelector(".module-kicker").textContent), /Module 1\/30/);
    document.querySelector(".lesson-complete[data-lesson-index='0']").click();
    assert.match(cleanText(document.querySelector(".module-progress-ring").textContent), /1\/5 leçons/);
  } finally {
    window.close();
  }
});

test("intégration pédagogique : 30 synthèses et trois cas à correction progressive", () => {
  const window = createSite();
  const { document } = window;
  const expectedCases = new Map([[13, "D"], [14, "E"], [25, "F"], [27, "A"], [29, "B"], [30, "C"]]);
  try {
    for (let moduleId = 1; moduleId <= 30; moduleId += 1) {
      document.querySelector(`#moduleList [data-module="${moduleId}"]`).click();
      const synthesis = document.querySelector(".module-synthesis");
      assert.ok(synthesis, `module ${moduleId} : synthèse absente`);
      assert.equal(synthesis.dataset.synthesisModule, String(moduleId));
      assert.ok(cleanText(synthesis.querySelector(".synthesis-summary").textContent).length >= 120);
      const takeaways = synthesis.querySelectorAll(".takeaway-panel li");
      assert.ok(takeaways.length >= 3 && takeaways.length <= 7);

      const integratedCase = document.querySelector(".integrated-case");
      if (!expectedCases.has(moduleId)) {
        assert.equal(integratedCase, null, `module ${moduleId} : cas intégré inattendu`);
        continue;
      }
      assert.equal(integratedCase.dataset.integratedCase, expectedCases.get(moduleId));
      assert.equal(integratedCase.dataset.masteryGate, "required");
      assert.equal(integratedCase.querySelectorAll(".decision-chain li").length, 5);
      assert.match(cleanText(integratedCase.querySelector(".mastery-gate").textContent), /quiz/i);
      const correction = integratedCase.querySelector(".case-correction");
      const reveal = integratedCase.querySelector(".integrated-answer-button");
      assert.equal(correction.hidden, true);
      reveal.click();
      assert.equal(correction.hidden, false);
      assert.equal(reveal.getAttribute("aria-expanded"), "true");
      assert.equal(correction.querySelectorAll("li").length, 5);
    }
  } finally {
    window.close();
  }
});

test("intégration premium : sources minimales et stratégie SSR complète", () => {
  const window = createSite();
  const { document } = window;
  try {
    for (let moduleId = 1; moduleId <= 30; moduleId += 1) {
      document.querySelector(`#moduleList [data-module="${moduleId}"]`).click();
      assert.ok(document.querySelectorAll(".source-card").length >= 3, `module ${moduleId} : sourçage insuffisant`);
    }
    document.querySelector('#moduleList [data-module="20"]').click();
    const strategy = document.querySelector('[data-named-strategy="SSR"]');
    assert.ok(strategy);
    assert.match(cleanText(strategy.querySelector("h2").textContent), /Sweep, Shift, Retour/);
    assert.equal(strategy.querySelectorAll(".strategy-path").length, 3);
    assert.match(cleanText(strategy.textContent), /Exemple gagnant/);
    assert.match(cleanText(strategy.textContent), /Exemple perdant/);
    assert.match(cleanText(strategy.textContent), /Faux signal/);
  } finally {
    window.close();
  }
});

test("intégration complète : les 30 modules, 150 validations et toutes les numérotations", () => {
  const window = createSite();
  const { document } = window;
  try {
    const initialButtons = document.querySelectorAll("#moduleList [data-module]");
    assert.equal(initialButtons.length, 30);
    assert.deepEqual(
      Array.from(initialButtons, button => cleanText(button.querySelector(".module-number").textContent)),
      Array.from({ length: 30 }, (_, index) => String(index + 1))
    );

    for (let moduleId = 1; moduleId <= 30; moduleId += 1) {
      const moduleButton = document.querySelector(`#moduleList [data-module="${moduleId}"]`);
      assert.ok(moduleButton, `bouton du module ${moduleId} absent`);
      moduleButton.click();

      assert.match(cleanText(document.querySelector(".module-kicker").textContent), new RegExp(`Module ${moduleId}/30`));
      assert.equal(document.querySelectorAll(".lesson-detail").length, 5, `module ${moduleId} : accordéons`);
      assert.equal(document.querySelectorAll(".lesson-index-item").length, 5, `module ${moduleId} : sommaire`);
      assert.equal(document.querySelectorAll(".module-quiz .quiz-card").length, 3, `module ${moduleId} : quiz`);
      assert.deepEqual(
        Array.from(document.querySelectorAll(".lesson-detail summary > span"), node => cleanText(node.textContent)),
        ["01", "02", "03", "04", "05"],
        `module ${moduleId} : numéros des leçons`
      );

      const image = document.querySelector(".lesson-visual img");
      assert.ok(image?.getAttribute("src"), `module ${moduleId} : visuel principal`);
      assert.ok(Number(image.getAttribute("width")) > 0, `module ${moduleId} : largeur intrinsèque`);
      assert.ok(Number(image.getAttribute("height")) > 0, `module ${moduleId} : hauteur intrinsèque`);
      assert.ok(fs.existsSync(path.join(projectRoot, image.getAttribute("src"))), `module ${moduleId} : visuel absent`);
      Array.from(document.querySelectorAll("img")).forEach(node => {
        assert.ok(Number(node.getAttribute("width")) > 0, `module ${moduleId} : image sans width`);
        assert.ok(Number(node.getAttribute("height")) > 0, `module ${moduleId} : image sans height`);
      });

      document.querySelector("#answerButton").click();
      assert.equal(document.querySelector("#answerBox").hidden, false, `module ${moduleId} : correction textuelle`);
      const graphicButton = document.querySelector(".graphic-answer-button");
      if (graphicButton) {
        graphicButton.click();
        assert.equal(document.querySelector(".graphic-answer").hidden, false, `module ${moduleId} : correction graphique`);
      }

      for (let questionIndex = 0; questionIndex < 3; questionIndex += 1) {
        const answer = document.querySelector(`input[name="mq${questionIndex}"]`);
        assert.ok(answer, `module ${moduleId} : réponse ${questionIndex + 1}`);
        answer.click();
      }
      document.querySelector(".module-quiz button[type='submit']").click();
      assert.match(cleanText(document.querySelector(".quiz-feedback").textContent), /\d\/3/, `module ${moduleId} : correction du quiz`);

      for (let lessonIndex = 0; lessonIndex < 5; lessonIndex += 1) {
        const completeLesson = document.querySelector(`.lesson-complete[data-lesson-index="${lessonIndex}"]`);
        assert.ok(completeLesson, `module ${moduleId}, leçon ${lessonIndex + 1} : bouton absent`);
        completeLesson.click();
        assert.match(cleanText(document.querySelector(".module-progress-ring").textContent), new RegExp(`${lessonIndex + 1}/5 leçons`));
        assert.deepEqual(
          Array.from(document.querySelectorAll(".lesson-detail summary > span"), node => cleanText(node.textContent)),
          ["01", "02", "03", "04", "05"],
          `module ${moduleId} : les numéros doivent rester visibles après validation`
        );
      }

      assert.equal(cleanText(document.querySelector(`#moduleList [data-module="${moduleId}"] .module-number`).textContent), String(moduleId));
      assert.match(cleanText(document.querySelector("#completeButton").textContent), /Module terminé/);
      document.querySelector("#completeButton").click();
      assert.match(cleanText(document.querySelector(".module-progress-ring").textContent), /0\/5 leçons/);
    }

    document.querySelector('#moduleList [data-module="1"]').click();
    document.querySelector("#nextLesson").click();
    assert.match(cleanText(document.querySelector(".module-kicker").textContent), /Module 2\/30/);
  } finally {
    window.close();
  }
});

test("intégration du tableau de bord : navigation, recherche, filtres, thème et calculateurs", () => {
  const window = createSite();
  const { document } = window;
  try {
    document.querySelector("#toolsButton").click();
    assert.equal(window.__lastScrolledElement, "toolsSection");

    document.querySelector("#allModulesButton").click();
    assert.equal(document.querySelectorAll(".result-card").length, 30);
    document.querySelector(".result-card[data-result='10']").click();
    assert.match(cleanText(document.querySelector(".module-kicker").textContent), /Module 10\/30/);

    document.querySelector("#brandHomeButton").click();
    assert.ok(document.querySelector(".hero"), "le logo Djonia doit revenir à la page d’accueil");
    document.querySelector('#moduleList [data-module="10"]').click();

    document.querySelector("#profileButton").click();
    assert.ok(document.querySelector(".account-page"), "le bouton de profil ouvre le compte élève");
    document.querySelector("#accountHome").click();
    document.querySelector("#continueButton").click();
    assert.match(cleanText(document.querySelector(".module-kicker").textContent), /Module 1\/30/);
    document.querySelector(".dashboard-link").click();

    const wasLight = document.body.classList.contains("light");
    document.querySelector("#themeButton").click();
    assert.notEqual(document.body.classList.contains("light"), wasLight);

    Object.defineProperty(window, "innerWidth", { configurable: true, value: 768 });
    document.querySelector("#menuButton").click();
    assert.equal(document.querySelector("#sidebar").classList.contains("open"), true);
    assert.equal(document.querySelector("#menuButton").getAttribute("aria-expanded"), "true");
    assert.equal(document.querySelector("#sidebarBackdrop").hidden, false);
    document.dispatchEvent(new window.KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    assert.equal(document.querySelector("#sidebar").classList.contains("open"), false);
    assert.equal(document.querySelector("#sidebarBackdrop").hidden, true);

    document.querySelector("#menuButton").click();
    document.querySelector("#sidebarCloseButton").click();
    assert.equal(document.querySelector("#sidebar").classList.contains("open"), false);

    const search = document.querySelector("#courseSearch");
    document.dispatchEvent(new window.KeyboardEvent("keydown", { key: "k", ctrlKey: true, bubbles: true, cancelable: true }));
    assert.equal(document.activeElement, search);
    search.value = "Wyckoff";
    fire(window, search, "input");
    assert.ok(document.querySelectorAll(".result-card").length >= 2);

    const level = document.querySelector("#levelFilter");
    level.value = "4";
    fire(window, level, "change");
    assert.ok(Array.from(document.querySelectorAll(".result-card [class='eyebrow']"), node => node.textContent).every(text => text.includes("Niveau 4")));

    search.value = "";
    const tool = document.querySelector("#toolFilter");
    tool.value = "calculator";
    fire(window, tool, "change");
    assert.equal(document.querySelectorAll(".result-card").length, 0, "aucun calculateur n’appartient au niveau 4");

    level.value = "all";
    fire(window, level, "change");
    assert.deepEqual(Array.from(document.querySelectorAll(".result-card"), card => card.getAttribute("data-result")), ["8", "9", "21"]);

    document.querySelector(".dashboard-link").click();
    setValue(window, "#capital", "10000");
    setValue(window, "#riskPct", "1");
    setValue(window, "#stopDistance", "50");
    setValue(window, "#pointValue", "10");
    assert.match(cleanText(document.querySelector("#riskResult").textContent), /100,00 \$/);
    assert.match(cleanText(document.querySelector("#sizeResult").textContent), /0,20 lot/);

    document.querySelector("[data-tool='expectancy']").click();
    assert.equal(document.querySelector("[data-tool-form='expectancy']").classList.contains("active"), true);
    setValue(window, "#winRate", "50");
    setValue(window, "#avgWin", "2");
    setValue(window, "#avgLoss", "1");
    setValue(window, "#tradeCount", "100");
    assert.match(cleanText(document.querySelector("#expectancyResult").textContent), /\+0,50 R \/ trade/);
    assert.match(cleanText(document.querySelector("#projectionResult").textContent), /\+50,00 R/);
  } finally {
    window.close();
  }
});

test("intégration visuelle : examens Papier, repères fonctionnels et aperçu du journal agrandissable", () => {
  const window = createSite();
  const { document } = window;
  try {
    assert.ok(document.querySelector(".exam-overview .exam-grid"));
    assert.equal(document.querySelectorAll(".exam-card .level-progress-marker").length, 5);
    assert.equal(document.querySelectorAll(".level-dot").length, 0);
    const preview = document.querySelector('.visual-preview-link[data-modal-src="assets/risk-journal-sheet.svg"]');
    assert.equal(preview?.tagName, "BUTTON");
    assert.equal(preview?.getAttribute("data-modal-src"), "assets/risk-journal-sheet.svg");
    assert.equal(preview?.getAttribute("target"), null);
    assert.match(cleanText(preview.textContent), /Agrandir la fiche/);
    Array.from(document.querySelectorAll("img")).forEach(node => {
      assert.ok(Number(node.getAttribute("width")) > 0, `image sans width : ${node.getAttribute("src")}`);
      assert.ok(Number(node.getAttribute("height")) > 0, `image sans height : ${node.getAttribute("src")}`);
    });
  } finally {
    window.close();
  }
});

test("intégration modale : agrandissement en place, zoom, Échap, clic extérieur et retour du focus", async () => {
  const window = createSite();
  const { document } = window;
  try {
    const trigger = document.querySelector('.hero-visual-link[data-modal-src="assets/hero-market-briefing.svg"]');
    assert.ok(trigger);
    assert.equal(trigger.tagName, "BUTTON");
    assert.equal(document.querySelectorAll('[data-modal-src][target="_blank"]').length, 0);

    trigger.focus();
    trigger.click();
    await new Promise(resolve => window.setTimeout(resolve, 0));
    const modal = document.querySelector("#imageModal");
    assert.equal(modal.hidden, false);
    assert.equal(document.querySelector("#imageModalContent").getAttribute("src"), "assets/hero-market-briefing.svg");
    assert.equal(document.body.classList.contains("modal-open"), true);

    document.querySelector("#imageZoomIn").click();
    assert.match(document.querySelector("#imageZoomValue").textContent, /125/);
    document.dispatchEvent(new window.KeyboardEvent("keydown", { key: "Escape", bubbles: true, cancelable: true }));
    assert.equal(modal.hidden, true);
    assert.equal(document.activeElement, trigger);

    trigger.click();
    modal.dispatchEvent(new window.MouseEvent("click", { bubbles: true, cancelable: true }));
    assert.equal(modal.hidden, true);
  } finally {
    window.close();
  }
});

test("intégration des cinq examens : entraînement et chronomètre", () => {
  const window = createSite();
  const { document } = window;
  try {
    for (let level = 1; level <= 5; level += 1) {
      document.querySelector(".dashboard-link").click();
      document.querySelector(`[data-exam="${level}"]`).click();
      assert.match(cleanText(document.querySelector("h1").textContent), /^Examen/);
      assert.ok(document.querySelector("#startTraining"));
      assert.ok(document.querySelector("#startTimed"));

      document.querySelector("#startTraining").click();
      assert.equal(document.querySelectorAll(".exam-question").length, 10);
      for (let questionIndex = 0; questionIndex < 10; questionIndex += 1) {
        document.querySelector(`input[name="q${questionIndex}"]`).click();
      }
      document.querySelector("#examForm button[type='submit']").click();
      assert.match(cleanText(document.querySelector(".exam-final").textContent), /10 réponses/);
      document.querySelector("#retryExam").click();
      assert.ok(document.querySelector("#startTimed"));

      document.querySelector("#startTimed").click();
      assert.match(cleanText(document.querySelector(".exam-status").textContent), /Question 1\/10/);
      document.querySelector('input[name="timedAnswer"]').click();
      document.querySelector("#validateTimed").click();
      assert.match(cleanText(document.querySelector(".exam-status").textContent), /Question 2\/10/);
    }
    document.querySelector(".dashboard-link").click();
  } finally {
    window.close();
  }
});

test("intégration du journal : ajout, persistance locale et exports CSV/JSON", () => {
  const window = createSite();
  const { document } = window;
  const downloads = [];
  try {
    window.URL.createObjectURL = () => "blob:djonia-test";
    window.URL.revokeObjectURL = () => {};
    window.HTMLAnchorElement.prototype.click = function click() {
      if (this.download) downloads.push({ filename: this.download, href: this.href });
    };

    document.querySelector('#moduleList [data-module="22"]').click();
    // Happy DOM applique actuellement une base de pas incorrecte aux nombres décimaux.
    // Le navigateur réel accepte bien 0,5 avec step=0.1 ; "any" neutralise seulement
    // cette divergence du moteur de test afin de conserver un vrai clic submit.
    document.querySelector("#journalForm [name='risk']").step = "any";
    document.querySelector("#journalForm [name='result']").step = "any";
    setValue(window, "#journalForm [name='date']", "2026-09-16");
    setValue(window, "#journalForm [name='asset']", "EURUSD");
    setValue(window, "#journalForm [name='risk']", "0.5");
    setValue(window, "#journalForm [name='result']", "1.5");
    setValue(window, "#journalForm [name='setup']", "Contexte H4, liquidité et confirmation M15");
    setValue(window, "#journalForm [name='lesson']", "Respecter la checklist");
    document.querySelector("#journalForm button[type='submit']").click();

    assert.equal(document.querySelectorAll(".journal-entry").length, 1);
    assert.match(cleanText(document.querySelector(".journal-entry").textContent), /EURUSD/);
    assert.equal(JSON.parse(window.localStorage.getItem("djoniaJournal")).length, 1);

    document.querySelector("#exportCsv").click();
    document.querySelector("#exportJson").click();
    assert.equal(downloads.length, 2);
    assert.match(downloads[0].filename, /^journal-trading-\d{4}-\d{2}-\d{2}\.csv$/);
    assert.match(downloads[1].filename, /^journal-trading-\d{4}-\d{2}-\d{2}\.json$/);
  } finally {
    window.close();
  }
});

test('FundedNext : seuils exacts pour chaque modèle et phase', () => {
 const w=createSite();try {
  const r=w.fundedNextRules;
  for(const [model,daily,total,targets] of [['two',300,600,[480,300]],['one',180,360,[600]],['lite',240,480,[480,240]]]) {
   targets.forEach((target,i)=>{const x=r.calculate(model,String(i+1),6000);assert.equal(x.daily,daily);assert.equal(x.total,total);assert.equal(x.floor,6000-total);assert.equal(x.target,target);});
   assert.equal(r.calculate(model,'funded',6000).target,null);
  }
  for(const c of [0,-1,NaN,Infinity,10000001]) assert.equal(r.calculate('two','1',c),null);
  assert.equal(r.calculate('one','2',6000),null);assert.equal(r.calculate('instant','1',6000),null);
 }finally{w.close();}
});
test('FundedNext : calcul Montréal selon date et décalage serveur', () => {
 const w=createSite();try {
  const r=w.fundedNextRules;
  assert.match(r.localTime('2026-12-01',2),/17:00|17 h 00/);
  assert.match(r.localTime('2026-09-29',3),/17:00|17 h 00/);
  assert.match(r.localTime('2026-10-28',2),/18:00|18 h 00/);
  assert.equal(r.localTime('',3),'Date invalide');
 }finally{w.close();}
});
test('FundedNext : navigation, sélection, validation et retour accueil', () => {
 const w=createSite({storageDisabled:true});try {
  const d=w.document;d.querySelector('#fundedNextButton').click();
  assert.ok(d.querySelector('.fn-page'));assert.equal(d.querySelector('#fundedNextButton').getAttribute('aria-current'),'page');
  const model=d.querySelector('#fn-model'),phase=d.querySelector('#fn-phase');
  phase.value='2';fire(w,phase,'change');assert.match(d.querySelector('#fn-limits').textContent,/300/);
  model.value='one';fire(w,model,'change');assert.equal(phase.value,'1');assert.match(d.querySelector('#fn-limits').textContent,/180/);
  setValue(w,'#fn-capital','');assert.match(d.querySelector('#fn-limits').textContent,/positif/);
  setValue(w,'#fn-capital','15000');phase.value='funded';fire(w,phase,'change');assert.match(d.querySelector('#fn-risk').textContent,/450/);
  model.value='instant';fire(w,model,'change');assert.ok(phase.disabled);assert.match(d.querySelector('#fn-limits').textContent,/suiveur/);
  d.querySelector('#fn-home').click();assert.ok(d.querySelector('.hero'));assert.equal(d.querySelector('#fundedNextButton').getAttribute('aria-current'),null);
 }finally{w.close();}
});

test('Comptes : mode Supabase configuré et deux indicateurs séparés',()=>{
 const w=createSite({accountClient:mockAccountServer()});try{w.document.querySelector('#accountButton').click();const page=w.document.querySelector('.account-page');assert.match(page.textContent,/Connexion obligatoire/);assert.equal(page.querySelectorAll('progress').length,2);assert.ok(page.querySelector('#accountGoogleLogin'));assert.ok(page.querySelector('#accountResetForm'));assert.equal(page.querySelector('#accountHome'),null);}finally{w.close();}
});
function mockAccountServer(){
 const records=new Map();let identity='A',fail=false;
 return {records,setIdentity:id=>{identity=id;},setFail:value=>{fail=value;},
  from:()=>({select:()=>({eq:(_k,id)=>({maybeSingle:async()=>({data:records.get(id)||null,error:null})})})}),
  rpc:async(_name,args)=>{if(fail)return {error:Error('offline')};const old=records.get(identity)||{revision:0};if(old.revision!==args.expected_revision)return {error:Error('conflict')};const revision=old.revision+1;records.set(identity,{payload:JSON.parse(JSON.stringify(args.new_payload)),revision});return {data:revision,error:null};},
  auth:{
   getSession:async()=>({data:{session:null},error:null}),
   onAuthStateChange:()=>({data:{subscription:{unsubscribe:()=>{}}}}),
   signInWithOAuth:async()=>({data:{},error:null}),
   resetPasswordForEmail:async()=>({data:{},error:null}),
   updateUser:async()=>({data:{},error:null}),
   signOut:async()=>({error:null})
  }
 };
}
test('Comptes : A et B isolés, journal et retour au parcours',async()=>{
 const server=mockAccountServer(),w=createSite({accountClient:server});try{
  await w.DjoniaAccounts.getClient();await w.DjoniaAccounts.loadAccount({user:{id:'A',email:'a@example.test'}});
  assert.match(w.document.querySelector('.account-metrics').textContent,/0\/150/);
  w.document.querySelector('#moduleList [data-module="2"]').click();w.document.querySelector('.lesson-complete').click();
  await new Promise(r=>setTimeout(r,30));await w.DjoniaAccounts.flush();
  assert.deepEqual(server.records.get('A').payload.djoniaCompletedLessons,['2:0']);
  await w.DjoniaAccounts.logout();server.setIdentity('B');await w.DjoniaAccounts.loadAccount({user:{id:'B',email:'b@example.test'}});
  assert.match(w.document.querySelector('.account-metrics').textContent,/0\/150/);
  assert.equal(server.records.has('B'),false);
  await w.DjoniaAccounts.logout();server.setIdentity('A');await w.DjoniaAccounts.loadAccount({user:{id:'A',email:'a@example.test'}});
  assert.match(w.document.querySelector('.account-metrics').textContent,/1\/150/);
  w.document.querySelector('#accountResume').click();assert.match(w.document.querySelector('.module-kicker').textContent,/Module 2/);
 }finally{w.close();}
});
test('Comptes : échec réseau visible puis nouvelle tentative sans perte',async()=>{
 const server=mockAccountServer(),w=createSite({accountClient:server});try{
  await w.DjoniaAccounts.getClient();await w.DjoniaAccounts.loadAccount({user:{id:'A',email:'a@example.test'}});server.setFail(true);
  w.document.querySelector('#moduleList [data-module="1"]').click();w.document.querySelector('.lesson-complete').click();await new Promise(r=>setTimeout(r,30));
  assert.match(w.document.querySelector('#accountStatus').textContent,/Non synchronisé/);assert.equal(server.records.has('A'),false);
  server.setFail(false);w.DjoniaAccounts.render();await w.document.querySelector('#accountRetry').onclick();
  assert.deepEqual(server.records.get('A').payload.djoniaCompletedLessons,['1:0']);
 }finally{w.close();}
});
test('Comptes : un conflit ne remplace pas les données du deuxième appareil',async()=>{
 const server=mockAccountServer(),w=createSite({accountClient:server});try{
  await w.DjoniaAccounts.getClient();await w.DjoniaAccounts.loadAccount({user:{id:'A',email:'a@example.test'}});
  server.records.set('A',{revision:5,payload:{djoniaCompletedLessons:['3:0']}});
  w.document.querySelector('#moduleList [data-module="1"]').click();await new Promise(r=>setTimeout(r,30));
  assert.equal(server.records.get('A').revision,5);assert.deepEqual(server.records.get('A').payload.djoniaCompletedLessons,['3:0']);assert.match(w.document.querySelector('#accountStatus').textContent,/Non synchronisé/);
 }finally{w.close();}
});
