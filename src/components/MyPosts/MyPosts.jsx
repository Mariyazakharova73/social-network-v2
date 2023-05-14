import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Post from "../Post/Post";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const MyPosts = (props) => {

  const [postValue, setPostValue] = React.useState("");
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
          value={postValue}
          onChange={(e) => {
            setPostValue(e.target.value);
          }}
        />
        <Box mt={2} sx={{ textAlign: "end" }}>
          <Button variant="contained">Send</Button>
        </Box>
        <List>
          <Post message='11111'/>
          <Post message='2222'/>
          <Post message='33333'/>
        </List>
      </Box>
    </>
  );
};

export default MyPosts;
