import React from "react";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

const Profile = ({ profile }) => {
  return (
    <>
      <ProfileInfo profile={profile} />
      <MyPostsContainer />
    </>
  );
};

export default Profile;
