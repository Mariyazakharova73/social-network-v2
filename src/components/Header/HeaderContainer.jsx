import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logoutThunkCreator } from "../../redux/authReducer.ts";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profileReducer.profile,
    isAuth: state.authReducer.isAuth,
  };
};

export default connect(mapStateToProps, {
  logout: logoutThunkCreator,
})(HeaderContainer);
