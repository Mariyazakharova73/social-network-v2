import React, { FC } from "react";
import List from "@mui/material/List";
import Post from "../Post/Post";
import Typography from "@mui/material/Typography";
import MyPostForm from "../MyPostForm/MyPostForm";
import { IPost, IProfile } from "./../../types/types";
import { AppDispatch } from "../../redux/redux-store";
import { useDispatch } from 'react-redux';
import { addPostAC } from './../../redux/actions/profileActions';
import { useSelector } from 'react-redux';
import { selectCurrentUser, selectPosts } from "./../../redux/selectors/profileSelectors";

// interface IMyPosts {
//   addPost: (post: string) => void;
//   posts: Array<IPost>;
//   profile: IProfile | null;
// }

const MyPosts: FC= React.memo(() => {

  const dispatch: AppDispatch = useDispatch();
  const profile = useSelector(selectCurrentUser);
  const posts = useSelector(selectPosts);

  const onAddPost = (data: string) => {
    dispatch(addPostAC(data))
    //addPost(data);
  };

  return (
    <>
      <Typography mt={2} variant="h6" component="h2">
        My posts
      </Typography>
      <MyPostForm onAddPost={onAddPost} />
      <List>
        {posts.map((item) => {
          return <Post key={item.id} item={item} profile={profile}/>;
        })}
      </List>
    </>
  );
});

export default MyPosts;
