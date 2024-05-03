import React from "react";
import { FluxTextField } from "../fields/flux-text-field/flux-text-field.component";
import { FluxPasswordField } from "../fields/flux-password-field/flux-password-field.component";
import { Stack } from "@mui/material";

const SignupForm = () => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <FluxTextField
          name="firstName"
          label="First name"
          placeholder="Your name"
        />
        <FluxTextField
          name="lastName"
          label="Last name"
          placeholder="Family name"
        />
      </Stack>
      <FluxTextField
        name="email"
        label="Email address"
        placeholder="Email address"
      />
      <Stack direction="row" spacing={2}>
        <FluxPasswordField
          name="password"
          label="Password"
          placeholder="Password"
        />
        <FluxPasswordField
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm Password"
        />
      </Stack>
    </>
  );
};

export default SignupForm;
