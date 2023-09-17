// cypress/integration/fakestore.spec.js

describe("Fake Store App", () => {
  it("Visits the app and fetches data", () => {
    cy.visit("http://localhost:3000"); // Adjust the URL if needed

    // Type a category and submit the form
    cy.get("input").type("electronics");
    cy.get("form").submit();

    // Wait for data to load and assert that it's displayed
    cy.get("li").should("have.length.gt", 0);
  });
});
