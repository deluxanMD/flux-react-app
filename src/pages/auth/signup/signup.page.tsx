import { FluxButtons } from "components/flux-buttons/flux-buttons.component";
import FluxForm from "components/forms/flux-form/flux-form.component";
import SignupForm from "components/forms/signup-form/signup-form.component";
import { useSignupForm } from "components/forms/signup-form/signup-form.hooks";
import React from "react";

const SignupPage = () => {
  const form = useSignupForm();

  const handleLogin = (formData) => {
    console.log(formData);
  };

  return (
    <FluxForm formMethods={form} data-testid="Signup.Page">
      <SignupForm />
      <FluxButtons
        type="submit"
        variant="contained"
        onClick={form.handleSubmit(handleLogin)}
      >
        Signup
      </FluxButtons>
    </FluxForm>
  );
};

export default SignupPage;
