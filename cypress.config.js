const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6kz63e',
  e2e: {
    baseUrl: 'http://localhost:1234',
    "video": false,
    "screenshots": false,
    "experimentalSessionAndOrigin": true,
  },
  before: function (capabilities, specs) {
    chai = require('chai');
    assert = chai.assert;
    expect = chai.expect;
    should = chai.should();
  }
});
