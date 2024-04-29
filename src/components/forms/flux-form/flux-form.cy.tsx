import { useForm } from "react-hook-form";
import FluxForm from "./flux-form.component";

const Testcomponent = ({ devTool = false }: { devTool?: boolean }) => {
  const form = useForm();

  return (
    <FluxForm formMethods={form} devTool={devTool}>
      <input />
    </FluxForm>
  );
};

describe("<TLForm />", () => {
  it("should load the form", () => {
    cy.mount(<Testcomponent />);
    cy.findByTestId("FluxForm").should("exist");
  });

  it("should load dev tools", () => {
    cy.mount(<Testcomponent devTool={true} />);
    cy.get('button[title="Show dev panel"]').should("exist");
  });
});
