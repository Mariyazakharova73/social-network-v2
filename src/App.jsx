import React, { useState } from "react";
import Header from "./components/Header/Header";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import Box from "@mui/material/Box";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route, Routes } from "react-router-dom";
import { DIALOGS_PATH, MAIN_PATH, USERS_PATH } from "./utils/constants";
import UsersContainer from "./components/Users/UsersContainer";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import Stack from "@mui/material/Stack";
import DesktopMenu from "./components/DesktopMenu/DesktopMenu";

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
      <Box bgcolor="background.default" color="text.primary" height="100vh">
        <Header toggleDrawer={toggleDrawer} changeMode={changeMode} mode={mode} />
        <Stack direction="row" spacing={2}>
          <MobileMenu toggleDrawer={toggleDrawer} open={open} />
          <DesktopMenu />
          <Box flex={4} p={2}>
            <Routes>
              <Route path={MAIN_PATH} element={<Profile />} />
              <Route path={DIALOGS_PATH} element={<DialogsContainer />} />
              <Route path={USERS_PATH} element={<UsersContainer />} />
              <Route path={DIALOGS_PATH} element={<Dialogs />} />
            </Routes>
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default App;
