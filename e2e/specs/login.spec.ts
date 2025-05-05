import HomePage from "../../pages/home.page";
import { TestDataHelper } from '../../support/helpers';

describe('Cadastro', () => {
  it('Preenche com dados aleatórios', () => {
    const user = TestDataHelper.getRandomUser();

    HomePage.visit();
    HomePage.checkPageLoad();
    HomePage.goToLogin();
    cy.get('#loginusername').type(user.username);
    cy.get('#loginpassword').type(user.password);
    cy.contains('button', 'Log in').click();
  });
});
