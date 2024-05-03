import React from "react";
import { FluxTextField } from "../fields/flux-text-field/flux-text-field.component";
import { FluxPasswordField } from "../fields/flux-password-field/flux-password-field.component";
import { FluxCheckboxField } from "../fields/flux-checkbox-field/flux-checkbox-field.component";

const LoginForm = () => {
  return (
    <>
      <FluxTextField
        name="username"
        label="Username"
        placeholder="Email Address"
      />
      <FluxPasswordField
        name="password"
        label="Password"
        placeholder="Password"
      />
      <FluxCheckboxField name="remember" label="Remember me?" />
    </>
  );
};

export default LoginForm;
