const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const projectRoot = path.resolve(__dirname, "../..");

function read(relativePath) {
  return fs.readFileSync(path.join(projectRoot, relativePath), "utf8");
}

function section(source, startMarker, endMarker) {
  const start = source.indexOf(startMarker);
  const end = source.indexOf(endMarker, start + startMarker.length);
  if (start < 0 || end < 0) {
    throw new Error(`Section introuvable : ${startMarker} → ${endMarker}`);
  }
  return source.slice(start, end);
}

function loadCourse() {
  const appSource = read("app.js");
  const context = vm.createContext({
    window: {},
    console,
    setTimeout,
    clearTimeout,
    setInterval,
    clearInterval
  });

  const courseDefinitions = section(appSource, "const modules =", "const memoryStore =");
  vm.runInContext(`${courseDefinitions}\nwindow.__modules = modules; window.__levelMeta = levelMeta; window.__examData = examData;`, context);
  vm.runInContext(read("course-content.js"), context);
  vm.runInContext(read("course-enrichment.js"), context);

  const quizDefinitions = section(appSource, "const sequenceQuestions =", "function moduleMatchesTool");
  vm.runInContext(`${quizDefinitions}\nwindow.__sequenceQuestions = sequenceQuestions; window.__moduleQuizQuestions = moduleQuizQuestions; window.__getExamQuestions = getExamQuestions;`, context);

  const heroDefinitions = section(appSource, "const moduleHeroVisuals =", "function openModule");
  vm.runInContext(`${heroDefinitions}\nwindow.__moduleHeroVisuals = moduleHeroVisuals;`, context);

  return {
    appSource,
    modules: context.window.__modules,
    levelMeta: context.window.__levelMeta,
    examData: context.window.__examData,
    deepCourse: context.window.deepCourse,
    densityAudit: context.window.courseDensityAudit,
    moduleSyntheses: context.window.moduleSyntheses,
    integratedCases: context.window.integratedCases,
    namedStrategy: context.window.namedStrategy,
    sequenceQuestions: context.window.__sequenceQuestions,
    moduleQuizQuestions: context.window.__moduleQuizQuestions,
    getExamQuestions: context.window.__getExamQuestions,
    moduleHeroVisuals: context.window.__moduleHeroVisuals,
    projectRoot,
    read
  };
}

function wordCount(value) {
  return String(value).trim().split(/\s+/).filter(Boolean).length;
}

module.exports = { loadCourse, wordCount };
