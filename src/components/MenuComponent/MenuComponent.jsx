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
import { useLocation } from "react-router-dom";

import { MAIN_PATH, DIALOGS_PATH, NEWS_PATH, MUSIC_PATH } from "../../utils/constants";
import Link from "@mui/material/Link";

const dataArr = [
  { text: "Profile", icon: <PersonIcon />, path: MAIN_PATH },
  { text: "Messages", icon: <MailIcon />, path: DIALOGS_PATH },
  { text: "News", icon: <NewspaperIcon />, path: NEWS_PATH },
  { text: "Music", icon: <MusicNoteIcon />, path: MUSIC_PATH },
];

const MenuComponent = () => {
  const location = useLocation();
  return (
    <>
      <List>
        {dataArr.map((obj) => (
          <ListItem key={obj.text} disablePadding selected={location.pathname === obj.path}>
            <Link
              color="inherit"
              variant="inherit"
              href={obj.path}
              sx={{ textDecoration: "none", width: 1 }}
            >
              <ListItemButton>
                <ListItemIcon>{obj.icon}</ListItemIcon>
                <ListItemText primary={obj.text} />
              </ListItemButton>
            </Link>
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
