import React from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import DialogsItem from "../DialogsItem/DialogsItem";
import DialogsMessage from "../DialogsMessage/DialogsMessage";

const Dialogs = ({ dialogsData, messagesData }) => {
  
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
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
      <List>
        {messagesData.map((item, index) => {
          return <DialogsMessage key={index} message={item.message} index={index} />;
        })}
      </List>
    </Stack>
  );
};

export default Dialogs;
