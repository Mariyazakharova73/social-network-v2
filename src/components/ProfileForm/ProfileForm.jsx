import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import { Formik, Form as FormikForm, Field } from "formik";
import { profileSchema } from "./../../utils/validators";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import Notifications from "./../Notifications/Notifications";

const ProfileForm = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <Formik
      initialValues={{}}
      onSubmit={(values, { resetForm, setStatus }) => {
        // const { email, password, rememberMe } = values;
        // loginThunk(email, password, rememberMe, setStatus, setOpen);
        // resetForm();
      }}
      validationSchema={profileSchema}
    >
      {({ values, handleChange, errors, touched, dirty, status }) => (
        <Box sx={{ maxWidth: { sm: "70%" } }}>
          <FormikForm>
            <Stack spacing={2}>
              <Field
                as={TextField}
                variant="filled"
                name="name"
                placeholder="Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                fullWidth
                error={touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                type="text"
              />
              <Box mt={2} sx={{ textAlign: "end" }}>
                <Button
                  variant="contained"
                  type="submit"
                  endIcon={<SendIcon />}
                  disabled={!dirty || !!errors.name || !!errors.name}
                  fullWidth
                >
                  Send
                </Button>
              </Box>
            </Stack>
            <Notifications text={status?.testError} open={open} handleClose={handleClose} />
          </FormikForm>
        </Box>
      )}
    </Formik>
  );
};

export default ProfileForm;
