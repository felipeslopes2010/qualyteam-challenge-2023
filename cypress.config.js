const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://training-wheels-qaninja.herokuapp.com',
    },
  fixturesFolder: false,
  video: false,
  },
);
