const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6kz63e',
  e2e: {
    baseUrl: 'http://localhost:1234',
    "video": false,
    "screenshots": false,
    "experimentalSessionAndOrigin": true,
  },
});
