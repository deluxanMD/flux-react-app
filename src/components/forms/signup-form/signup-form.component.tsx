import React from "react";
import { FluxTextField } from "../fields/flux-text-field/flux-text-field.component";
import { FluxPasswordField } from "../fields/flux-password-field/flux-password-field.component";
import { Stack } from "@mui/material";
import { FluxRadioButtonField } from "../fields/flux-radio-button-field/flux-radio-button-field.component";
import {
  FluxAutocompleteField,
  Option,
} from "../fields/flux-autocomplete-field/flux-autocomplete-field.component";

const SignupForm = () => {
  const genderOptions: Option[] = [
    { id: "female", label: "Female" },
    { id: "male", label: "Male" },
    { id: "others", label: "Others" },
  ];

  const occupations: Option[] = [
    { id: "teacher", label: "Teacher" },
    { id: "software_engineer", label: "Software Engineer" },
  ];

  const experiences: Option[] = [
    { id: "<1", label: "Less than 1 year" },
    { id: "1-2", label: "1 to 2 years" },
    { id: "2-4", label: "2 to 4 years" },
    { id: "4>", label: "More than 4 years" },
  ];

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
      <FluxRadioButtonField
        name="gender"
        label="Gender"
        options={genderOptions}
        row
      />
      <FluxAutocompleteField
        name="occupation"
        label="Occupation"
        options={occupations}
      />
      <FluxAutocompleteField
        name="experience"
        label="Experience"
        options={experiences}
      />
    </>
  );
};

export default SignupForm;
