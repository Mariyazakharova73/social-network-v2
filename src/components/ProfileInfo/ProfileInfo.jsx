import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import ProfileAvatar from "./ProfileAvatar";
import ProfileForm from "../Modal/ProfileForm";
import ProfileData from "./../ProfileData/ProfileData";
import { StyledStack } from "./ProfileInfoStyles";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfie }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  const handleCloseModal = () => {
    setOpenForm(false);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledStack>
      <ProfileAvatar
        handleClick={handleClick}
        anchorEl={anchorEl}
        handleClose={handleClose}
        photo={profile?.photos?.large}
        isOwner={isOwner}
        savePhoto={savePhoto}
      />
      <ProfileForm
        openForm={openForm}
        handleCloseModal={handleCloseModal}
        saveProfie={saveProfie}
        profile={profile}
      />
      <ProfileData
        status={status}
        updateStatus={updateStatus}
        profile={profile}
        isOwner={isOwner}
        handleOpenForm={handleOpenForm}
      />
    </StyledStack>
  );
};

export default ProfileInfo;
