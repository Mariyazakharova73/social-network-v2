import React from "react";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

const Profile = ({ profile, status, updateStatusThunk, isOwner, savePhoto }) => {
  return (
    <>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatusThunk={updateStatusThunk}
        isOwner={isOwner}
        savePhoto={savePhoto}
      />
      <MyPostsContainer />
    </>
  );
};

export default Profile;
