import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import { Formik, Form as FormikForm, Field } from "formik";
import { loginSchema } from "./../../utils/validators";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Formik
      initialValues={{
        login: "",
        password: "",
        rememberMe: true,
      }}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
      validationSchema={loginSchema}
    >
      {({ values, handleChange, errors, touched, dirty }) => (
        <Box sx={{ maxWidth: { sm: "70%" } }}>
          <FormikForm>
            <Stack spacing={2}>
              <Field
                as={TextField}
                variant="filled"
                name="login"
                placeholder="Login"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                fullWidth
                error={touched && !!errors.login}
                helperText={touched && errors.login}
                type="text"
              />
              <Field
                as={TextField}
                name="password"
                placeholder="Password"
                fullWidth
                variant="filled"
                error={touched && !!errors.password}
                helperText={touched && errors.password}
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Box mt={2} sx={{ textAlign: "end" }}>
                <Button
                  variant="contained"
                  type="submit"
                  endIcon={<SendIcon />}
                  disabled={!dirty || !!errors.login || !!errors.password}
                  fullWidth
                >
                  Send
                </Button>
                <label>
                  <Field as={Checkbox} name="rememberMe" type="checkbox" />
                  Запомнить меня
                </label>
              </Box>
            </Stack>
          </FormikForm>
        </Box>
      )}
    </Formik>
  );
};

export default LoginForm;
