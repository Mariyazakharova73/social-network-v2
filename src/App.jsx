import React, { Component, Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { connect, Provider } from "react-redux";
import store from "./redux/redux-store";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import UsersContainer from "./components/Users/UsersContainer";
import DesktopMenu from "./components/DesktopMenu/DesktopMenu";
import { DIALOGS_PATH, LOGIN_PATH, PROFILE_ITEM_PATH, USERS_PATH } from "./utils/constants";
import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { initializeAppThunkCreator } from "./redux/appReducer";
import Preloader from "./components/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends Component {
  // const [mode, setMode] = useState("light");
  // const [open, setOpen] = useState(false);
  state = {
    mode: "light",
    open: false,
  };

  componentDidMount() {
    this.props.initializeAppThunk();
  }

  toggleDrawer = (newOpen) => () => {
    this.setState({ ...this.state, open: newOpen });
    // setOpen(newOpen);
  };

  changeMode = () => {
    this.setState({ ...this.state, mode: this.state.mode === "light" ? "dark" : "light" });
    // setMode(mode === "light" ? "dark" : "light");
  };

  render() {
    if (!this.props.initialized) {
      return <Preloader initialized={this.props.initialized} />;
    }

    const theme = createTheme({
      palette: {
        mode: this.state.mode,
        primary: {
          main: "#057147",
        },
        secondary: {
          main: "#d29262",
        },
        // background: {
        //   default: mode==='light'? '#FAFAFA': '#3F3F3F',
        //   paper: '#6d6a6a',
        // },
      },
    });

    return (
      <ThemeProvider theme={theme}>
        <Box bgcolor="background.default" color="text.primary">
          <HeaderContainer
            toggleDrawer={this.toggleDrawer}
            changeMode={this.changeMode}
            mode={this.state.mode}
          />
          <Stack direction="row" spacing={2}>
            <MobileMenu toggleDrawer={this.toggleDrawer} open={this.state.open} />
            <DesktopMenu />
            <Box flex={4} p={2}>
              <Suspense fallback={<Preloader initialized={false} />}>
                <Routes>
                  <Route path={`${PROFILE_ITEM_PATH}?`} element={<ProfileContainer />} />
                  <Route path={DIALOGS_PATH} element={<DialogsContainer />} />
                  <Route path={USERS_PATH} element={<UsersContainer />} />
                  <Route path={LOGIN_PATH} element={<Login />} />
                </Routes>
              </Suspense>
            </Box>
          </Stack>
        </Box>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.appReducer.initialized,
});

let AppContainer = connect(mapStateToProps, { initializeAppThunk: initializeAppThunkCreator })(App);

export const MainApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
