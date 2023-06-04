import HomePage from ;
import LoginPage from "../support/pages/LoginPage";

it('Authorization', () => {
  cy.log('Open website login page');
  cy.visit('https://automationteststore.com/');
  cy.contains('a', 'Login or register').click();

  cy.log('Authorize user');
  cy.get('#loginFrm_loginname').type('Reid_Jacobi48');
  cy.get('#loginFrm_password').type('TestPassword');
  cy.get('button[type="submit"]').contains('Login').click();

  cy.get('span.subtext').should('contain', 'Reid')
})