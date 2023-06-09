import React, { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { LOGIN_PATH } from "../utils/constants";
import { connect } from "react-redux";
import { AppStateType } from "../redux/redux-store";

const mapStateToPropsForRedirect = (state: AppStateType) => {
  return { isAuth: state.authReducer.isAuth };
};

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate to={LOGIN_PATH} />;
      return <Component {...this.props} />;
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
};

export default withAuthRedirect;
