import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import FluxHelperText from "../flux-helper-text/flux-helper-text.component";

type FluxTextFieldProps = {
  "data-testid"?: string;
} & TextFieldProps;

const FluxTextField = ({
  name,
  helperText,
  "data-testid": dataTestId = "FluxTextField",
  ...rest
}: FluxTextFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <TextField
            size="small"
            error={!!error}
            fullWidth
            data-testid={dataTestId}
            {...field}
            {...rest}
          />
          {(!!error || !!helperText) && (
            <FluxHelperText
              errorMessage={error?.message}
              helperText={helperText.toString()}
            />
          )}
        </>
      )}
    />
  );
};

export default FluxTextField;
