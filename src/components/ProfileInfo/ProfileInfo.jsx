import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import ProfileAvatar from "./ProfileAvatar";
import ProfileDataForm from "../ProfileForm/ProfileForm";
import ProfileData from "./../ProfileData/ProfileData";

const ProfileInfo = ({ profile, status, updateStatusThunk, isOwner, savePhoto }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatusThunk(status);
  };

  return (
    <Stack direction="row" spacing={3}>
      <ProfileAvatar
        handleClick={handleClick}
        anchorEl={anchorEl}
        handleClose={handleClose}
        photo={profile.photos?.large}
        isOwner={isOwner}
        savePhoto={savePhoto}
      />
      {editMode ? (
        <ProfileDataForm />
      ) : (
        <ProfileData
          status={status}
          updateStatusThunk={updateStatusThunk}
          profile={profile}
          activateEditMode={activateEditMode}
          isOwner={isOwner}
        />
      )}
    </Stack>
  );
};

export default ProfileInfo;
