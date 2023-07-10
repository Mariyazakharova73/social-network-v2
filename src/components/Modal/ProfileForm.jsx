import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import { Formik, Form as FormikForm, Field } from "formik";
import { profileSchema } from "./../../utils/validators";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import { StyledModalForm } from "./ModalStyles";
import Checkbox from "@mui/material/Checkbox";
import Notifications from "./../Notifications/Notifications";
import { createField } from "../../utils/helpers";

const ProfileForm = ({ openForm, handleCloseModal, saveProfie, profile }) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Formik
      initialValues={{
        fullName: profile?.fullName,
        lookingForAJob: profile?.lookingForAJob,
        lookingForAJobDescription: profile?.lookingForAJobDescription,
        aboutMe: profile?.aboutMe,
        facebook: profile?.contacts?.facebook,
        website: profile?.contacts?.website,
        vk: profile?.contacts?.vk,
        twitter: profile?.contacts?.twitter,
        instagram: profile?.contacts?.instagram,
        youtube: profile?.contacts?.youtube,
        github: profile?.contacts?.github,
        mainLink: profile?.contacts?.mainLink,
      }}
      enableReinitialize
      onSubmit={(values, { resetForm, setStatus }) => {
        const data = {
          fullName: values.fullName,
          lookingForAJob: values.lookingForAJob,
          lookingForAJobDescription: values.lookingForAJobDescription,
          aboutMe: values.aboutMe,
          contacts: {
            facebook: values.facebook,
            website: values.website,
            vk: values.vk,
            twitter: values.twitter,
            instagram: values.instagram,
            youtube: values.youtube,
            github: values.github,
            mainLink: values.mainLink,
          },
        };
        saveProfie(data);
        resetForm();
        setTimeout(() => {
          handleCloseModal();
        }, 1000);
      }}
      validationSchema={profileSchema}
    >
      {({ values, handleChange, errors, touched, dirty, status }) => (
        <Modal open={openForm} onClose={handleCloseModal}>
          <StyledModalForm>
            <FormikForm>
              <Stack spacing={2}>
                {createField("fullName", "Full name", touched, errors)}
                <label>
                  <Field size="small" as={Checkbox} name="lookingForAJob" type="checkbox" />
                  Looking for a job
                </label>
                {createField(
                  "lookingForAJobDescription",
                  "My professional skills",
                  touched,
                  errors
                )}
                {createField("aboutMe", "About me", touched, errors)}
                <Stack direction="row" sx={{ flexWrap: "wrap" }} spacing={1}>
                  {profile?.contacts &&
                    Object.keys(profile?.contacts).map((item) => {
                      return (
                        <React.Fragment key={item}>
                          {createField(item, item, touched, errors)}
                        </React.Fragment>
                      );
                    })}
                </Stack>
                <Box mt={2} sx={{ textAlign: "end" }}>
                  <Button
                    variant="contained"
                    type="submit"
                    endIcon={<SendIcon />}
                    disabled={
                      !dirty ||
                      !!errors.fullName ||
                      !!errors.lookingForAJob ||
                      !!errors.lookingForAJobDescription ||
                      !!errors.aboutMe ||
                      !!errors.website ||
                      !!errors.twitter ||
                      !!errors.youtube ||
                      !!errors.github ||
                      !!errors.facebook ||
                      !!errors.mainLink
                    }
                    fullWidth
                  >
                    Save
                  </Button>
                </Box>
              </Stack>
              <Notifications text={status?.testError} open={open} handleClose={handleClose} />
            </FormikForm>
          </StyledModalForm>
        </Modal>
      )}
    </Formik>
  );
};

export default ProfileForm;
