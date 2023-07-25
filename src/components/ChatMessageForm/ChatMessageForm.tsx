import React, { FC } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import { Formik, Form as FormikForm } from "formik";
import { messageSchema } from "../../utils/validators";
import { createField } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppStateType } from "../../redux/redux-store";
import { sendMessageThunkCreator } from "../../redux/actions/chatActions";

const ChatMessageForm: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const status = useSelector((state: AppStateType) => state.chatReducer.status);

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
              disabled={!dirty || !!errors.message || status !== "ready"}
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
