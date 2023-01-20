Cypress.Commands.add('verificaUrl', url => {
    if(url === undefined) {
      return cy.url().should('be.equal',`${Cypress.config('baseUrl')}/`)
    } 
      return cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${url}`)
  })