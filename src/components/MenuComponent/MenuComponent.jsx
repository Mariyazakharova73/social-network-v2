import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import { useLocation, NavLink } from "react-router-dom";
import { MAIN_PATH, DIALOGS_PATH, NEWS_PATH, MUSIC_PATH, USERS_PATH } from "../../utils/constants";
import styles from "../../App.module.css";

const dataArr = [
  { text: "Profile", icon: <PersonIcon />, path: MAIN_PATH },
  { text: "Messages", icon: <MailIcon />, path: DIALOGS_PATH },
  { text: "News", icon: <NewspaperIcon />, path: NEWS_PATH },
  { text: "Music", icon: <MusicNoteIcon />, path: MUSIC_PATH },
  { text: "Users", icon: <PeopleIcon />, path: USERS_PATH },
];

const MenuComponent = () => {
  const location = useLocation();
  return (
    <>
      <List>
        {dataArr.map((obj) => (
          <ListItem key={obj.text} disablePadding selected={location.pathname === obj.path}>
            <NavLink to={obj.path} className={styles.link}>
              <ListItemButton>
                <ListItemIcon>{obj.icon}</ListItemIcon>
                <ListItemText primary={obj.text} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem key="Settings" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default MenuComponent;
