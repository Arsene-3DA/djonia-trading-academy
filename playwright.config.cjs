const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  testMatch: "browser.e2e.spec.cjs",
  outputDir: "test-results/playwright-artifacts",
  use: {
    baseURL: "http://127.0.0.1:4173",
    headless: true
  },
  webServer: {
    command: "node tests/serve.cjs",
    port: 4173,
    reuseExistingServer: true
  },
  reporter: [["list"], ["html", { outputFolder: "playwright-report", open: "never" }]]
});
