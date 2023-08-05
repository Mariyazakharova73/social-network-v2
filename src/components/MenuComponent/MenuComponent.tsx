import React, { FC, useState, useEffect } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, NavLink } from "react-router-dom";
import styles from "../../App.module.css";
import { PROFILE_PATH, CHAT_PATH, USERS_PATH } from "../../utils/constants";
import { StyledBox } from "./MenuComponentStyles";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import "../../i18next/i18next";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import PeopleIcon from "@mui/icons-material/People";

const MenuComponent: FC = () => {
  const [checked, setChecked] = useState(false);
  const location = useLocation();

  const { i18n, t } = useTranslation();

  const handleChangeLng = (event: React.ChangeEvent<HTMLInputElement>) => {
    i18n.changeLanguage(!checked ? "en" : "ru");
    localStorage.setItem("lng", !checked ? "en" : "ru");
    setChecked(event.target.checked);
  };

  useEffect(() => {
    setChecked(localStorage.getItem("lng") === "en");
  }, [checked]);

  return (
    <StyledBox>
      <List>
        <ListItem disablePadding selected={location.pathname === PROFILE_PATH}>
          <NavLink to={PROFILE_PATH} className={styles.link}>
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={t("profile")} />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem disablePadding selected={location.pathname === CHAT_PATH}>
          <NavLink to={CHAT_PATH} className={styles.link}>
            <ListItemButton>
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary={t("chat")} />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem disablePadding selected={location.pathname === USERS_PATH}>
          <NavLink to={USERS_PATH} className={styles.link}>
            <ListItemButton>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary={t("users")} />
            </ListItemButton>
          </NavLink>
        </ListItem>
      </List>
      <Divider />
      <Stack justifyContent="center" alignItems="center" direction="row" p={2}>
        <Typography>Ru</Typography> <Switch onChange={handleChangeLng} checked={checked} />
        <Typography>En</Typography>
      </Stack>
    </StyledBox>
  );
};

export default MenuComponent;
