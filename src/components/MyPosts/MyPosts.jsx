import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Post from "../Post/Post";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";

const MyPosts = ({ postsData, addPost }) => {
  const [postValue, setPostValue] = React.useState("");

  const addNewPost = () => {
    addPost(postValue);
  };

  const handlePostChange = (e) => {
    setPostValue(e.target.value);
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
          id="filled-textarea"
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
          {postsData.posts.map((item) => {
            return <Post key={item.id} item={item} />;
          })}
        </List>
      </Box>
    </>
  );
};

export default MyPosts;
