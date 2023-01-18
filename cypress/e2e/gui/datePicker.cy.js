describe('Testa Date Picker QA-Ninja', () => {
  const local = 'pt-br'
  const MES_ANIVERSARIO = '03'
  const DIA_ANIVERSARIO = '17'
  const ANO_ATUAL = new Date().getFullYear()

  beforeEach(() => {
    cy.visit('/datepicker')
  })
  
  const dataAtual = new Date().toLocaleDateString(local)
  it('Verifica se data atual é preenchida ao entrar no site', () => {

    cy.get('.datetimepicker-dummy-input').should('have.value', dataAtual)
  })

  it('Limpa Date Picker e trás data atual através do botão Today', () => {
    const dataAtual = new Date().toLocaleDateString(local)
    
    cy.gui_clicaCalendario()
    cy.get('.datetimepicker-footer-clear').click()
    cy.gui_clicaCalendario()
    cy.get('.datetimepicker-footer-today').click()

    cy.get('.datetimepicker-dummy-input').should('have.value', dataAtual)
  })

  it('Seleciona data de aniversário', () => {
    const diaAniversario = new Date(`${MES_ANIVERSARIO}-${DIA_ANIVERSARIO}-${ANO_ATUAL}`).toLocaleDateString(local)

    cy.gui_clicaCalendario()
    cy.get('.datepicker-nav').click()
    cy.get(`[data-month=${MES_ANIVERSARIO}]`).click()
    cy.get('.is-current-month').contains(DIA_ANIVERSARIO).click()

    cy.get('.datetimepicker-dummy-input').should('have.value', diaAniversario)
  })

  it('Seleciona dia atual no mês anterior', () => {
    const dataAtual = new Date()
    const diaAtual = dataAtual.getDate()
    const mesAnterior = dataAtual.getMonth() - 1;
    const diaAtualUltimoMes = new Date(dataAtual.getFullYear(), mesAnterior, dataAtual.getDate()).toLocaleDateString(local);

    cy.gui_clicaCalendario()
    cy.get('.datepicker-nav-previous').click()
    cy.get('.datepicker-days').contains(diaAtual).click()

    cy.get('.datetimepicker-dummy-input').should('have.value', diaAtualUltimoMes)
  })

  it('Extra 1: Altera Data para aniversário e valida sua seleção', () => {
    const diaAniversario = new Date(`${MES_ANIVERSARIO}-${DIA_ANIVERSARIO}-${ANO_ATUAL}`)
    const diaAniversarioFormatado = diaAniversario.toLocaleDateString(local);

    cy.clock(diaAniversario)
    cy.visit('/datepicker')

    cy.get('.datetimepicker-dummy-input').should('have.value', diaAniversarioFormatado)
  })

  it('Extra 2: Altera Data para aniversário do próximo ano e valida sua seleção', () => {

    const diaAniversario = new Date(`${MES_ANIVERSARIO}-${DIA_ANIVERSARIO}-${ANO_ATUAL}`)
    const aniversarioProximoAno = diaAniversario.getFullYear() + 1
    const proximoAniversario = new Date(`${MES_ANIVERSARIO}-${DIA_ANIVERSARIO}-${aniversarioProximoAno}`)
    const proximoAniversarioFormatado = proximoAniversario.toLocaleDateString(local)
    
    cy.clock(proximoAniversario)
    cy.visit('/datepicker')

    cy.get('.datetimepicker-dummy-input').should('have.value', proximoAniversarioFormatado)
  })
  
})