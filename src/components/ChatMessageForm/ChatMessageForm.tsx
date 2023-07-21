import React, { FC } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import { Formik, Form as FormikForm } from "formik";
import { newMessageBodySchema } from "../../utils/validators";
import { createField } from "../../utils/helpers";

const ChatMessageForm: FC = () => {
  return <Formik
  initialValues={{
    newMessageBody: "",
  }}
  onSubmit={(values, { resetForm }) => {
    
    resetForm();
  }}
  validationSchema={newMessageBodySchema}
  validateOnBlur
>
  {({ values, handleChange, errors, touched, dirty }) => (
    <FormikForm>
      {createField(
        "message",
        null,
        touched,
        errors,
        "text",
        "medium",
        false,
        "Enter your message",
        "filled",
        true
      )}
      <Box mt={2}>
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
};

export default ChatMessageForm;
