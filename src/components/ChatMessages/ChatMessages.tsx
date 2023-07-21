import React, { FC, useState } from "react";
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

interface IChatItemProps {
  message: any;
  index: number;
  selectedIndex: number;
  handleListItemClick: (index: number) => void;
}

const Message: FC<IChatItemProps> = ({ message, index, selectedIndex, handleListItemClick }) => {
  return (
    <React.Fragment>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt={message.name} src={message.url} />
        </ListItemAvatar>
        <ListItemText
          primary={message.author}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {message.text}
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
  const [messages, setMessages] = useState([
    {
      url: "/static/images/avatar/1.jpg",
      author: "Mary",
      text: "ghhhh",
    },
    {
      url: "/static/images/avatar/1.jpg",
      author: "Mary",
      text: "ghhhh",
    },
    {
      url: "/static/images/avatar/1.jpg",
      author: "Mary",
      text: "ghhhh",
    },
    {
      url: "/static/images/avatar/1.jpg",
      author: "Mary",
      text: "ghhhh",
    },
    {
      url: "/static/images/avatar/1.jpg",
      author: "Mary",
      text: "ghhhh",
    },
    {
      url: "/static/images/avatar/1.jpg",
      author: "Mary",
      text: "ghhhh",
    },
  ]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  const addNewMessage = (data: string) => {
    // sendMessage(data);
  };

  return (
    <div style={{ height: "400px", overflowY: "auto", marginBottom: "50px" }}>
      <List>
        {messages.map((message, index) => {
          return (
            <Message
              key={message.author}
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
