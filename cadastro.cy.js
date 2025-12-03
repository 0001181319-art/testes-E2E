describe('Testes da página de Cadastro', () => {

  beforeEach(() => {
    cy.visit('cadastro.html');
  });

  it('Carrega todos os elementos essenciais da página', () => {
    cy.contains('Criar Conta');
    cy.get('#nome');
    cy.get('#email');
    cy.get('#senha');
    cy.get('#confirmarSenha');
    cy.contains('Cadastrar');
    cy.contains('Fazer Login');
  });

  it('Exibe erro quando as senhas não coincidem', () => {
    cy.get('#nome').type('Usuário Teste');
    cy.get('#email').type('teste@exemplo.com');
    cy.get('#senha').type('12345678');
    cy.get('#confirmarSenha').type('aaaaaaa1');
    cy.get('button').click();

    cy.get('#erro')
      .should('contain', 'As senhas não coincidem.');
  });

  it('Impede senha com menos de 8 caracteres', () => {
    cy.get('#nome').type('Usuário Teste');
    cy.get('#email').type('teste@exemplo.com');
    cy.get('#senha').type('123');
    cy.get('#confirmarSenha').type('123');
    cy.get('button').click();

    cy.get('#erro')
      .should('contain', 'A senha deve ter pelo menos 8 caracteres.');
  });

});
