import { FormWrapper } from "test-utils/forms-test-utils";
import { FluxCheckboxField } from "./flux-checkbox-field.component";
import { useForm } from "react-hook-form";

const TestComponent = ({ helperText }: { helperText?: string }) => {
  const form = useForm();

  return (
    <FormWrapper formMethods={form}>
      <FluxCheckboxField
        name="testField"
        label="Test Field"
        helperText={helperText}
      />
    </FormWrapper>
  );
};

describe("<FluxCheckboxField />", () => {
  it("should render the field", () => {
    cy.mount(<TestComponent />);
    cy.findByTestId("FluxCheckboxField").should("exist");
  });

  it("should handle helper text", () => {
    cy.mount(<TestComponent helperText="Test message" />);
    cy.findByTestId("FluxCheckboxField.FormHelperText").should(
      "have.text",
      "Test message"
    );
  });

  it("should handle toggle checkbox", () => {
    cy.mount(<TestComponent />);
    cy.findByTestId("FluxCheckboxField")
      .get("span")
      .eq(0)
      .should("not.have.class", "Mui-checked");
    cy.findByTestId("FluxCheckboxField").click();
    cy.findByTestId("FluxCheckboxField")
      .get("span")
      .eq(0)
      .should("have.class", "Mui-checked");
  });
});
