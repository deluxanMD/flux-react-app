import React from "react";
import { Button } from "@mui/material";
import FluxForm from "components/forms/flux-form/flux-form.component";

type FormWrapperProps = {
  children: React.ReactNode;
  formMethods: any;
};

export const FormWrapper = ({ children, formMethods }: FormWrapperProps) => {
  return (
    <FluxForm
      formMethods={formMethods}
      onSubmit={formMethods.handleSubmit(/* istanbul ignore next */ () => null)}
      data-testid="TestForm"
    >
      {children}
      <Button type="submit" data-testid="TestForm.Button">
        Submit
      </Button>
    </FluxForm>
  );
};
