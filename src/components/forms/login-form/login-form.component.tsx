import React from "react";
import { FluxTextField } from "../fields/flux-text-field/flux-text-field.component";
import { FluxPasswordField } from "../fields/flux-password-field/flux-password-field.component";

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
    </>
  );
};

export default LoginForm;
