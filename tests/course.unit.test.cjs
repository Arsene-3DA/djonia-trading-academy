const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { loadCourse, wordCount } = require("./helpers/course-fixture.cjs");

const fixture = loadCourse();
const {
  modules,
  levelMeta,
  examData,
  deepCourse,
  densityAudit,
  sequenceQuestions,
  moduleQuizQuestions,
  getExamQuestions,
  moduleHeroVisuals,
  moduleSyntheses,
  integratedCases,
  namedStrategy,
  projectRoot
} = fixture;

function expectedLevel(moduleId) {
  if (moduleId >= 26) return 4;
  if (moduleId <= 5) return 1;
  if (moduleId <= 10) return 2;
  if (moduleId <= 13) return 3;
  if (moduleId <= 20) return 4;
  return 5;
}

test("architecture générale : 30 modules, 150 leçons, 5 niveaux et 5 masterclass", () => {
  assert.equal(modules.length, 30);
  assert.equal(modules.reduce((sum, module) => sum + module.lessons.length, 0), 150);
  assert.equal(levelMeta.length, 5);
  assert.equal(examData.length, 5);
  assert.deepEqual(Array.from(modules, module => module.id), Array.from({ length: 30 }, (_, index) => index + 1));
  assert.equal(modules.filter(module => !module.elective).length, 25);
  assert.equal(modules.filter(module => module.elective).length, 5);
  assert.deepEqual(Array.from(modules.slice(25), module => module.track), ["Essentiel", "Essentiel", "Avancé", "Avancé", "Avancé"]);
});

