it('Extra 3: Acessa página de Login via API', () => {
    cy.api_acessaPaginaLogin()
        .then(response => {
            expect(response.status).to.equal(200);
            expect(response.body).to.contain('Formulário de Login');
            expect(response.body).to.contain('Informe as credenciais mencionadas na video-aula :)')
        })
})