import React from "react";
import Stack from "@mui/material/Stack";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <Stack spacing={2} maxWidth="500px">
      <LoginForm />
    </Stack>
  );
};

export default Login;
