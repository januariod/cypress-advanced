const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '2bqpdj',
  env: {
    grepFilterSpecs: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-grep/src/plugin')(config);
      return config;
    },
    baseUrl: 'https://wlsf82-hacker-stories.web.app',
  },
});
