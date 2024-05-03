import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import React, { SyntheticEvent } from "react";
import { Controller, useFormContext } from "react-hook-form";

type FluxCheckboxFieldProps = {
  name: string;
  label: string;
  helperText?: string;
  handleChange?: (event: SyntheticEvent<Element, Event>) => typeof event;
  "data-testid"?: string;
} & CheckboxProps;

export const FluxCheckboxField = ({
  name,
  label,
  helperText,
  handleChange = (e) => e,
  "data-testid": dataTestId = "FluxCheckboxField",
  ...rest
}: FluxCheckboxFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, ...fieldRest },
        fieldState: { error },
      }) => (
        <FormControl
          component="fieldset"
          variant="standard"
          error={!!error}
          fullWidth
          data-testid={dataTestId}
        >
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={!!fieldRest.value}
                  onChange={(e) => {
                    onChange(handleChange(e));
                  }}
                  size="small"
                  {...rest}
                />
              }
              label={label}
            />
          </FormGroup>
          {(!!error || !!helperText) && (
            <FormHelperText
              error={!!error}
              data-testid="FluxCheckboxField.FormHelperText"
            >
              {error?.message ?? helperText}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};
