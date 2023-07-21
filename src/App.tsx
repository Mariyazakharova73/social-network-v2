import React, { Component, Suspense } from "react";
import { Route, Routes, HashRouter, Navigate } from "react-router-dom";
import { connect, Provider } from "react-redux";
import store, { AppStateType } from "./redux/redux-store";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import UsersPage from "./components/Users/UsersPage";
import DesktopMenu from "./components/DesktopMenu/DesktopMenu";
import {
  DIALOGS_PATH,
  LOGIN_PATH,
  PROFILE_ITEM_PATH,
  USERS_PATH,
  MAIN_PATH,
  PROFILE_PATH,
  CHAT_PATH,
} from "./utils/constants";
import { ThemeProvider } from "@mui/system";
import { createTheme, PaletteMode } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import LoginPage from "./components/Login/LoginPage";
import { initializeAppThunkCreator } from "./redux/actions/appActions";
import Preloader from "./components/Preloader/Preloader";
import Header from "./components/Header/Header";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const ChatPage = React.lazy(() => import("./components/pages/ChatPage/ChatPage"));

interface IMapStateProps {
  initialized: boolean;
}

interface IMapDispatchProps {
  initializeApp: any;
}

interface IOwnProps {}

interface IState {
  mode: PaletteMode | undefined;
  open: boolean;
}

type PropsType = IMapStateProps & IMapDispatchProps & IOwnProps;

class App extends Component<PropsType, IState> {
  // const [mode, setMode] = useState("light");
  // const [open, setOpen] = useState(false);
  constructor(props: PropsType) {
    super(props);
    this.state = {
      mode: "light",
      open: false,
    };
  }

  // catchAllUnhandledErrors = (e) => {
  //   alert("error");
  //   //console.error(e);
  // };

  componentDidMount() {
    this.props.initializeApp();
    // window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  // componentWillUnmount() {
  //   window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  // }

  toggleDrawer = (newOpen: boolean) => () => {
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
          <Header
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
                  <Route path={MAIN_PATH} element={<Navigate to={PROFILE_PATH} />} />
                  <Route path={`${PROFILE_ITEM_PATH}?`} element={<ProfileContainer />} />
                  <Route path={DIALOGS_PATH} element={<DialogsContainer />} />
                  <Route path={USERS_PATH} element={<UsersPage />} />
                  <Route path={LOGIN_PATH} element={<LoginPage />} />
                  <Route path={CHAT_PATH} element={<ChatPage />} />
                  <Route path="*" element={<div>404 NOT FOUND</div>} />
                </Routes>
              </Suspense>
            </Box>
          </Stack>
        </Box>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state: AppStateType): IMapStateProps => ({
  initialized: state.appReducer.initialized,
});

let AppContainer = connect<IMapStateProps, IMapDispatchProps, IOwnProps, AppStateType>(
  mapStateToProps,
  { initializeApp: initializeAppThunkCreator }
)(App);

export const MainApp = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};
