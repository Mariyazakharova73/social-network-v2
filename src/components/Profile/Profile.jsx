import React from "react";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

const Profile = ({ profile, status, updateStatusThunk }) => {
  return (
    <>
      <ProfileInfo profile={profile} status={status} updateStatusThunk={updateStatusThunk} />
      <MyPostsContainer />
    </>
  );
};

export default Profile;
