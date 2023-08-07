import React, { FC, SyntheticEvent } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import { Formik, Form as FormikForm, Field } from "formik";
import { profileSchema } from "../../utils/validators";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import { StyledModalForm, StyledStack } from "./ModalStyles";
import Checkbox from "@mui/material/Checkbox";
import Notifications from "../Notifications/Notifications";
import { createField, setProfileInitialValues, getProfileDataForSubmit } from "../../utils/helpers";
import { IProfile, IProfileData } from "../../types/types";
import { useTranslation } from "react-i18next";

interface IProfileForm {
  openForm: boolean;
  handleCloseModal: () => void;
  saveProfile: (data: IProfileData) => void;
  profile: IProfile | null;
}

export interface IProfileFormValues {
  fullName?: string;
  lookingForAJob?: boolean;
  lookingForAJobDescription?: string;
  aboutMe?: string;
  facebook?: string;
  website?: string;
  vk?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  github?: string;
  mainLink?: string;
}

export type ProfileFormTypeKeys = Extract<keyof IProfileFormValues, string>;

const ProfileForm: FC<IProfileForm> = ({ openForm, handleCloseModal, saveProfile, profile }) => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const handleClose = (e: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const submitProfileData = (
    values: IProfileFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    const data = getProfileDataForSubmit(values);
    saveProfile(data);
    resetForm();
    setTimeout(() => {
      handleCloseModal();
    }, 1000);
  };

  return (
    <Formik
      initialValues={setProfileInitialValues(profile)}
      enableReinitialize
      onSubmit={submitProfileData}
      validationSchema={profileSchema}
    >
      {({ values, handleChange, errors, touched, dirty, status }) => (
        <Modal open={openForm} onClose={handleCloseModal}>
          <StyledModalForm>
            <FormikForm>
              <Stack spacing={2}>
                {createField<ProfileFormTypeKeys>("fullName", t("fullName"), touched, errors)}
                <label style={{ fontFamily: "montserrat" }}>
                  <Field size="small" as={Checkbox} name="lookingForAJob" type="checkbox" />
                  {t("job")}
                </label>
                {createField<ProfileFormTypeKeys>(
                  "lookingForAJobDescription",
                  t("skills"),
                  touched,
                  errors
                )}
                {createField<ProfileFormTypeKeys>("aboutMe", t("aboutMe"), touched, errors)}
                <StyledStack direction="row">
                  {profile?.contacts &&
                    Object.keys(profile?.contacts).map((item) => {
                      return (
                        <React.Fragment key={item}>
                          {createField(item, item, touched, errors)}
                        </React.Fragment>
                      );
                    })}
                </StyledStack>
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
                    {t("saveButton")}
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
