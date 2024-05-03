import { DevTool } from "@hookform/devtools";
import { Box, BoxProps, Stack } from "@mui/material";
import React from "react";
import { FormProvider } from "react-hook-form";

type Props = {
  children: React.ReactNode;
  formMethods: any;
  "data-testid"?: string;
  devTool?: boolean;
} & BoxProps &
  React.HTMLProps<HTMLFormElement>;

const FluxForm = ({
  children,
  formMethods,
  "data-testid": dataTestId = "FluxForm",
  devTool,
  ...rest
}: Props) => {
  return (
    <FormProvider {...formMethods}>
      <Box component="form" data-testid={dataTestId} {...rest}>
        {devTool && <DevTool control={formMethods.control} />}
        <Stack spacing={2} display="block">
          {children}
        </Stack>
      </Box>
    </FormProvider>
  );
};

export default FluxForm;
