import React, { FC } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { PROFILE_PATH } from "../../utils/constants";
import { selectIsAuth, selectCaptchaUrl } from "../../redux/selectors/authSelectors";
import { StyledStack } from "./LoginPageStyles";

const LoginPage: FC = () => {
  const captchaUrl = useSelector(selectCaptchaUrl);
  const isAuth = useSelector(selectIsAuth);

  if (isAuth) {
    return <Navigate to={`${PROFILE_PATH}/*`} />;
  }

  return (
    <StyledStack spacing={2}>
      <LoginForm captchaUrl={captchaUrl} />
    </StyledStack>
  );
};

export default LoginPage;
