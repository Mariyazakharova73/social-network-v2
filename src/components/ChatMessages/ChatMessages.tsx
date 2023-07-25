import React, { FC, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import styles from "../../App.module.css";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { WS_URL } from "../../utils/constants";
import { IChatMessage } from "./../../redux/types/chatTypes";
import { useSelector } from "react-redux";
import { AppStateType } from "../../redux/redux-store";

interface IChatMessageProps {
  message: IChatMessage;
  index: number;
  selectedIndex: number;
  handleListItemClick: (index: number) => void;
}

const Message: FC<IChatMessageProps> = ({ message, index, selectedIndex, handleListItemClick }) => {
  return (
    <React.Fragment>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt={message.userName} src={message.photo} />
        </ListItemAvatar>
        <ListItemText
          primary={message.userName}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {message.message}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
};

const ChatMessages: FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  const messages = useSelector((state: AppStateType) => state.chatReducer.messages);

  return (
    <div style={{ height: "400px", overflowY: "auto", marginBottom: "50px" }}>
      <List>
        {messages.reverse().map((message, index) => {
          return (
            <Message
              key={index}
              handleListItemClick={handleListItemClick}
              message={message}
              index={index}
              selectedIndex={selectedIndex}
            />
          );
        })}
      </List>
    </div>
  );
};

export default ChatMessages;
