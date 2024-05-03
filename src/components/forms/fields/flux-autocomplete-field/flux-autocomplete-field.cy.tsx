import { useForm } from "react-hook-form";
import { FormWrapper } from "test-utils/forms-test-utils";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AccountCircle } from "@mui/icons-material";
import {
  FluxAutocompleteField,
  Option,
} from "./flux-autocomplete-field.component";

const options: Option[] = [
  { id: "one", label: "One" },
  { id: "two", label: "Two" },
];

const schema = yup.object().shape({
  test: yup.string().required(),
});

const TestComponent = ({
  dataTestId,
  ...rest
}: {
  dataTestId?: string;
  multiple?: boolean;
  Icon?: any;
}) => {
  const form = useForm({ resolver: yupResolver(schema) });
  const testVal = form.watch("test");

  return (
    <FormWrapper formMethods={form}>
      <FluxAutocompleteField
        name="test"
        label="Test Label"
        options={options}
        data-testid={dataTestId}
        {...rest}
      />
      <div data-testid="testValue">{JSON.stringify(testVal)}</div>
    </FormWrapper>
  );
};

describe("<FluxAutocompleteField />", () => {
  it("should load the component", () => {
    cy.mount(<TestComponent />);
    cy.findByTestId("FluxAutocompleteField").should("exist");
  });

  it("should load with custom test id", () => {
    cy.mount(<TestComponent dataTestId="Test.Autocomplete.Field" />);
    cy.findByTestId("Test.Autocomplete.Field").should("exist");
  });

  it("should handle multiple values", () => {
    cy.mount(<TestComponent multiple />);
    cy.findByTestId("FluxAutocompleteField").click();
    cy.findByTestId("FluxAutocompleteField.Listbox").should("exist");
    cy.findByTestId("FluxAutocompleteField.Listbox")
      .findByRole("option")
      .should("have.length", 2);
    cy.findByTestId("FluxAutocompleteField.Listbox")
      .findByRole("option")
      .eq(0)
      .click();
    cy.findByTestId("FluxAutocompleteField").click();
    cy.findByTestId("FluxAutocompleteField.Listbox")
      .findByRole("option")
      .eq(1)
      .click();
    cy.findByTestId("testValue").should("contain.text", "one");
    cy.findByTestId("testValue").should("contain.text", "two");
  });

  it("should clear the value", () => {
    cy.mount(<TestComponent />);
    cy.findByTestId("FluxAutocompleteField").click();
    cy.findByTestId("FluxAutocompleteField.Listbox")
      .findByRole("option")
      .eq(0)
      .click();
    cy.findByTestId("CloseIcon").click();
    cy.findByTestId("testValue").should("have.text", '""');
  });

  it("should clear multiple values", () => {
    cy.mount(<TestComponent multiple />);
    cy.findByTestId("FluxAutocompleteField").click();
    cy.findByTestId("FluxAutocompleteField.Listbox")
      .findByRole("option")
      .eq(0)
      .click();
    cy.findByTestId("CloseIcon").click();
    cy.findByTestId("testValue").should("have.text", "[]");
  });

  it("should handle errors", () => {
    cy.mount(<TestComponent />);
    cy.findByTestId("TestForm.Button").click();
    cy.findByTestId("FluxAutocompleteField.HelperText").should(
      "have.text",
      "test is a required field"
    );
  });

  it("should display icons", () => {
    cy.mount(<TestComponent Icon={AccountCircle} />);
    cy.findByTestId("FluxAutocompleteField.Icon").should("exist");
  });
});
