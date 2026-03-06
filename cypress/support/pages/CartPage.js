// cypress/support/pages/CartPage.js
class CartPage {
    elements = {
        title: () => cy.get('.title'),
        removeBikeLight: () => cy.get('[data-test="remove-sauce-labs-bike-light"]'),
        checkoutButton: () => cy.get('[data-test="checkout"]'),
        cartItems: () => cy.get('[data-test="inventory-item"]')
    }

    validatePage() {
        this.elements.title().should('be.visible').and('have.text', 'Your Cart');
    }

    removeProductAndCheckout() {
        this.elements.removeBikeLight().click();
        this.elements.checkoutButton().click();
    }
}
export default new CartPage();