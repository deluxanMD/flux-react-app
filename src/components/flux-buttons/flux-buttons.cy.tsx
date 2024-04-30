import { FluxButtons } from "./flux-buttons.component";

describe("<FluxButtons />", () => {
  describe("text", () => {
    it("text button", () => {
      cy.mount(<FluxButtons variant="text">Text Button</FluxButtons>);
      cy.findByTestId("FluxButtons").should("exist");
    });

    it("text button loading", () => {
      cy.mount(
        <FluxButtons variant="text" loading>
          Text Button
        </FluxButtons>
      );
      cy.findByTestId("FluxButtons").should("exist");
    });
  });

  describe("contained", () => {
    it("contained button", () => {
      cy.mount(<FluxButtons variant="contained">Contained Button</FluxButtons>);
      cy.findByTestId("FluxButtons").should("exist");
    });

    it("contained button loading", () => {
      cy.mount(
        <FluxButtons variant="contained" loading>
          Contained Button
        </FluxButtons>
      );
      cy.findByTestId("FluxButtons").should("exist");
    });
  });

  describe("outlined", () => {
    it("outlined button", () => {
      cy.mount(<FluxButtons variant="outlined">Outlined Button</FluxButtons>);
      cy.findByTestId("FluxButtons").should("exist");
    });

    it("outlined button loading", () => {
      cy.mount(
        <FluxButtons variant="outlined" loading>
          Outlined Button
        </FluxButtons>
      );
      cy.findByTestId("FluxButtons").should("exist");
    });
  });
});
