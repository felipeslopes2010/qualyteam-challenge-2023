describe('Testa Date Picker QA-Ninja', () => {
  const local = 'pt-br'
  const MES_ANIVERSARIO = '03'
  const DIA_ANIVERSARIO = '17'
  const ANO_ATUAL = new Date().getFullYear()
  const ANO_NASCIMENTO = '1995'
  const dataAniversario = new Date(`${MES_ANIVERSARIO}-${DIA_ANIVERSARIO}-${ANO_ATUAL}`)
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
    const dataAniversarioFormatado = new Date(`${MES_ANIVERSARIO}-${DIA_ANIVERSARIO}-${ANO_ATUAL}`).toLocaleDateString(local)

    cy.gui_clicaCalendario()
    cy.get('.datepicker-nav').click()
    cy.get(`[data-month=${MES_ANIVERSARIO}]`).click()
    cy.get('.is-current-month').contains(DIA_ANIVERSARIO).click()

    cy.get('.datetimepicker-dummy-input').should('have.value', dataAniversarioFormatado)
  })

  it('Seleciona dia atual no mês anterior', () => {
    const dataAtual = new Date()
    const diaAtual = dataAtual.getDate()
    const mesAnterior = dataAtual.getMonth() - 1
    const dataAtualUltimoMesFormatado = new Date(dataAtual.getFullYear(), mesAnterior, dataAtual.getDate()).toLocaleDateString(local)

    cy.gui_clicaCalendario()
    cy.get('.datepicker-nav-previous').click()
    cy.get('.is-current-month').contains(diaAtual).click()

    cy.get('.datetimepicker-dummy-input').should('have.value', dataAtualUltimoMesFormatado)
  })

  it('Extra 1: Altera Data para aniversário e valida sua seleção', () => {
    const dataAniversarioFormatado = dataAniversario.toLocaleDateString(local)

    cy.clock(dataAniversario)
    cy.visit('/datepicker')

    cy.get('.datetimepicker-dummy-input').should('have.value', dataAniversarioFormatado)
  })

  it('Extra 2: Altera Data para aniversário do próximo ano e valida sua seleção', () => {
    const aniversarioProximoAno = dataAniversario.getFullYear() + 1
    const proximoAniversario = new Date(`${MES_ANIVERSARIO}-${DIA_ANIVERSARIO}-${aniversarioProximoAno}`)
    const proximoAniversarioFormatado = proximoAniversario.toLocaleDateString(local)

    cy.clock(proximoAniversario)
    cy.visit('/datepicker')

    cy.get('.datetimepicker-dummy-input').should('have.value', proximoAniversarioFormatado)
  })

  it('Extra 3: Altera Data para o dia de nascimento', () => {
    const dataNascimento = new Date(`${MES_ANIVERSARIO}-${DIA_ANIVERSARIO}-${ANO_NASCIMENTO}`)
    const dataNascimentoFormatado = dataNascimento.toLocaleDateString(local)

    cy.clock(dataNascimento)
    cy.visit('/datepicker')

    cy.get('.datetimepicker-dummy-input').should('have.value', dataNascimentoFormatado)
  })
})