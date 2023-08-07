import React, { FC } from "react";
import List from "@mui/material/List";
import Post from "../Post/Post";
import Typography from "@mui/material/Typography";
import MyPostForm from "../MyPostForm/MyPostForm";
import { AppDispatch } from "../../redux/redux-store";
import { useDispatch } from "react-redux";
import { addPostAC } from "./../../redux/actions/profileActions";
import { useSelector } from "react-redux";
import { selectCurrentUser, selectPosts } from "./../../redux/selectors/profileSelectors";
import "../../i18next/i18next";
import { useTranslation } from 'react-i18next';

const MyPosts: FC = React.memo(() => {
  const dispatch: AppDispatch = useDispatch();
  const profile = useSelector(selectCurrentUser);
  const posts = useSelector(selectPosts);
  const { t } = useTranslation();

  const onAddPost = (data: string) => {
    dispatch(addPostAC(data));
  };

  return (
    <>
      <Typography mt={2} variant="h6" component="h2">
        {t("myPosts")}
      </Typography>
      <MyPostForm onAddPost={onAddPost} />
      <List>
        {posts.map((item) => {
          return <Post key={item.id} item={item} profile={profile} />;
        })}
      </List>
    </>
  );
});

export default MyPosts;
