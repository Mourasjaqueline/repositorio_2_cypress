const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    chromeWebSecurity: false, // DESATIVA o bloqueio que causa o erro 401
    viewportWidth: 1280,      // Garante que a tela esteja larga para ver os botões
    viewportHeight: 720,
    video: true, // Garante que o vídeo seja gravado
    screenshotOnRunFailure: true, // Garante a foto se der erro
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
