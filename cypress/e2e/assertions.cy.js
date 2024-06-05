


it('Assertions', () => {

    cy.visit('https://example.cypress.io');
    // cy.get('a[href="/commands/querying"]').click();
    // cy.get('h1').should('have.text', 'Querying');
    // cy.contains('cy.get()').click();
    cy.contains('Querying').click({force: true});
    cy.get('#query-btn')
        .should('have.class', 'query-btn')
        .should('have.id', 'query-btn')
        .should('contain', 'Button')
        .should('be.visible');
        // .should('be.be.disabled')

});