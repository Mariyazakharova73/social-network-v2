import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import { Formik, Form as FormikForm, Field } from "formik";
import { newMessageBodySchema } from "./../../utils/validators";

const DialogsForm = ({ addNewMessage }) => {
  return (
    <Formik
      initialValues={{
        newMessageBody: "",
      }}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        addNewMessage(values.newMessageBody);
        resetForm();
      }}
      validationSchema={newMessageBodySchema}
      validateOnBlur
    >
      {({ values, handleChange, errors, touched, dirty }) => (
        <FormikForm>
          <Field
            as={TextField}
            name="newMessageBody"
            label="Enter your message"
            fullWidth
            variant="filled"
            multiline
            error={touched.newMessageBody && !!errors.newMessageBody}
            helperText={touched.newMessageBody && errors.newMessageBody}
            type="text"
          />
          <Box mt={2} sx={{ textAlign: "end" }}>
            <Button
              variant="contained"
              type="submit"
              endIcon={<SendIcon />}
              disabled={!dirty || !!errors.newMessageBody}
            >
              Send
            </Button>
          </Box>
        </FormikForm>
      )}
    </Formik>
  );
};

export default DialogsForm;
