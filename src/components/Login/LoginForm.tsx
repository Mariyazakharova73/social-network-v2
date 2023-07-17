import React, { FC, MouseEvent, SyntheticEvent } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import { Formik, Form as FormikForm, Field } from "formik";
import { loginSchema } from "../../utils/validators";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Notifications from "../Notifications/Notifications";
import s from "./LoginForm.module.css";
import { createField } from "../../utils/helpers";

interface ILoginFormProps {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string,
    setStatus: () => void,
    setOpen: any
  ) => void;
  captchaUrl: string | null;
}

interface ILoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
}

type LoginFormValuesTypeKeys = keyof ILoginFormValues;

const LoginForm: FC<ILoginFormProps> = ({ login, captchaUrl }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleClose = (e: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        rememberMe: true,
        captcha: "",
      }}
      onSubmit={(values, { resetForm, setStatus }) => {
        const { email, password, rememberMe, captcha } = values;
        login(email, password, rememberMe, captcha, setStatus, setOpen);
        resetForm();
      }}
      validationSchema={loginSchema}
    >
      {({ values, handleChange, errors, touched, dirty, status }) => (
        <Box sx={{ maxWidth: { sm: "70%" } }}>
          <FormikForm>
            <Stack spacing={2}>
              <Field
                as={TextField}
                variant="filled"
                name="email"
                placeholder="Email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                fullWidth
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                type="text"
              />
              <Field
                as={TextField}
                name="password"
                placeholder="Password"
                fullWidth
                variant="filled"
                error={touched.password && !!errors.password}
                helperText={touched.password && errors.password}
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
                  disabled={!dirty || !!errors.email || !!errors.password}
                  fullWidth
                >
                  Send
                </Button>
                <label>
                  <Field as={Checkbox} name="rememberMe" type="checkbox" />
                  Запомнить меня
                </label>
              </Box>
              {captchaUrl && (
                <div>
                  <img className={s.image} src={captchaUrl} alt="Captcha." />
                  {createField("captcha", "Введите код с картинки", touched, errors)}
                </div>
              )}
            </Stack>
            <Notifications text={status?.testError} open={open} handleClose={handleClose} />
          </FormikForm>
        </Box>
      )}
    </Formik>
  );
};

export default LoginForm;
