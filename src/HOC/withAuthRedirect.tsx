import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { LOGIN_PATH } from "../utils/constants";
import { connect } from "react-redux";
import { AppStateType } from "../redux/redux-store";

interface IMapProps {
  isAuth: boolean;
}

const mapStateToPropsForRedirect = (state: AppStateType) =>
  ({
    isAuth: state.authReducer.isAuth,
  } as IMapProps);

interface IMapDispatchProps {}

export function withAuthRedirect<WCP>(Component: React.ComponentType<any>) {
  const RedirectComponent: FC<IMapProps & IMapDispatchProps> = (props) => {
    let { isAuth, ...restProps } = props;
    if (!isAuth) return <Navigate to={LOGIN_PATH} />;

    return <Component {...(restProps as WCP)} />;
  };

  let ConnectedAuthRedirectComponent = connect<IMapProps, IMapDispatchProps, WCP, AppStateType>(
    mapStateToPropsForRedirect
  )(RedirectComponent);

  return ConnectedAuthRedirectComponent;
}

export default withAuthRedirect;
