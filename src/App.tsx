import React, { Suspense, useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/redux-store";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import UsersPage from "./pages/UsersPage/UsersPage";
import DesktopMenu from "./components/DesktopMenu/DesktopMenu";
import {
  LOGIN_PATH,
  PROFILE_ITEM_PATH,
  USERS_PATH,
  MAIN_PATH,
  PROFILE_PATH,
  CHAT_PATH,
} from "./utils/constants";
import { ThemeProvider } from "@mui/system";
import { createTheme, GlobalStyles, PaletteMode } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import LoginPage from "./pages/LoginPage/LoginPage";
import { initializeAppThunkCreator } from "./redux/actions/appActions";
import Preloader from "./components/Preloader/Preloader";
import Header from "./components/Header/Header";

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const ChatPage = React.lazy(() => import("./pages/ChatPage/ChatPage"));

const App = () => {
  const [mode, setMode] = useState<PaletteMode | undefined>("light");
  const [open, setOpen] = useState(false);

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#057147",
      },
      secondary: {
        main: "#d29262",
      },
    },
    typography: {
      fontFamily: ["montserrat", "serif"].join(","),
    },
  });

  const dispatch: AppDispatch = useDispatch();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const changeMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
    localStorage.setItem("theme", mode === "light" ? "dark" : "light");
  };

  useEffect(() => {
    dispatch(initializeAppThunkCreator());
  }, [dispatch]);

  useEffect(() => {
    let theme = localStorage.getItem("theme") as PaletteMode;
    if (theme) {
      setMode(theme);
    }
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: { backgroundColor: theme.palette.background.default },
        }}
      />
      <Box
        bgcolor="background.default"
        color="text.primary"
        sx={{ maxWidth: "1440px", margin: "0 auto" }}
      >
        <Header toggleDrawer={toggleDrawer} changeMode={changeMode} mode={mode} />
        <Stack direction="row" spacing={2}>
          <MobileMenu toggleDrawer={toggleDrawer} open={open} />
          <DesktopMenu />
          <Box flex={4} p={2}>
            <Suspense fallback={<Preloader initialized={false} />}>
              <Routes>
                <Route path={MAIN_PATH} element={<Navigate to={PROFILE_PATH} />} />
                <Route path={`${PROFILE_ITEM_PATH}?`} element={<ProfileContainer />} />
                <Route path={USERS_PATH} element={<UsersPage />} />
                <Route path={LOGIN_PATH} element={<LoginPage />} />
                <Route path={CHAT_PATH} element={<ChatPage />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </Suspense>
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default App;
