// cypress/e2e/login.cy.js
import LoginPage from '../support/pages/LoginPage'


describe('Funcionalidade de Login', () => {

    beforeEach(() => {
        // O método visit() já limpa cookies e foca na URL base
        LoginPage.visit();
    });

    it('Deve realizar login com sucesso', () => {
        // Cenário de sucesso utilizando credenciais válidas
        LoginPage.login('standard_user', 'secret_sauce');
        
        // Valida se fomos redirecionados para a vitrine de produtos
        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('have.text', 'Products');
    });

    it('Deve exibir erro ao tentar logar com campos vazios', () => {
        // Clica no login sem preencher usuário ou senha
        LoginPage.elements.loginButton().click();

        // Valida a mensagem de erro específica para Username ausente
        LoginPage.elements.errorMessage()
            .should('be.visible')
            .and('have.text', 'Epic sadface: Username is required');
    });

    it('Deve exibir erro ao tentar logar com usuário bloqueado', () => {
        // Tenta logar com o usuário que sabemos estar travado
        LoginPage.login('locked_out_user', 'secret_sauce');

        // Valida a mensagem de erro específica para bloqueio
        LoginPage.elements.errorMessage()
            .should('be.visible')
            .and('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    });

    it('Deve exibir erro quando a senha não é preenchida', () => {
        // Preenche apenas o usuário e clica em login
        LoginPage.elements.usernameInput().type('standard_user');
        LoginPage.elements.loginButton().click();

        // Valida a mensagem de erro específica para Password ausente
        LoginPage.elements.errorMessage()
            .should('be.visible')
            .and('have.text', 'Epic sadface: Password is required');
    });

    it('Deve exibir erro para credenciais inválidas', () => {
        // Tenta logar com dados que não existem no sistema
        LoginPage.login('usuario_inexistente', 'senha_errada');

        LoginPage.elements.errorMessage()
            .should('be.visible')
            .and('contain', 'Username and password do not match any user in this service');
    });
});