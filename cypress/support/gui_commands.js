Cypress.Commands.add('gui_realizaLogin', user => {  
    cy.get('input[type="text"]').type(user.login, {delay: 0})
    cy.get('input[type=password]').type(user.password, { log: false, delay: 0 })
    cy.get('button[type="submit"]').click()
  });

  Cypress.Commands.add('gui_clicaCalendario', () => { 
    cy.get('.datetimepicker-dummy-input').click()
  });