import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import avatar from "../../images/images.jpg";

const Post = ({ message }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar alt="Cat" src={avatar} />
      </ListItemAvatar>
      <ListItemText primary="Мария З." secondary={message} />
    </ListItem>
  );
};

export default Post;
