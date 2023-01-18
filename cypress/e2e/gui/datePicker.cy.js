describe('Testa Date Picker QA-Ninja', () => {
  const local = 'pt-br'
  const MES_ANIVERSARIO = '03'
  const DIA_ANIVERSARIO = '17'
  const ANO_ATUAL = new Date().getFullYear()
  const dataAtual = new Date()
  const diaAtual = dataAtual.getDate()
  const diaAniversario = new Date(`${MES_ANIVERSARIO}-${DIA_ANIVERSARIO}-${ANO_ATUAL}`)
  const diaAniversarioFormatado = new Date(`${MES_ANIVERSARIO}-${DIA_ANIVERSARIO}-${ANO_ATUAL}`).toLocaleDateString(local)
  const dataAtualFormatada = new Date().toLocaleDateString(local)

  beforeEach(() => {
    cy.visit('/datepicker')
  })
  
  it('Verifica se data atual é preenchida ao entrar no site', () => {

    cy.get('.datetimepicker-dummy-input').should('have.value', dataAtualFormatada)
  })

  it('Limpa Date Picker e trás data atual através do botão Today', () => {
    
    cy.gui_clicaCalendario()
    cy.get('.datetimepicker-footer-clear').click()
    cy.gui_clicaCalendario()
    cy.get('.datetimepicker-footer-today').click()

    cy.get('.datetimepicker-dummy-input').should('have.value', dataAtualFormatada)
  })

  it('Seleciona data de aniversário', () => {

    cy.gui_clicaCalendario()
    cy.get('.datepicker-nav').click()
    cy.get(`[data-month=${MES_ANIVERSARIO}]`).click()
    cy.get('.is-current-month').contains(DIA_ANIVERSARIO).click()

    cy.get('.datetimepicker-dummy-input').should('have.value', diaAniversarioFormatado)
  })

  it('Seleciona dia atual no mês anterior', () => {
    const mesAnterior = dataAtual.getMonth() - 1;
    const diaAtualUltimoMesFormatado = new Date(dataAtual.getFullYear(), mesAnterior, dataAtual.getDate()).toLocaleDateString(local);

    cy.gui_clicaCalendario()
    cy.get('.datepicker-nav-previous').click()
    cy.get('.datepicker-days').contains(diaAtual).click()

    cy.get('.datetimepicker-dummy-input').should('have.value', diaAtualUltimoMesFormatado)
  })

  it('Extra 1: Altera Data para aniversário e valida sua seleção', () => {
    const diaAniversarioFormatado = diaAniversario.toLocaleDateString(local);

    cy.clock(diaAniversario)
    cy.visit('/datepicker')

    cy.get('.datetimepicker-dummy-input').should('have.value', diaAniversarioFormatado)
  })

  it('Extra 2: Altera Data para aniversário do próximo ano e valida sua seleção', () => {    
    const aniversarioProximoAno = diaAniversario.getFullYear() + 1
    const proximoAniversario = new Date(`${MES_ANIVERSARIO}-${DIA_ANIVERSARIO}-${aniversarioProximoAno}`)
    const proximoAniversarioFormatado = proximoAniversario.toLocaleDateString(local)
    
    cy.clock(proximoAniversario)
    cy.visit('/datepicker')

    cy.get('.datetimepicker-dummy-input').should('have.value', proximoAniversarioFormatado)
  })
  
})