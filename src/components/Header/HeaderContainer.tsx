import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logoutThunkCreator } from "../../redux/actions/authActions";
import { AppStateType } from "../../redux/redux-store";
import { IProfile } from "../../types/types";
import { PaletteMode } from "@mui/material";

interface IMapStateProps {
  profile: IProfile | null;
  isAuth: boolean;
}

interface IMapDispatchProps {
  logout: () => void;
}

interface IOwnProps {
  toggleDrawer: (newOpen: boolean) => () => void;
  changeMode: () => void;
  mode: PaletteMode | undefined;
}

type PropsType = IMapStateProps & IMapDispatchProps & IOwnProps;

class HeaderContainer extends React.Component<PropsType> {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: AppStateType): IMapStateProps => {
  return {
    profile: state.profileReducer.profile,
    isAuth: state.authReducer.isAuth,
  };
};

export default connect<IMapStateProps, IMapDispatchProps, IOwnProps, AppStateType>(mapStateToProps, {
  logout: logoutThunkCreator,
})(HeaderContainer);
