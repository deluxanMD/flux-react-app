import LoginPage from "./login.page";

describe("<LoginPage />", () => {
  it("page object", () => {
    cy.mount(<LoginPage />);
    cy.findByTestId("Login.Page").should("exist");
  });
});
