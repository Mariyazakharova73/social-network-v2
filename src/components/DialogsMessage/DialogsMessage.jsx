import React from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const DialogsMessage = ({ message, index }) => {
  return (
    <ListItem
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        borderRadius: 5,
        m: 3,
        p: 2,
      }}
    >
      <ListItemAvatar>
        <Avatar alt={index % 2 === 0 ? "" : "M"} src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText>{message}</ListItemText>
    </ListItem>
  );
};

export default DialogsMessage;
