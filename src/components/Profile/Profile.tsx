import React, { FC } from "react";
import { IProfile, IProfileData } from "../../types/types";
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

interface IProfileProps {
  profile: IProfile | null;
  status: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
  savePhoto: (file: string | Blob) => void;
  saveProfile: (data: IProfileData) => void;
}

const Profile: FC<IProfileProps> = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  return (
    <>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        isOwner={isOwner}
        savePhoto={savePhoto}
        saveProfile={saveProfile}
      />
      {isOwner && <MyPosts />}
    </>
  );
};

export default Profile;
