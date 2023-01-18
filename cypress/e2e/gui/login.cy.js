import { faker } from '@faker-js/faker';

describe('Testa Login do Usuário Orkut QA-Ninja', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('Valida mensagem de erro ao realizar Login sem Nickname', () => {
    const password = Cypress.env('user_password')
    cy.get('input[type=password]').type(password, { log: false, delay: 0 })
    cy.get('button[type="submit"]').click()

    cy.contains('Ops! Informe seu nickname.').should('be.visible')

    cy.verificaUrl('login')
  })

  it('Valida mensagem de erro ao realizar Login sem Senha', () => {
    const user = Cypress.env('user_name')
    cy.get('input[type="text"]').type(user, { delay: 0 })
    cy.get('button[type="submit"]').click()

    cy.contains('Ops! Informe sua senha secreta.').should('be.visible')

    cy.verificaUrl('login')
  })

  it('Valida Login com Sucesso', () => {
    const user = {
      login: Cypress.env('user_name'),
      password: Cypress.env('user_password')
    }
    cy.gui_realizaLogin(user)

    cy.contains('Olá Papito, bem-vindo ao Orkut').should('be.visible')
    cy.get('.is-danger').should('be.visible')

    cy.verificaUrl('secure')
  })

  it('Valida mensagem de erro ao realizar Login com Nickname incorreto', () => {
    const userNickIncorreto = {
      login: faker.random.word().toLowerCase(),
      password: Cypress.env('user_password')
    }

    cy.gui_realizaLogin(userNickIncorreto)
    cy.contains('Oops! nickname e/ou senha incorretos :(').should('be.visible')

    cy.verificaUrl('login')
  })

  it('Valida mensagem de erro ao realizar Login com Senha incorreta', () => {
    const userSenhaIncorreta = {
      login: Cypress.env('user_name'),
      password: faker.random.word(),
    }

    cy.gui_realizaLogin(userSenhaIncorreta)
    cy.contains('Oops! nickname e/ou senha incorretos :(').should('be.visible')

    cy.verificaUrl('login')
  })

  it('Valida mensagem de erro ao realizar Login com Nickname e Senha incorretos', () => {
    const userNickESenhaIncorretos = {
      login: faker.random.word().toLowerCase(),
      password: faker.random.word(),
    }

    cy.gui_realizaLogin(userNickESenhaIncorretos)
    cy.contains('Oops! nickname e/ou senha incorretos :(').should('be.visible')

    cy.verificaUrl('login')
  })

  it('Valida mensagem de erro ao tentar acessar área de usuário logado sem ter realizado Login', () => {
    cy.visit('/secure')

    cy.contains('Você deve fazer o login para ver a área logada!').should('be.visible')
    
    cy.verificaUrl('login')
  })

  it('Extra 1: Volta para a página inicial QA-Ninja', () => {
    cy.gui_clicaVoltar()

    cy.contains('Formulário de login').should('be.visible')
    cy.contains('Checkboxes').should('be.visible')
    cy.contains('Radio Buttons').should('be.visible')
    
    cy.verificaUrl()
  })

  it('Extra 2: Volta para a página inicial e entra na página de Date Picker', () => {
    cy.gui_clicaVoltar()    
    cy.contains('Date Picker').click()

    cy.get('.subtitle').should('have.text', 'Um componente customizado para manipulação de datas com seleção do mês, dia e ano :)')

    cy.verificaUrl('datepicker')
  })
  
})