class CartPage {
    elements = {
        title: () => cy.get('.title'),
        checkoutButton: () => cy.get('[data-test="checkout"]'),
        cartItems: () => cy.get('[data-test="inventory-item"]'),
        // Seletor dinâmico para remover qualquer item pelo ID do data-test
        removeBtn: (productSlug) => cy.get(`[data-test="remove-${productSlug}"]`)
    }

    validatePage() {
        this.elements.title().should('be.visible').and('have.text', 'Your Cart');
    }

    // Agora o método aceita o nome do produto como parâmetro
    removeProductAndCheckout(productSlug) {
        if (productSlug) {
            this.elements.removeBtn(productSlug).click();
        }
        this.elements.checkoutButton().click();
    }
}

export default new CartPage();