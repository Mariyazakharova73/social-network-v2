import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import UsersContainer from "./components/Users/UsersContainer";
import DesktopMenu from "./components/DesktopMenu/DesktopMenu";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { DIALOGS_PATH, LOGIN_PATH, PROFILE_ITEM_PATH, PROFILE_PATH, USERS_PATH } from "./utils/constants";
import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';

const App = () => {
  const [mode, setMode] = useState("light");
  const [open, setOpen] = useState(false);

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const changeMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="background.default" color="text.primary">
        <HeaderContainer toggleDrawer={toggleDrawer} changeMode={changeMode} mode={mode} />
        <Stack direction="row" spacing={2}>
          <MobileMenu toggleDrawer={toggleDrawer} open={open} />
          <DesktopMenu />
          <Box flex={4} p={2}>
            <Routes>
              <Route path="/profile/:id?" element={<ProfileContainer />} />
              <Route path={DIALOGS_PATH} element={<DialogsContainer />} />
              <Route path={USERS_PATH} element={<UsersContainer />} />
              <Route path={LOGIN_PATH} element={<Login />} />
            </Routes>
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default App;
