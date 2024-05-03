import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
} from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Option } from "../flux-autocomplete-field/flux-autocomplete-field.component";

type FluxRadioButtonFieldProps = {
  name: string;
  label: string;
  options: Option[];
  helperText?: string;
  "data-testid"?: string;
} & RadioGroupProps;

export const FluxRadioButtonField = ({
  name,
  label,
  options,
  helperText,
  "data-testid": dataTestId = "FluxRadioButtonField",
  ...rest
}: FluxRadioButtonFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl error={!!error} data-testid={dataTestId} fullWidth>
          <FormLabel>{label}</FormLabel>
          <RadioGroup {...rest} {...field}>
            {options.map((option: Option, index: number) => (
              <FormControlLabel
                key={`${option.id}.${index}`}
                value={option.id}
                control={<Radio size="small" />}
                label={option.label}
              />
            ))}
          </RadioGroup>
          {(!!error || !!helperText) && (
            <FormHelperText data-testid={`${dataTestId}.FormHelperText`}>
              {error?.message ?? helperText}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};
