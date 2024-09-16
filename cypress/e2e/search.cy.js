describe('Search', () => {
  const pageURL = Cypress.env('URL');
  const search = Cypress.env('Search')

  beforeEach(()=>{
    cy.visit(pageURL);
  });

  it('search', () => {
    cy.get('[id="search-input"]').type(search);
    cy.get('[id="search-icon-legacy"]').click();
    cy.get('[id="contents"]').should('be.visible');
    cy.get('[id="contents"] > *:first-child').should('be.visible');
  })

});