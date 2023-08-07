import React, { FC } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import useWindowSize from "../../hooks/useWindowSize";
import { Formik, Form as FormikForm } from "formik";
import { newPostTextSchema } from "../../utils/validators";
import { createField } from "../../utils/helpers";
import { useTranslation } from "react-i18next";

interface IMyPostForm {
  onAddPost: (post: string) => void;
}

interface IMyPostFormValues {
  newPostText: string;
}

export type MyPostFormTypeKeys = Extract<keyof IMyPostFormValues, string>;

const MyPostForm: FC<IMyPostForm> = ({ onAddPost }) => {
  const { t } = useTranslation();
  const windowSize = useWindowSize();

  const submitMyPostData = (
    values: IMyPostFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    onAddPost(values.newPostText);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        newPostText: "",
      }}
      onSubmit={submitMyPostData}
      validationSchema={newPostTextSchema}
    >
      {({ values, handleChange, errors, touched, dirty }) => (
        <Box sx={{ maxWidth: { sm: "70%" } }} mb={2}>
          <FormikForm>
            {createField<MyPostFormTypeKeys>("newPostText", t("yourNews"), touched, errors, {
              fullWidth: true,
            })}
            <Box mt={2} sx={{ textAlign: "end" }}>
              <Button
                variant="contained"
                type="submit"
                endIcon={<SendIcon />}
                fullWidth={windowSize ? windowSize < 600 : false}
                disabled={!dirty || !!errors.newPostText}
              >
                {t("buttonSend")}
              </Button>
            </Box>
          </FormikForm>
        </Box>
      )}
    </Formik>
  );
};

export default MyPostForm;
