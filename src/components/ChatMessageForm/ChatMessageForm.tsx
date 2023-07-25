import React, { FC, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import { Formik, Form as FormikForm } from "formik";
import { messageSchema } from "../../utils/validators";
import { createField } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/redux-store";
import { sendMessageThunkCreator } from "../../redux/actions/chatActions";

const ChatMessageForm: FC = () => {
  const [readyStatus, setReadyStatus] = useState<"pending" | "ready">("pending");

  const dispatch: AppDispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        message: "",
      }}
      onSubmit={(values, { resetForm }) => {
        if (!values.message) return;

        dispatch(sendMessageThunkCreator(values.message));
        resetForm();
      }}
      validationSchema={messageSchema}
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
              disabled={!dirty || !!errors.message}
            >
              Send
            </Button>
          </Box>
        </FormikForm>
      )}
    </Formik>
  );
};

export default ChatMessageForm;
