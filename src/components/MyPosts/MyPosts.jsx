import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Post from "../Post/Post";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import { updateNewPostTextActionCreator, addPostActionCreator } from "../../redux/state";

const MyPosts = ({ state, dispatch }) => {
  let postsData = state.profilePage.posts;

  let newPostElement = React.createRef();

  const addNewPost = () => {
    dispatch(addPostActionCreator());
  };

  const handlePostChange = () => {
    let text = newPostElement.current.value;
    dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <>
      <Typography mt={2} variant="h6" component="h2">
        My posts
      </Typography>
      <Box
        sx={{
          width: 600,
          maxWidth: "100%",
        }}
      >
        <TextField
          inputRef={newPostElement}
          label="Your news"
          multiline
          variant="filled"
          fullWidth
          value={postsData.newPostText}
          onChange={handlePostChange}
        />
        <Box mt={2} sx={{ textAlign: "end" }}>
          <Button onClick={addNewPost} variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
        <List>
          {postsData.map((item) => {
            return <Post key={item.id} item={item} />;
          })}
        </List>
      </Box>
    </>
  );
};

export default MyPosts;
