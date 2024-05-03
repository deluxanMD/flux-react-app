import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormWrapper } from "test-utils/forms-test-utils";
import { object, string } from "yup";
import { FluxRadioButtonField } from "./flux-radio-button-field.component";

const TestComponent = ({ helperText }: { helperText?: string }) => {
  const form = useForm({
    resolver: yupResolver(
      object().shape({
        testField: string().oneOf(["one", "two"]).required(),
      })
    ),
  });

  return (
    <FormWrapper formMethods={form}>
      <FluxRadioButtonField
        name="testField"
        label="Test Field"
        helperText={helperText}
        row
        options={[
          { id: "one", label: "One" },
          { id: "two", label: "Two" },
        ]}
      />
    </FormWrapper>
  );
};

describe("<FluxRadioButtonField />", () => {
  it("should render the field", () => {
    cy.mount(<TestComponent />);
    cy.findByTestId("FluxRadioButtonField").should("exist");
  });

  it("should handle helper text", () => {
    cy.mount(<TestComponent helperText="Test helper text" />);
    cy.findByTestId("FluxRadioButtonField.FormHelperText").should(
      "have.text",
      "Test helper text"
    );
  });

  it("should handle validation", () => {
    cy.mount(<TestComponent />);
    cy.findByTestId("TestForm.Button").click();
    cy.findByTestId("FluxRadioButtonField.FormHelperText").should(
      "have.text",
      "testField is a required field"
    );
  });
});
