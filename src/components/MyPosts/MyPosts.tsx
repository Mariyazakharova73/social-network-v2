import React, { FC } from "react";
import List from "@mui/material/List";
import Post from "../Post/Post";
import Typography from "@mui/material/Typography";
import MyPostForm from "./MyPostForm";
import { IPost } from "./../../types/types";

interface IMyPosts {
  addPost: (post: string) => void;
  posts: Array<IPost>;
}

const MyPosts: FC<IMyPosts> = React.memo(({ addPost, posts }) => {
  const onAddPost = (data: string) => {
    addPost(data);
  };

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
