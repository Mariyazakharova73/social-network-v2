import React from "react";
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

const Profile = ({ postsData, addPost }) => {
  return (
    <>
      <ProfileInfo />
      <MyPosts postsData={postsData} addPost={addPost}/>
    </>
  );
};

export default Profile;
