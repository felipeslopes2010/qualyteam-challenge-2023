Cypress.Commands.add('gui_realizaLogin', usuario => {  
    cy.get('input[type="text"]').type(usuario.login, {delay: 0})
    cy.get('input[type=password]').type(usuario.senha, { log: false, delay: 0 })
    cy.get('button[type="submit"]').click()
  })

  Cypress.Commands.add('gui_clicaCalendario', () => { 
    cy.get('.datetimepicker-dummy-input').click()
  })

  Cypress.Commands.add('gui_clicaVoltar', () => {
    cy.contains('Voltar').click()
  })
