import React from "react";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

const Profile = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfie }) => {
  return (
    <>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        isOwner={isOwner}
        savePhoto={savePhoto}
        saveProfie={saveProfie}
      />
      <MyPostsContainer />
    </>
  );
};

export default Profile;
