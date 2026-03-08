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

    it('Dado que o usuário esteja logado na plataforma, ' +
       'Quando ele adicionar produtos ao carrinho, E concluir o fluxo de checkout ' + 
       'Então deve exibir a mensagem exibida em tela confirmando a finalização do pedido', () => {
        
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

        // 2. Validação da URL para garantir que retornou à página de produtos
        cy.url().should('include', '/inventory.html');

        // 3. Validação do Texto "Products"
        ProductsPage.elements.title()
            .should('be.visible')
            .and('have.text', 'Products');

        // 4. Validação do Carrinho Vazio
        cy.get('.shopping_cart_badge').should('not.exist');
    });
});