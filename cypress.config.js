const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6kz63e',
  e2e: {
    baseUrl: 'http://localhost:9991',
    "video": false,
    "screenshots": false,
    "experimentalSessionAndOrigin": true
  },
});
