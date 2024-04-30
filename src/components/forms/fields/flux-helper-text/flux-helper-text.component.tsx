import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

type FluxHelperTextProps = {
  errorMessage?: string;
  helperText?: string;
};

const FluxHelperText = ({ errorMessage, helperText }: FluxHelperTextProps) => {
  const {
    palette: { error, info },
  } = useTheme();

  return (
    <Box data-testid="FluxHelperText">
      <Typography color={!!errorMessage ? error.main : info.main}>
        {errorMessage ?? helperText}
      </Typography>
    </Box>
  );
};

export default FluxHelperText;
