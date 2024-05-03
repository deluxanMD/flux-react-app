import React, { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { OuterContainer, FormContainer } from "./unauth-layout.styles";
import { AppBar, Typography, Container, Toolbar } from "@mui/material";
import { Work } from "@mui/icons-material";

const UnAuthLayout = () => {
  const location = useLocation();

  const formHeading = useMemo(() => {
    if (location.pathname === "/auth/login") {
      return "Login";
    }

    if (location.pathname === "/auth/signup") {
      return "Signup";
    }

    return "";
  }, [location.pathname]);

  return (
    <>
      <AppBar position="static" color="transparent">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Work color="primary" />
          </Toolbar>
        </Container>
      </AppBar>

      <OuterContainer>
        <FormContainer elevation={4}>
          <Typography variant="h5" mb={2}>
            {formHeading}
          </Typography>
          <Outlet />
        </FormContainer>
      </OuterContainer>
    </>
  );
};

export default UnAuthLayout;
