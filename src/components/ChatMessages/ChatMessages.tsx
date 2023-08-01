import React, { FC, UIEvent, useEffect, useRef, useState } from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { IChatMessage } from "./../../redux/types/chatTypes";
import { useSelector } from "react-redux";
import { selectChatMesssages } from "../../redux/selectors/chatSelectors";

interface IChatMessageProps {
  message: IChatMessage;
}

const Message: FC<IChatMessageProps> = React.memo(({ message }) => {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt={message.userName} src={message.photo} />
        </ListItemAvatar>
        <ListItemText
          primary={message.userName}
          secondary={
            <>
              <Typography component="span" variant="body2" color="text.primary">
                {message.message}
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
});

const ChatMessages: FC = () => {
  const messages = useSelector(selectChatMesssages);
  const ref = useRef<HTMLDivElement>(null);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  const scrollHandler = (e: UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      !isAutoScroll && setIsAutoScroll(true);
    } else {
      isAutoScroll && setIsAutoScroll(false);
    }
  };
  useEffect(() => {
    if (isAutoScroll) {
      ref.current?.scrollIntoView(true);
    }
  }, [messages]);

  return (
    <div
      style={{ height: "400px", overflowY: "auto", marginBottom: "50px" }}
      onScroll={scrollHandler}
    >
      <List>
        {messages.map((message, index) => {
          return <Message key={index} message={message} />;
        })}
        <div ref={ref}></div>
      </List>
    </div>
  );
};

export default ChatMessages;
