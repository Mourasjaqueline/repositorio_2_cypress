// cypress/support/e2e.js

import './commands'

// Oculta erros de exceção não capturados do console (evita que o teste falhe por erros do site)
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})