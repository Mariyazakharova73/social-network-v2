import React, { FC } from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { IChatMessage } from "../../redux/types/chatTypes";

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

export default Message;
