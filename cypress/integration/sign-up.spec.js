import { buildUser } from '../support/factories';

describe('Sign-Up Form', () => {
  it('can be submitted', () => {
    const user = buildUser();

    cy.visit('/')
      .findByTestId('heading')
      .should('contain', /testing/i);

    cy.findByLabelText(/first name/i).type(user.first_name);
    cy.findByLabelText(/last name/i).type(user.last_name);
    cy.findByLabelText(/email/i).type(user.email);

    cy.findByText(/sign up/i).click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/thanks`);

    cy.findByTestId('heading').should(
      'have.text',
      `Thank You, ${user.first_name}!`
    );
  });

  it('fails on invalid input', () => {
    const user = buildUser({
      email: 'not-a-real-email',
    });

    cy.visit('/');

    cy.findByLabelText(/first name/i).type(user.first_name);
    cy.findByLabelText(/last name/i).type(user.last_name);
    cy.findByLabelText(/email/i).type(user.email);

    cy.findByText(/sign up/i).click();

    // make sure we didn't navigate (via custom command)
    cy.assertHome();

    // email field should be invalid
    cy.get('input:invalid').should('have.length', 1);
  });
});
