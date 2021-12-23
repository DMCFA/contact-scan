describe('Scan Contact app', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000');
    cy.get('i:last').click();
    cy.visit('http://localhost:3000');
    cy.get('.add-btn').click();
    cy.get('.name-field').type('Test');
    cy.get('.number-field').type('01928312800');
    cy.get('.email-field').type('test@gmail.com');
    cy.get('.submit-btn').click();
  });

  it('front page can be opened', function () {
    cy.contains('Test');
    cy.contains('Fox');
  });

  it('can use dynamic search', function () {
    cy.get('input:first').type('H');
    cy.contains('Test').should('not.exist');
    cy.get('input:first');
    cy.focused().clear();
    cy.get('input:first').type('Te');
    cy.contains('Test');
  });

  it('add contact form can be accessed', function () {
    cy.get('.add-btn').click();
  });

  it('can add a contact, view and delete it', function () {
    cy.get('.add-btn').click();
    cy.get('.name-field').type('Cypress');
    cy.get('.number-field').type('01928312890');
    cy.get('.email-field').type('cypress@cypress.com');
    cy.get('.submit-btn').click();
    cy.contains('Cypress');
    cy.get('i:last').click();
  });

  it('can edit contact and view edit', function () {
    cy.contains('Test');
    cy.get('.fa-edit').last().click();
    cy.get('.name-field').type('Edited');
    cy.get('.submit-btn').click();
    cy.contains('Edited');
    cy.contains('Test').should('not.exist');
  });
});
