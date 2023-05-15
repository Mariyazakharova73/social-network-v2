import React from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { NavLink } from "react-router-dom";
import DialogsItem from "../DialogsItem/DialogsItem";
import styles from "../../App.module.css";

const dataArr = [
  {
    id: 0,
    name: "Irina",
    messages: ["Irina bbbb bbbbb b", "fghj kkkkkk kkkkkkkkk", "sdtyui tyuo", "hghhhhhhh"],
  },
  {
    id: 1,
    name: "Ivan",
    messages: ["ivan bbbb bbbbb b", "fghj kkkkkk kkkkkkkkk", "sdtyui tyuo", "hghhhhhhh"],
  },
  {
    id: 2,
    name: "Pavel",
    messages: ["pavel bbbb bbbbb b", "fghj kkkkkk kkkkkkkkk", "sdtyui tyuo", "hghhhhhhh"],
  },
  {
    id: 3,
    name: "Vlad",
    messages: ["vlad bbbb bbbbb b", "fghj kkkkkk kkkkkkkkk", "sdtyui tyuo", "hghhhhhhh"],
  },
  {
    id: 4,
    name: "Dima",
    messages: ["dima bbbb bbbbb b", "fghj kkkkkk kkkkkkkkk", "sdtyui tyuo", "hghhhhhhh"],
  },
];

const Dialogs = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
      <List>
        {dataArr.map((item, index) => {
          return (
            <ListItem
              key={item.id}
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(index)}
            >
              <NavLink to={`${item.id}`} className={styles.link}>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar alt={item.name} src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </NavLink>
            </ListItem>
          );
        })}
      </List>
      <List>
        {dataArr[selectedIndex].messages.map((item, index) => {
          return (
            <DialogsItem
              key={index}
              item={item}
              index={index}
              dataArr={dataArr}
              selectedIndex={selectedIndex}
            />
          );
        })}
      </List>
    </Stack>
  );
};

export default Dialogs;
