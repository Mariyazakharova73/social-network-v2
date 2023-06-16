import React from "react";
import List from "@mui/material/List";
import Post from "../Post/Post";
import Typography from "@mui/material/Typography";
import MyPostForm from "./MyPostForm";

const MyPosts = ({ addPost, profilePage }) => {
  
  const onAddPost = (data) => {
    addPost(data);
  };

  return (
    <>
      <Typography mt={2} variant="h6" component="h2">
        My posts
      </Typography>
      <MyPostForm onAddPost={onAddPost} />
      <List>
        {profilePage.posts.map((item) => {
          return <Post key={item.id} item={item} />;
        })}
      </List>
    </>
  );
};

export default MyPosts;