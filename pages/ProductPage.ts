export class ProductPage {
    elements = {
        cartItem: () => cy.get('.cartitem'),
        checkoutButton: () => cy.get('.cartitem'),
        stockWarning: () => cy.get('.cartitem')
    };

    verifyStockDecrease(initialStock: number) {
        this.elements.cartItem().invoke('text').should('contain', `Stock: ${initialStock - 1}`);
    }
}