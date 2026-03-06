import LoginPage from '../support/pages/LoginPage'
import ProductsPage from '../support/pages/ProductsPage'
import CartPage from '../support/pages/CartPage'
import CheckoutPage from '../support/pages/CheckoutPage'

describe('Fluxo de Checkout', () => {
    let data;

    before(() => {
        cy.fixture('checkoutData').then((f) => {
            data = f;
        });
    });

    beforeEach(() => {
        LoginPage.visit();
    });

    it('Dado que o usuário finalizou a compra com sucesso, ' +
       'Quando ele clicar no botão "Back Home" para retornar à vitrine, ' + 
       'Então deve validar que está na tela de produtos e que o carrinho está zerado', () => {
        
        // --- FLUXO DE COMPRA ---
        LoginPage.login('standard_user', 'secret_sauce');
        cy.url().should('include', '/inventory.html'); // Valida redirecionamento pós-login

        ProductsPage.validatePage(); 
        ProductsPage.addProducts(); 
        ProductsPage.goToCart();

        CartPage.validatePage(); 
        CartPage.removeProductAndCheckout(); 

        CheckoutPage.fillInformation(
            data.customer.firstName, 
            data.customer.lastName, 
            data.customer.postalCode
        );
        
        CheckoutPage.finishOrder();

        // --- VALIDAÇÃO DA TELA DE SUCESSO ---
        CheckoutPage.elements.completeHeader()
            .should('be.visible')
            .and('have.text', 'Thank you for your order!');

        // --- FLUXO DE RETORNO E VALIDAÇÕES FINAIS ---
        
        // 1. Clica no botão Back Home
        cy.get('[data-test="back-to-products"]').click();

        // 2. Validação da URL (Garantir que voltou para o inventário)
        cy.url().should('include', '/inventory.html');

        // 3. Validação do Texto "Products" (Garantir que o título da tela está correto)
        ProductsPage.elements.title()
            .should('be.visible')
            .and('have.text', 'Products');

        // 4. Validação do Carrinho Vazio
        // No SauceDemo, o badge (número) desaparece quando está vazio.
        cy.get('.shopping_cart_badge').should('not.exist');
    });
});