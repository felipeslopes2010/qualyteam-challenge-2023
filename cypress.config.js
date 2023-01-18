const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://training-wheels-qaninja.herokuapp.com',
    user_name: "",
    user_password: ""
    },
  },
);
