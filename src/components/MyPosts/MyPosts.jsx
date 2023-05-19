import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Post from "../Post/Post";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";

const MyPosts = ({ updateNewPostText, addPost, profilePage }) => {
  let newPostElement = React.createRef();

  const onAddPost = () => {
    addPost();
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    updateNewPostText(text);
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
          value={profilePage.newPostText}
          onChange={onPostChange}
        />
        <Box mt={2} sx={{ textAlign: "end" }}>
          <Button onClick={onAddPost} variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
        <List>
          {profilePage.posts.map((item) => {
            return <Post key={item.id} item={item} />;
          })}
        </List>
      </Box>
    </>
  );
};

export default MyPosts;
