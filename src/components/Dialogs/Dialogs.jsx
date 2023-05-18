import React from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import DialogsItem from "../DialogsItem/DialogsItem";
import DialogsMessage from "../DialogsMessage/DialogsMessage";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import { updateNewMessageBodyActionCreator, sendMessageActionCreator } from "../../redux/state";

const Dialogs = ({ state, dispatch }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  let messagesData = state.dialogsPage.messages;
  let dialogsData = state.dialogsPage.dialogs;
  let newMessageBody = state.dialogsPage.newMessageBody;

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  const onSendMessageClick = () => {
    dispatch(sendMessageActionCreator());
  };

  const onNewMessageChange = (e) => {
    let body = e.target.value;
    dispatch(updateNewMessageBodyActionCreator(body));
  };

  return (
    <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
      <List>
        {dialogsData.map((item, index) => {
          return (
            <DialogsItem
              key={item.id}
              handleListItemClick={handleListItemClick}
              item={item}
              index={index}
              selectedIndex={selectedIndex}
            />
          );
        })}
      </List>
      <Box>
        <List>
          {messagesData.map((item, index) => {
            return <DialogsMessage key={index} message={item.message} index={index} />;
          })}
          <TextField
            className="test"
            label="Enter your message"
            multiline
            variant="filled"
            fullWidth
            value={newMessageBody}
            onChange={onNewMessageChange}
          />
        </List>
        <Box mt={2} sx={{ textAlign: "end" }}>
          <Button onClick={onSendMessageClick} variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default Dialogs;
