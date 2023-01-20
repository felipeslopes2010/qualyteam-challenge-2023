Cypress.Commands.add('api_acessaPaginaLogin', () => {
    cy.request({
      method: 'GET',
      url: `/login`,
    })
  })