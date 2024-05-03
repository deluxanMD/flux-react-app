import { InputAdornment, TextField, TextFieldProps } from "@mui/material";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import FluxHelperText from "../flux-helper-text/flux-helper-text.component";
import { Visibility, VisibilityOff } from "@mui/icons-material";

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
            {...field}
            {...rest}
          />
          {(!!error || !!helperText) && (
            <FluxHelperText
              errorMessage={error?.message}
              helperText={helperText?.toString()}
            />
          )}
        </>
      )}
    />
  );
};
