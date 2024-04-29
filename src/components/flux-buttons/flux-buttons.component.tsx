import { Button, ButtonProps } from "@mui/material";
import React from "react";

export const FluxButtons = ({ children, ...rest }: ButtonProps) => {
  return <Button {...rest}>{children}</Button>;
};
