import React, { FC } from "react";
import Stack from "@mui/material/Stack";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { loginThunkCreator } from "./../../redux/authReducer";
import { Navigate } from "react-router-dom";
import { PROFILE_PATH } from "../../utils/constants";
import { AppStateType } from "../../redux/redux-store";

const Login: FC<PropsType> = ({ login, isAuth, captchaUrl }) => {
  if (isAuth) {
    return <Navigate to={`${PROFILE_PATH}/*`} />;
  }

  return (
    <Stack spacing={2} maxWidth="500px">
      <LoginForm login={login} captchaUrl={captchaUrl} />
    </Stack>
  );
};

interface IMapStateProps {
  isAuth: boolean;
  captchaUrl: string | null;
}

interface IMapDispatchProps {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string,
    setStatus: () => void,
    setOpen: any
  ) => void;
}

interface IOwnProps {}

type PropsType = IMapStateProps & IMapDispatchProps & IOwnProps;

const mapStateToProps = (state: AppStateType): IMapStateProps => {
  return { isAuth: state.authReducer.isAuth, captchaUrl: state.authReducer.captchaUrl };
};

export default connect<IMapStateProps, IMapDispatchProps, IOwnProps, AppStateType>(
  mapStateToProps,
  { login: loginThunkCreator }
)(Login);
