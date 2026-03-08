class ProductsPage {
    elements = {
        // Título da página para validar se a navegação ocorreu com sucesso
        title: () => cy.get('.title'),
        

        addBackpack: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        removeBackpack: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
        addBikeLight: () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
        addBoltTShirt: () => cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'),
        
        // Elementos do ícone do carrinho
        cartBadge: () => cy.get('[data-test="shopping-cart-badge"]'),
        cartLink: () => cy.get('[data-test="shopping-cart-link"]')
    }

    // Valida se o título da página é "Products"
    validatePage() {
        this.elements.title().should('be.visible').and('have.text', 'Products');
    }

    // Adiciona os três produtos iniciais do seu fluxo
    addProducts() {
        this.elements.addBackpack().click();
        this.elements.addBikeLight().click();
        this.elements.addBoltTShirt().click();
    }

    // Remove apenas a mochila (Backpack) ainda na vitrine
    removeProduct() {
        this.elements.removeBackpack().click();
    }

    // Clica no ícone do carrinho para avançar no fluxo
    goToCart() {
        this.elements.cartLink().click();
    }

    
     // Validação Visual do Carrinho Limpo    
    validateEmptyCart() {
        this.elements.cartBadge().should('not.exist');
    }
}

export default new ProductsPage();