for (let index = 0; index < modules.length; index += 1) {
  const module = modules[index];
  const label = `Module ${String(module.id).padStart(2, "0")} — ${module.title}`;

  test(label, async t => {
    await t.test("identité, ordre et niveau", () => {
      assert.equal(module.id, index + 1, "les identifiants doivent suivre l’ordre 1 à 30");
      assert.equal(module.level, expectedLevel(module.id));
      assert.ok(module.title.length >= 5);
      assert.ok(module.summary.length >= 40);
      assert.ok(module.skills.length >= 30);
      assert.ok(module.duration.length >= 3);
    });

    await t.test("cinq leçons numérotées et uniques", () => {
      assert.equal(module.lessons.length, 5);
      assert.equal(new Set(Array.from(module.lessons)).size, 5);
      assert.deepEqual(Array.from(module.lessons, (_, lessonIndex) => String(lessonIndex + 1).padStart(2, "0")), ["01", "02", "03", "04", "05"]);
      module.lessons.forEach(title => assert.ok(title.trim().length >= 3));
    });

    await t.test("contenu détaillé et densité pédagogique", () => {
      const content = deepCourse[module.id];
      assert.ok(content, "le module doit avoir un contenu détaillé");
      assert.ok(content.prerequisites.length >= 20);
      assert.equal(content.chapters.length, 5);
      content.chapters.forEach((chapter, lessonIndex) => {
        assert.equal(chapter.length, 3, `la leçon ${lessonIndex + 1} doit avoir trois niveaux d’explication`);
        const counts = Array.from(chapter, wordCount);
        assert.ok(counts[0] >= 45 && counts[0] <= 75, `bloc débutant hors cible : ${counts[0]} mots`);
        assert.ok(counts[1] >= 90 && counts[1] <= 140, `bloc comprendre hors cible : ${counts[1]} mots`);
        assert.ok(counts[2] >= 60 && counts[2] <= 100, `bloc pratiquer hors cible : ${counts[2]} mots`);
      });
      assert.equal(densityAudit.filter(row => row.module === module.id).length, 5);
    });

    await t.test("notions, erreurs et exercice", () => {
      assert.ok(module.concepts.length >= 4);
      module.concepts.forEach(concept => {
        assert.equal(concept.length, 2);
        assert.ok(concept[0].trim().length >= 1);
        assert.ok(concept[1].trim().length >= 20);
      });
      assert.ok(module.errors.length >= 3);
      assert.ok(module.exercise.length >= 20);
      assert.ok(module.answer.length >= 20);
    });

    await t.test("quiz local : trois questions valides et distracteurs uniques", () => {
      const questions = moduleQuizQuestions(module);
      assert.equal(questions.length, 3);
      questions.forEach((question, questionIndex) => {
        assert.equal(question.length, 4);
        assert.ok(question[0].trim().length >= 8);
        assert.equal(question[1].length, 3);
        assert.equal(new Set(Array.from(question[1])).size, 3, `options dupliquées à la question ${questionIndex + 1}`);
        assert.ok(Number.isInteger(question[2]) && question[2] >= 0 && question[2] < 3);
        assert.ok(question[3].trim().length >= 15);
      });
    });

    await t.test("sources et illustration accessibles dans le paquet", () => {
      const sources = deepCourse[module.id].sources;
      assert.ok(sources.length >= 1);
      sources.forEach(source => {
        assert.equal(source.length, 3);
        assert.match(source[1], /^https:\/\//);
        assert.ok(source[2].length >= 15);
      });
      const visual = moduleHeroVisuals[module.id];
      assert.ok(visual, "illustration principale manquante");
      assert.ok(fs.existsSync(path.join(projectRoot, visual)), `fichier visuel absent : ${visual}`);
    });
  });
}

test("les modules de séquence et les cinq masterclass possèdent une question dédiée", () => {
  assert.deepEqual(
    Object.keys(sequenceQuestions).map(Number).sort((a, b) => a - b),
    [7, 8, 10, 13, 16, 19, 20, 21, 22, 24, 26, 27, 28, 29, 30]
  );
});

test("chaque examen contient exactement dix questions fonctionnelles", () => {
  for (let level = 1; level <= 5; level += 1) {
    const questions = getExamQuestions(level);
    assert.equal(questions.length, 10, `examen de niveau ${level}`);
    questions.forEach(question => {
      assert.equal(question[1].length, 3);
      assert.ok(question[2] >= 0 && question[2] <= 2);
    });
  }
});

test("les 30 modules ont une illustration principale existante", () => {
  assert.deepEqual(Object.keys(moduleHeroVisuals).map(Number), Array.from({ length: 30 }, (_, index) => index + 1));
});

test("les masterclass respectent leur périmètre pédagogique", () => {
  const byId = id => modules.find(module => module.id === id);
  assert.equal(byId(26).title, "Masterclass Offre et Demande");
  assert.match(`${byId(26).intro} ${byId(26).concepts.flat().join(" ")}`, /vision Offre\/Demande classique/);
  assert.match(`${byId(26).intro} ${byId(26).concepts.flat().join(" ")}`, /vision ICT/);
  assert.match(byId(27).intro, /aucune nouvelle notion/i);
  assert.match(`${byId(28).intro} ${byId(28).errors.join(" ")}`, /jamais une certitude|identité/i);
  assert.match(`${byId(28).intro} ${byId(28).concepts.flat().join(" ")}`, /lecture Order Flow/);
  assert.match(byId(29).title, /Modèles d’exécution avancés/);
  assert.match(byId(30).title, /US30, NAS100, GER40/);
  assert.match(`${byId(30).intro} ${byId(30).errors.join(" ")}`, /dépend du broker|valeur du point/i);
  assert.ok(fs.existsSync(path.join(projectRoot, "guide-orderflow.md")));
  assert.doesNotMatch(modules.map(module => module.title).join(" "), /Flux d’ordres intensif/i);
});

test("les 30 synthèses sont complètes, uniques et rattachées à leur contenu", () => {
  assert.deepEqual(Object.keys(moduleSyntheses).map(Number), Array.from({ length: 30 }, (_, index) => index + 1));
  const summaries = [];
  for (const module of modules) {
    const synthesis = moduleSyntheses[module.id];
    const sentences = synthesis.summary.split(/[.!?]+/).map(value => value.trim()).filter(Boolean);
    assert.ok(sentences.length >= 3 && sentences.length <= 5, `résumé du module ${module.id} : ${sentences.length} phrases`);
    assert.ok(synthesis.takeaways.length >= 3 && synthesis.takeaways.length <= 7, `à retenir du module ${module.id}`);
    synthesis.takeaways.forEach(item => assert.ok(item.length >= 18, `règle d’action trop courte au module ${module.id}`));
    assert.doesNotMatch(synthesis.summary, /ce module (?:t['’]a|vous a) appris/i);
    summaries.push(synthesis.summary.trim().toLowerCase());
  }
  assert.equal(new Set(summaries).size, 30, "chaque module doit avoir une synthèse non interchangeable");
  assert.match(moduleSyntheses[8].summary, /risque|stop|position/i);
  assert.match(moduleSyntheses[14].summary, /Wyckoff|Spring|UTAD|phase/i);
  assert.match(moduleSyntheses[28].summary, /Delta|absorption|ordre|identité/i);
});

test("les trois cas intégrés combinent réellement plusieurs modules et imposent une validation globale", () => {
  assert.deepEqual(Object.keys(integratedCases).map(Number), [13, 14, 25, 27, 29, 30]);
  const expectations = {
    27: { id: "A", modules: [26, 27, 13], terms: /fraîche|Order Block|checklist/i },
    29: { id: "B", modules: [18, 28, 29, 16], terms: /Delta|Guide Orderflow|non-trade|structure/i },
    30: { id: "C", modules: [30, 8, 17, 9], terms: /BCE|position|module 8|non-trade/i }
  };
  Object.entries(expectations).forEach(([moduleId, expected]) => {
    const study = integratedCases[moduleId];
    assert.equal(study.id, expected.id);
    expected.modules.forEach(id => assert.ok(study.modules.includes(id), `cas ${study.id} : lien au module ${id} absent`));
    assert.ok(study.constraints.length >= 3);
    assert.equal(study.decisions.length, 5);
    assert.equal(study.correction.length, 5);
    assert.match(`${study.scenario} ${study.decisions.join(" ")} ${study.correction.join(" ")}`, expected.terms);
    assert.match(study.mastery, /quiz/i);
  });
});

test("chaque module dispose d’au moins trois sources réelles, distinctes et documentées", () => {
  modules.forEach(module => {
    const sources = deepCourse[module.id].sources;
    assert.ok(sources.length >= 3, `module ${module.id} : seulement ${sources.length} sources`);
    assert.equal(new Set(Array.from(sources, source => source[1])).size, sources.length, `module ${module.id} : URL dupliquée`);
    sources.forEach(source => {
      assert.match(source[1], /^https:\/\//);
      assert.ok(source[0].length >= 8);
      assert.ok(source[2].length >= 15);
    });
  });
  [11, 12, 13].forEach(id => assert.ok(deepCourse[id].sources.length >= 3));
});

test("les cas D, E et F croisent le cœur du cours et signalent la limite statistique", () => {
  const expected = {
    13: { id: "D", modules: [10, 11, 12, 13], terms: /1,0860|CHoCH|FVG|confirmation/i },
    14: { id: "E", modules: [14, 8, 9], terms: /Spring|60 \$|0,12 lot|1,0980/i },
    25: { id: "F", modules: [20, 21, 24, 25], terms: /Expectancy|Drawdown|démo|rester en démo/i }
  };
  Object.entries(expected).forEach(([moduleId, spec]) => {
    const study = integratedCases[moduleId];
    assert.equal(study.id, spec.id);
    assert.deepEqual(Array.from(study.modules), spec.modules);
    assert.equal(study.decisions.length, 5);
    assert.equal(study.correction.length, 5);
    assert.match(`${study.scenario} ${study.correction.join(" ")}`, spec.terms);
    assert.match(study.mastery, /statistique|preuve|résultat/i);
  });
});

test("la stratégie Djonia SSR contient règles, calculs et trois déroulés distincts", () => {
  assert.equal(namedStrategy.name, "Djonia SSR — Sweep, Shift, Retour");
  assert.ok(namedStrategy.mandatory.length >= 5);
  assert.ok(namedStrategy.optional.length >= 3);
  assert.ok(namedStrategy.invalidations.length >= 4);
  assert.ok(namedStrategy.noTrade.length >= 4);
  assert.deepEqual(Array.from(namedStrategy.paths, path => path.label), ["Exemple gagnant", "Exemple perdant", "Faux signal / non-trade"]);
  const fullText = namedStrategy.paths.map(path => path.text).join(" ");
  assert.match(fullText, /1,0852/);
  assert.match(fullText, /30 pips/);
  assert.match(fullText, /0,16 lot/);
  assert.match(fullText, /48 \$/);
  assert.match(namedStrategy.warning, /preuve statistique/i);
});
