describe('Visit home page', () => {
  it('visits the home page', () =>{
    cy.visit('http://127.0.0.1:3000/')
  })

  it("There is products on the page", () => {
    cy.get(".products article").should("be.visible");
  });
})