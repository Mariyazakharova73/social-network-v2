import React from "react";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

const Profile = ({ profile, status, updateStatusThunk, isOwner }) => {
  return (
    <>
      <ProfileInfo profile={profile} status={status} updateStatusThunk={updateStatusThunk} isOwner={isOwner}/>
       <MyPostsContainer />
    </>
  );
};

export default Profile;
