const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6kz63e',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


require('@applitools/eyes-cypress')(module);
