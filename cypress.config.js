const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://training-wheels-qaninja.herokuapp.com',
    experimentalRunAllSpecs: true,
  },
  fixturesFolder: false,
  video: false,
},
);
