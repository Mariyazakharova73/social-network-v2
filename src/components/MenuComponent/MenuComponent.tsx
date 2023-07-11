import React, { FC } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import { useLocation, NavLink } from "react-router-dom";
import styles from "../../App.module.css";
import { sidebarData } from "../../utils/constants";
import { StyledBox } from "./MenuComponentStyles";

const MenuComponent: FC = () => {
  const location = useLocation();
  return (
    <StyledBox>
      <List>
        {sidebarData.map((obj) => (
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
    </StyledBox>
  );
};

export default MenuComponent;
