describe('Trend', () => {
  const pageURL = Cypress.env('URL');

  beforeEach(() => {
      cy.visit(pageURL);
  });

  it('go to Trends', () => {
      cy.get('[aria-label="Guía"]').should('be.visible').first().click();
      cy.get('[title="Tendencias"]').should('be.visible').first().click();
      cy.get('[id="contents"]').should('be.visible');
      cy.get('[id="contents"] > *:first-child').should('be.visible');
  });
});
