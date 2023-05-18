import React from "react";
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

const Profile = ({ state, dispatch }) => {
  return (
    <>
      <ProfileInfo />
      <MyPosts state={state} dispatch={dispatch} />
    </>
  );
};

export default Profile;
