import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { HelperText } from "../fields.styles";

type FluxTextFieldProps = {
  "data-testid"?: string;
} & TextFieldProps;

export const FluxTextField = ({
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
            helperText={
              (!!error || !!helperText) && (
                <HelperText data-testid={`${dataTestId}.HelperText`}>
                  {!!error ? error.message : helperText}
                </HelperText>
              )
            }
            {...field}
            {...rest}
          />
        </>
      )}
    />
  );
};
