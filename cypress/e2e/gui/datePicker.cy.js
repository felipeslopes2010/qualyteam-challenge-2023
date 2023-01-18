import { faker } from '@faker-js/faker';
const { delay } = require("bluebird")

describe('Testa Date Picker QA-Ninja', () => {
  const locale = 'pt-br'
  const BIRTHDAY_MONTH = '03'
  const BIRTHDAY_DATE = '17'
  const CURRENT_YEAR = new Date().getFullYear()

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
    const birthday = new Date(`${BIRTHDAY_MONTH}-${BIRTHDAY_DATE}-${CURRENT_YEAR}`).toLocaleDateString(locale)

    cy.gui_clicaCalendario()
    cy.get('.datepicker-nav').click()
    cy.get(`[data-month=${BIRTHDAY_MONTH}]`).click()
    cy.get('.is-current-month').contains(BIRTHDAY_DATE).click()

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

  it('Extra 1: Altera Data para aniversário e valida sua seleção', () => {
    const birthday = new Date(`${BIRTHDAY_MONTH}-${BIRTHDAY_DATE}-${CURRENT_YEAR}`)
    const fakeToday = birthday.toLocaleDateString(locale);

    cy.clock(birthday)
    cy.visit('/datepicker')

    cy.get('.datetimepicker-dummy-input').should('have.value', fakeToday)
  })

  it('Extra 2: Altera Data para aniversário do próximo ano e valida sua seleção', () => {

    const birthday = new Date(`${BIRTHDAY_MONTH}-${BIRTHDAY_DATE}-${CURRENT_YEAR}`)
    const nextYearBirthday = birthday.getFullYear() + 1
    const nextBirthday = new Date(`${BIRTHDAY_MONTH}-${BIRTHDAY_DATE}-${nextYearBirthday}`)
    const fakeToday = nextBirthday.toLocaleDateString(locale)
    
    cy.clock(nextBirthday)
    cy.visit('/datepicker')

    cy.get('.datetimepicker-dummy-input').should('have.value', fakeToday)
  })
  
})