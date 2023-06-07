import React from "react";
import { NavLink } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemButton from "@mui/material/ListItemButton";
import styles from "../../App.module.css";

const DialogsItem = ({ item, index, selectedIndex, handleListItemClick }) => {
  return (
    <ListItem selected={selectedIndex === index} onClick={() => handleListItemClick(index)}>
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
};

export default DialogsItem;
