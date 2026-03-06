import LoginPage from '../support/pages/LoginPage'
import ProductsPage from '../support/pages/ProductsPage'
import CartPage from '../support/pages/CartPage'
import CheckoutPage from '../support/pages/CheckoutPage'

describe('Fluxo de Compra E2E', () => {
    
    // Criamos uma variável para armazenar os dados da fixture
    let data;

    before(() => {
        // Carrega o arquivo JSON da pasta fixtures
        cy.fixture('checkoutData').then((f) => {
            data = f;
        });
    });

    it('Deve realizar uma compra completa com sucesso usando massa de dados', () => {
        LoginPage.login('standard_user', 'secret_sauce');

        ProductsPage.validatePage(); 
        ProductsPage.addProducts(); 
        ProductsPage.removeProduct(); 
        ProductsPage.goToCart();

        CartPage.validatePage();
        CartPage.removeProductAndCheckout();

        // SUBSTITUIÇÃO: Usando os dados da fixture em vez de texto fixo
        CheckoutPage.fillInformation(
            data.customer.firstName, 
            data.customer.lastName, 
            data.customer.postalCode
        );
        
        CheckoutPage.finishOrder();

        CheckoutPage.elements.completeHeader().should('have.text', 'Thank you for your order!');
        
        CheckoutPage.goBackHome();
        ProductsPage.validatePage();
        ProductsPage.validateEmptyCart(); 
    });
});