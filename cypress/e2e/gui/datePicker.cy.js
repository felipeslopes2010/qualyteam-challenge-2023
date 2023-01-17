import { faker } from '@faker-js/faker';
const { delay } = require("bluebird")

describe('Testa Date Picker QA-Ninja', () => {
  const locale = 'pt-br'
  
  beforeEach(() => {
    cy.visit('/datepicker')
  })
  
  it('Verifica se data atual é preenchida ao entrar no site', () => {
    const today = new Date().toLocaleDateString(locale)

    cy.get('.datetimepicker-dummy-input').should('have.value', today)
  })

  it('Limpa Date Picker e trás data atual através do botão Today', () => {
    const today = new Date().toLocaleDateString(locale)
    
    cy.gui_clicaCalendario()
    cy.get('.datetimepicker-footer-clear').click()
    cy.gui_clicaCalendario()
    cy.get('.datetimepicker-footer-today').click()

    cy.get('.datetimepicker-dummy-input').should('have.value', today)
  })

  it('Seleciona data de aniversário', () => {
    const birthday = new Date('03-17-2023').toLocaleDateString(locale)

    cy.gui_clicaCalendario()
    cy.get('.datepicker-nav').click()
    cy.get('[data-month="03"]').click()
    cy.get('.datepicker-days').contains('17').click()

    cy.get('.datetimepicker-dummy-input').should('have.value', birthday)
  })

  it('Seleciona dia atual no mês anterior', () => {
    const date = new Date()
    const currentDay = date.getDate()
    const previousMonth = date.getMonth() - 1;
    const todayLastMonth = new Date(date.getFullYear(), previousMonth, date.getDate()).toLocaleDateString(locale);

    cy.gui_clicaCalendario()
    cy.get('.datepicker-nav-previous').click()
    cy.get('.datepicker-days').contains(currentDay).click()

    cy.get('.datetimepicker-dummy-input').should('have.value', todayLastMonth)
  })
  
})