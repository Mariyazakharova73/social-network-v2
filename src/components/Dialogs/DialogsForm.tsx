import React, { FC } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import { Formik, Form as FormikForm } from "formik";
import { newMessageBodySchema } from "../../utils/validators";
import { createField } from "../../utils/helpers";

interface IDialogsFormProps {
  addNewMessage: (newMessageBody: string) => void;
}

interface IDialogsFormValues {
  newMessageBody: string;
}

export type DialogsFormTypeKeys = Extract<keyof IDialogsFormValues, string>;

const DialogsForm: FC<IDialogsFormProps> = ({ addNewMessage }) => {
  return (
    <Formik
      initialValues={{
        newMessageBody: "",
      }}
      onSubmit={(values, { resetForm }) => {
        addNewMessage(values.newMessageBody);
        resetForm();
      }}
      validationSchema={newMessageBodySchema}
      validateOnBlur
    >
      {({ values, handleChange, errors, touched, dirty }) => (
        <FormikForm>
          {createField<DialogsFormTypeKeys>(
            "newMessageBody",
            null,
            touched,
            errors,
            "text",
            "medium",
            true,
            "Enter your message",
            "filled",
            true
          )}
          {/* <Field
            as={TextField}
            name="newMessageBody"
            label="Enter your message"
            fullWidth
            variant="filled"
            multiline
            error={touched.newMessageBody && !!errors.newMessageBody}
            helperText={touched.newMessageBody && errors.newMessageBody}
            type="text"
          /> */}
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
