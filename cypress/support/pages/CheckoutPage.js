// cypress/support/pages/CheckoutPage.js
class CheckoutPage {
    elements = {
        firstName: () => cy.get('[data-test="firstName"]'),
        lastName: () => cy.get('[data-test="lastName"]'),
        postalCode: () => cy.get('[data-test="postalCode"]'),
        continueButton: () => cy.get('[data-test="continue"]'),
        finishButton: () => cy.get('[data-test="finish"]'),
        completeHeader: () => cy.get('[data-test="complete-header"]'),
        completeText: () => cy.get('[data-test="complete-text"]'),
        backHomeButton: () => cy.get('[data-test="back-to-products"]'),
        title: () => cy.get('.title')
    }

       validatePage() {
        this.elements.title().should('be.visible').and('have.text', 'Checkout: Overview');
    }

    fillInformation(first, last, zip) {
        this.elements.firstName().type(first);
        this.elements.lastName().type(last);
        this.elements.postalCode().type(zip);
        this.elements.continueButton().click();
    }

    finishOrder() {
        this.elements.finishButton().click();
    }

    goBackHome() {
        this.elements.backHomeButton().click();
    }
    
}
export default new CheckoutPage();