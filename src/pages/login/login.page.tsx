import { FluxButtons } from "components/flux-buttons/flux-buttons.component";
import FluxForm from "components/forms/flux-form/flux-form.component";
import LoginForm from "components/forms/login-form/login-form.component";
import { useLoginForm } from "components/forms/login-form/login-form.hooks";
import React from "react";

const LoginPage = () => {
  const form = useLoginForm();

  const handleLogin = (formData) => {
    console.log(formData);
  };

  return (
    <FluxForm formMethods={form} data-testid="Login.Page">
      <LoginForm />
      <FluxButtons
        type="submit"
        variant="contained"
        onClick={form.handleSubmit(handleLogin)}
      >
        Login
      </FluxButtons>
    </FluxForm>
  );
};

export default LoginPage;