import { FormWrapper } from "test-utils/forms-test-utils";
import FluxPasswordField from "./flux-password-field.component";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

const TestComponent = ({ helperText }: { helperText?: string }) => {
  const methods = useForm({
    resolver: yupResolver(
      object().shape({
        testField: string().required(),
      })
    ),
  });

  return (
    <FormWrapper formMethods={methods}>
      <FluxPasswordField
        name="testField"
        label="Password Field"
        helperText={helperText}
      />
    </FormWrapper>
  );
};

describe("<FluxPasswordField />", () => {
  it("should render the field", () => {
    cy.mount(<TestComponent />);
    cy.findByTestId("FluxPasswordField").should("exist");
  });

  it("render helper text", () => {
    cy.mount(<TestComponent helperText="Test Helper Text" />);
    cy.findByTestId("FluxHelperText").should("have.text", "Test Helper Text");
  });

  it("render validation error", () => {
    cy.mount(<TestComponent />);

    cy.findByTestId("TestForm.Button").click();
    cy.findByTestId("FluxHelperText").should(
      "have.text",
      "testField is a required field"
    );
  });

  it("show and hide toggle", () => {
    cy.mount(<TestComponent />);
    cy.findByTestId("FluxPasswordField").type("1234");
    cy.get('input[name="testField"]').should("have.attr", "type", "password");
    cy.findByTestId("VisibilityIcon").should("exist");
    cy.findByTestId("FluxPasswordField.InputAdornment").click({ force: true });
    cy.findByTestId("VisibilityOffIcon").should("exist");
  });
});
