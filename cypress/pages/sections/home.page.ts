class HomePage {
    // declarar elementos principais
    elements = {
        navbar: () => cy.get('#nava'),
        loginLink: () => cy.get('#login2'),
        cartLink: () => cy.get(''),
        productItems: () => cy.get(''),
        categoryFilter: (category: string) => cy.contains('.list-group-item', category)
    };

    // criar acoes da pagina
    visit(): void {
        cy.visit('/');
        this.checkPageLoad();
    };

    checkPageLoad(): void {
        this.elements.navbar().should('be.visible');
        cy.title().should('eq', 'STORE')
    };

    goToLogin(): void {
        this.elements.loginLink().click();
    };

}

export default new HomePage();