import { FormWrapper } from "test-utils/forms-test-utils";
import { FluxTextField } from "./flux-text-field.component";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

const TestComponent = () => {
  const methods = useForm({
    resolver: yupResolver(
      object().shape({
        testField: string().required(),
      })
    ),
  });

  return (
    <FormWrapper formMethods={methods}>
      <FluxTextField
        name="testField"
        label="Test Field"
        helperText="Test Helper Text"
      />
    </FormWrapper>
  );
};

describe("<FluxTextField />", () => {
  it("render the field", () => {
    cy.mount(<TestComponent />);
    cy.findByTestId("FluxTextField").should("exist");
  });

  it("render helper text", () => {
    cy.mount(<TestComponent />);
    cy.findByTestId("FluxTextField.HelperText").should(
      "have.text",
      "Test Helper Text"
    );
  });

  it("render validation error", () => {
    cy.mount(<TestComponent />);

    cy.findByTestId("TestForm.Button").click();
    cy.findByTestId("FluxTextField.HelperText").should(
      "have.text",
      "testField is a required field"
    );
  });
});
