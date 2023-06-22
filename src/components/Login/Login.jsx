import React from "react";
import Stack from "@mui/material/Stack";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { loginThunkCreator } from "./../../redux/authReducer";
import { Navigate } from "react-router-dom";
import { PROFILE_PATH } from "../../utils/constants";

const Login = ({ loginThunk, isAuth }) => {
  if (isAuth) {
    return <Navigate to={`${PROFILE_PATH}/*`} />;
  }

  return (
    <Stack spacing={2} maxWidth="500px">
      <LoginForm loginThunk={loginThunk} />
    </Stack>
  );
};

const mapStateToProps = (state) => {
  return { isAuth: state.authReducer.isAuth };
};

export default connect(mapStateToProps, { loginThunk: loginThunkCreator })(Login);
