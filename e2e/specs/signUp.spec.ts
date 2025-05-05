import HomePage from '../../pages/sections/home.page'
import { TestDataHelper } from '../../support/helpers'

describe('TC: Sign Up', () => {
    it('Scenario: New user Sign Up', () => {
        // GIVEN that the home page is loaded
        HomePage.visit();
        HomePage.checkPageLoad();
        // WHEN the user clicks on the product Nexus 6
        cy.contains('a.hrefch', 'Nexus 6', { timeout: 10000 }).click();

        //Then it should redirect to the product page
        cy.get('#imgp').should('be.visible');
        cy.contains('h2', 'Nexus 6', { timeout: 3000}).should('be.visible');
    })
});