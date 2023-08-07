import React, { FC } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import { Formik, Form as FormikForm } from "formik";
import { messageSchema } from "../../utils/validators";
import { createField } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/redux-store";
import { sendMessageThunkCreator } from "../../redux/actions/chatActions";
import { selectStatus } from "./../../redux/selectors/chatSelectors";
import { useTranslation } from "react-i18next";

const ChatMessageForm: FC = () => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const status = useSelector(selectStatus);

  const submitMessageData = (
    values: { message: string },
    { resetForm }: { resetForm: () => void }
  ) => {
    if (!values.message) return;

    dispatch(sendMessageThunkCreator(values.message));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        message: "",
      }}
      onSubmit={submitMessageData}
      validationSchema={messageSchema}
      validateOnBlur
    >
      {({ values, handleChange, errors, touched, dirty }) => (
        <FormikForm>
          {createField("message", t("chatMessage"), touched, errors, t)}
          <Box mt={2}>
            <Button
              variant="contained"
              type="submit"
              endIcon={<SendIcon />}
              disabled={!dirty || !!errors.message || status !== "ready"}
            >
              {t("buttonSend")}
            </Button>
          </Box>
        </FormikForm>
      )}
    </Formik>
  );
};

export default ChatMessageForm;
