const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6kz63e',
  e2e: {
    "video": false,
    "screenshots": false
  }
});