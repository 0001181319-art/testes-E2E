describe('Página Home - Testes E2E', () => {

  beforeEach(() => {
    cy.visit('home.html')
  })

  it('Renderiza a navbar corretamente', () => {
    cy.contains('Connext')
    cy.contains('Home')
    cy.contains('Login / Cadastro')
  })

  it('Renderiza seção Hero corretamente', () => {
    cy.contains('Bem-vindo ao Connext')
    cy.contains('Monitore, gerencie')
  })

  it('Renderiza seção Sobre o Projeto', () => {
    cy.contains('Sobre o Projeto')
    cy.contains('O Connext é uma aplicação')
  })

  it('Verifica se o botão de Login/Cadastro possui link correto', () => {
    cy.contains('Login / Cadastro')
      .should('have.attr', 'href', 'login.html')
  })
})
