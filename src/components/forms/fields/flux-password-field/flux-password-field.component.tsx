import { InputAdornment, TextField, TextFieldProps } from "@mui/material";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { HelperText } from "../fields.styles";

type FluxPasswordFieldProps = {
  "data-testid"?: string;
} & TextFieldProps;

export const FluxPasswordField = ({
  name,
  helperText,
  "data-testid": dataTestId = "FluxPasswordField",
  ...rest
}: FluxPasswordFieldProps) => {
  const [type, setType] = useState<"text" | "password">("password");
  const { control } = useFormContext();

  const handleVisibility = () => {
    setType(type === "password" ? "text" : "password");
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <TextField
            size="small"
            error={!!error}
            type={type}
            fullWidth
            data-testid={dataTestId}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="start"
                  style={{ cursor: "pointer" }}
                  onClick={handleVisibility}
                  data-testid={`${dataTestId}.InputAdornment`}
                >
                  {type === "password" ? <Visibility /> : <VisibilityOff />}
                </InputAdornment>
              ),
            }}
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
