import React from "react";
import List from "@mui/material/List";
import Post from "../Post/Post";
import Typography from "@mui/material/Typography";
import MyPostForm from "./MyPostForm";

const MyPosts = React.memo(({ addPost, posts }) => {
  const onAddPost = (data) => {
    addPost(data);
  };

  console.log("data");

  return (
    <>
      <Typography mt={2} variant="h6" component="h2">
        My posts
      </Typography>
      <MyPostForm onAddPost={onAddPost} />
      <List>
        {posts.map((item) => {
          return <Post key={item.id} item={item} />;
        })}
      </List>
    </>
  );
});

export default MyPosts;
