import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import useWindowSize from "./../../hooks/useWindowSize";
import { Formik, Form as FormikForm, Field } from "formik";
import { newPostTextSchema } from "./../../utils/validators";

const MyPostForm = ({ onAddPost }) => {
  const windowSize = useWindowSize();

  return (
    <Formik
      initialValues={{
        newPostText: "",
      }}
      onSubmit={(values, { resetForm }) => {
        console.log('submitmypost')
        onAddPost(values.newPostText);
        resetForm();
      }}
      validationSchema={newPostTextSchema}
    >
      {({ values, handleChange, errors, touched, dirty }) => (
        <Box sx={{ maxWidth: { sm: "70%" } }} mb={2}>
          <FormikForm>
            <Field
              as={TextField}
              name="newPostText"
              label="Your news"
              fullWidth
              variant="filled"
              multiline
              error={touched.newPostText && !!errors.newPostText}
              helperText={touched.newPostText && errors.newPostText}
              type="text"
            />
            <Box mt={2} sx={{ textAlign: "end" }}>
              <Button
                variant="contained"
                type="submit"
                endIcon={<SendIcon />}
                fullWidth={windowSize < 600}
                disabled={!dirty || !!errors.newPostText}
              >
                Send
              </Button>
            </Box>
          </FormikForm>
        </Box>
      )}
    </Formik>
  );
};

export default MyPostForm;