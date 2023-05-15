import React, { useState } from "react";
import Header from "./components/Header/Header";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import MenuComponent from "./components/MenuComponent/MenuComponent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { deepOrange } from "@mui/material/colors";
import useWindowSize from "./hooks/useWindowSize";
import { Route, Routes } from "react-router-dom";
import { DIALOGS_PATH, MAIN_PATH } from "./utils/constants";

const App = () => {
  const [open, setOpen] = useState(false);
  const windowSize = useWindowSize();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <MobileMenu toggleDrawer={toggleDrawer} open={open} />
      <Grid container spacing={2}>
        <Grid item xs={2} sx={{ display: { xs: "none", md: "block" } }}>
          <Box>
            <MenuComponent />
          </Box>
        </Grid>
        <Grid item xs={windowSize < 900 ? 12 : 10}>
          <Box sx={{ p: 2, bgcolor: deepOrange[100] }}>
            <Routes>
              <Route path={MAIN_PATH} element={<Profile />} />
              <Route path={DIALOGS_PATH} element={<Dialogs />} />
              <Route path={DIALOGS_PATH} element={<Dialogs />} />
              <Route path={DIALOGS_PATH} element={<Dialogs />} />
            </Routes>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
