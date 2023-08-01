import React, { FC } from "react";
import Stack from "@mui/material/Stack";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { PROFILE_PATH } from "../../utils/constants";
import { selectIsAuth, selectCaptchaUrl } from "../../redux/selectors/authSelectors";

const LoginPage: FC = () => {
  const captchaUrl = useSelector(selectCaptchaUrl);
  const isAuth = useSelector(selectIsAuth);

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
