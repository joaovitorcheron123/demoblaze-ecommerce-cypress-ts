import HomePage from "../../pages/sections/home.page";
import { TestDataHelper } from '../../support/helpers';
import * as BDD from '../../support/bdd';

describe('User Login Flow', () => {

  beforeEach(() => {
    HomePage.visit();
    HomePage.checkPageLoad();
  });

    BDD.given('that the home page is loaded', () => {
      HomePage.checkPageLoad();
    });

    BDD.when('the user clicks on Log In at the top', () => {
      HomePage.goToLogin();
    });
});


  // it('Preenche com dados aleatórios', () => {
  //   const user = TestDataHelper.getRandomUser();

  //   HomePage.visit();
  //   HomePage.checkPageLoad();
  //   HomePage.goToLogin();
  //   cy.get('#loginusername').type(user.username);
  //   cy.get('#loginpassword').type(user.password);
  //   cy.contains('button', 'Log in').click();
  // });
// });
