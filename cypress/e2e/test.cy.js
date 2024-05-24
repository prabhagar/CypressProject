/// <reference types="cypress"/>

it('Google Search', () => { 

    cy.visit("http://google.com");
    cy.get('#APjFqb').type('Prabhagar{Enter}');
    // cy.contains('Google Search').click();
    cy.contains('Videos').click();
});