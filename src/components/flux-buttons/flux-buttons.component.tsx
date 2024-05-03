import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import React from "react";

type FluxButtonsProps = { "data-testid"?: string } & LoadingButtonProps;

export const FluxButtons = ({
  children,
  "data-testid": dataTestId = "FluxButtons",
  ...rest
}: FluxButtonsProps) => {
  return (
    <LoadingButton data-testid={dataTestId} fullWidth {...rest}>
      {children}
    </LoadingButton>
  );
};
