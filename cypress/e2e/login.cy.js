import LoginPage from '../support/pages/LoginPage'

describe('Funcionalidade: Autenticação de Usuário', () => {

 
    beforeEach(() => {
        LoginPage.visit();
    });

    it('Dado que o usuário possui credenciais válidas, ' +
       'Quando submeter o formulário com dados corretos, ' +
       'Então deve ser redirecionado para a vitrine de produtos', () => {
        
       
        LoginPage.login('standard_user', 'secret_sauce');
        
        // Validações de Sucesso
        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('be.visible').and('have.text', 'Products');
    });

    it('Dado que o usuário tenta logar sem preencher o nome de usuário, ' +
       'Quando clicar no botão de entrar, ' +
       'Então o sistema deve exibir um alerta de que o Username é obrigatório', () => {
        
        // Deixa o campo username vazio e tenta logar
        LoginPage.elements.loginButton().click();

        LoginPage.elements.errorMessage()
            .should('be.visible')
            .and('have.text', 'Epic sadface: Username is required');
    });

    it('Dado que o usuário insere um usuário bloqueado no sistema, ' +
       'Quando tentar realizar a autenticação, ' +
       'Então deve visualizar uma mensagem de erro sobre o bloqueio da conta', () => {
        
        LoginPage.login('locked_out_user', 'secret_sauce');

        LoginPage.elements.errorMessage()
            .should('be.visible')
            .and('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    });

    it('Dado que o usuário esquece de preencher a senha, ' +
       'Quando preencher apenas o usuário e tentar entrar, ' +
       'Então o sistema deve alertar que a Password é obrigatória', () => {
        
        LoginPage.elements.usernameInput().type('standard_user');
        LoginPage.elements.loginButton().click();

        LoginPage.elements.errorMessage()
            .should('be.visible')
            .and('have.text', 'Epic sadface: Password is required');
    });

    it('Dado que o usuário insere credenciais inexistentes ou incorretas, ' +
       'Quando submeter o acesso, ' +
       'Então deve receber uma mensagem de erro de dados inválidos', () => {
        
        LoginPage.login('usuario_invalido', 'senha_incorreta');

        LoginPage.elements.errorMessage()
            .should('be.visible')
            .and('contain', 'Username and password do not match any user in this service');
    });
});