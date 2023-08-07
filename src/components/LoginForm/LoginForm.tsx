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
import { useDispatch } from "react-redux";
import { loginThunkCreator } from "../../redux/actions/authActions";
import { AppDispatch } from "../../redux/redux-store";
import { useTranslation } from "react-i18next";

interface ILoginFormProps {
  captchaUrl: string | null;
}

interface ILoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
}

type LoginFormValuesTypeKeys = keyof ILoginFormValues;

const LoginForm: FC<ILoginFormProps> = ({ captchaUrl }) => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const dispatch: AppDispatch = useDispatch();

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

  const submitLoginData = (
    values: ILoginFormValues,
    { resetForm, setStatus }: { resetForm: () => void; setStatus: () => void }
  ) => {
    const { email, password, rememberMe, captcha } = values;

    dispatch(loginThunkCreator(email, password, rememberMe, captcha, setStatus, setOpen));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        rememberMe: true,
        captcha: "",
      }}
      onSubmit={submitLoginData}
      validationSchema={loginSchema}
    >
      {({ values, handleChange, errors, touched, dirty, status }) => (
        <Box>
          <FormikForm>
            <Stack spacing={2}>
              {createField<LoginFormValuesTypeKeys>("email", t("email"), touched, errors, t, {
                InputProps: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                },
              })}
              {createField<LoginFormValuesTypeKeys>("password", t("password"), touched, errors, t, {
                InputProps: {
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
                },
                type: showPassword ? "text" : "password",
              })}
              <Box mt={2} sx={{ textAlign: "end" }}>
                <Button
                  variant="contained"
                  type="submit"
                  endIcon={<SendIcon />}
                  disabled={!dirty || !!errors.email || !!errors.password}
                  fullWidth
                >
                  {t("buttonSend")}
                </Button>
                <label>
                  <Field as={Checkbox} name="rememberMe" type="checkbox" />
                  {t("remenberMe")}
                </label>
              </Box>
              {captchaUrl && (
                <div>
                  <img className={s.image} src={captchaUrl} alt="Captcha." />
                  {createField("captcha", t("captcha"), touched, errors, t)}
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
