import React from "react";
import * as S from "./unauth-layout.styles";
import { Outlet } from "react-router-dom";

const UnAuthLayout = () => {
  return (
    <S.Container>
      <Outlet />
    </S.Container>
  );
};

export default UnAuthLayout;
