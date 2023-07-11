import React, { FC, MouseEvent, useState } from "react";
import ProfileAvatar from "./ProfileAvatar";
import ProfileForm from "../Modal/ProfileForm";
import ProfileData from "../ProfileData/ProfileData";
import { StyledStack } from "./ProfileInfoStyles";
import { IProfile, IProfileData } from "../../types/types";

interface IProfileInfoProps {
  profile: IProfile | null;
  status: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
  savePhoto: (file: any) => void;
  saveProfile: (data: IProfileData) => void;
}

const ProfileInfo: FC<IProfileInfoProps> = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  const handleCloseModal = () => {
    setOpenForm(false);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
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
        photo={profile?.photos?.large || ""}
        isOwner={isOwner}
        savePhoto={savePhoto}
      />
      <ProfileForm
        openForm={openForm}
        handleCloseModal={handleCloseModal}
        saveProfile={saveProfile}
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
