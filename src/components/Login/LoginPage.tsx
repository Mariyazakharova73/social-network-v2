import React, { FC } from "react";
import Stack from "@mui/material/Stack";
import LoginForm from "./LoginForm";
import {  useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { PROFILE_PATH } from "../../utils/constants";
import { AppStateType } from "../../redux/redux-store";

const LoginPage: FC = () => {

  const captchaUrl = useSelector((state: AppStateType) => state.authReducer.captchaUrl);
  const isAuth = useSelector((state: AppStateType) => state.authReducer.isAuth);

  if (isAuth) {
    return <Navigate to={`${PROFILE_PATH}/*`} />;
  }

  return (
    <Stack spacing={2} maxWidth="500px">
      <LoginForm captchaUrl={captchaUrl} />
    </Stack>
  );
};

export default LoginPage;
