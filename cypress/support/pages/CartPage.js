// cypress/support/pages/CartPage.js
class CartPage {
    elements = {
        title: () => cy.get('.title'),
        checkoutButton: () => cy.get('[data-test="checkout"]'),
        
        removeBtn: (item) => cy.get(`[data-test="remove-${item}"]`)
    }

    validatePage() {
        this.elements.title().should('be.visible').and('have.text', 'Your Cart');
    }

 
    removeProductAndCheckout(productName) {
        if (productName) {
            this.elements.removeBtn(productName).click();
        }
        this.elements.checkoutButton().click();
    }
}

const cartPage = new CartPage();
export default cartPage;