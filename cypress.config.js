const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  env: {
    URL: 'https://www.youtube.com/',
    Search: 'nena maldicion'
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
});