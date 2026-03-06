import LoginPage from '../support/pages/LoginPage'
import ProductsPage from '../support/pages/ProductsPage'
import CartPage from '../support/pages/CartPage'
import CheckoutPage from '../support/pages/CheckoutPage'

describe('Fluxo de Compra E2E', () => {
    
    let data;

    beforeEach(() => {
        // Carrega a fixture antes de cada teste para garantir que 'data' esteja disponível
        cy.fixture('checkoutData').then((f) => {
            data = f;
        });
    });

    it('Deve realizar uma compra completa com sucesso usando massa de dados', () => {
        // 1. Login
        LoginPage.login('standard_user', 'secret_sauce');

        // 2. Vitrine de Produtos
        ProductsPage.validatePage(); 
        ProductsPage.addProducts(); 
        ProductsPage.removeProduct(); // Remove a mochila
        ProductsPage.goToCart();

        // 3. Carrinho
        CartPage.validatePage();
        // Passamos o ID do produto que queremos remover no carrinho
        CartPage.removeProductAndCheckout('sauce-labs-bike-light');

        // 4. Checkout: Informações
        CheckoutPage.fillInformation(
            data.customer.firstName, 
            data.customer.lastName, 
            data.customer.postalCode
        );
        
        // 5. Checkout: Visão Geral e Finalização
        CheckoutPage.finishOrder();

        // 6. Validação Final
        CheckoutPage.elements.completeHeader().should('have.text', 'Thank you for your order!');
        
        // 7. Retorno e Limpeza
        CheckoutPage.goBackHome();
        ProductsPage.validatePage();
        ProductsPage.validateEmptyCart(); 
    });
});