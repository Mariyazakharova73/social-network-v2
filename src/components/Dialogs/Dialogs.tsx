import React, { FC } from "react";
import DialogsItem from "../DialogsItem/DialogsItem";
import DialogsMessage from "../DialogsMessage/DialogsMessage";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import DialogsForm from "./DialogsForm";
import { InitialStateType } from "../../redux/reducers/dialogsReducer";

interface IDialogsProps {
  sendMessage: (message: string) => void;
  dialogsPage: InitialStateType;
}

const Dialogs: FC<IDialogsProps> = ({ sendMessage, dialogsPage }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  let messagesData = dialogsPage.messages;
  let dialogsData = dialogsPage.dialogs;

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  const addNewMessage = (data: string) => {
    sendMessage(data);
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
        </List>
        <DialogsForm addNewMessage={addNewMessage} />
      </Box>
    </Stack>
  );
};

export default Dialogs;
