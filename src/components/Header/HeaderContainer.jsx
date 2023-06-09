import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserDataThunkCreator } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserDataThunk();
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
  };
};

export default connect(mapStateToProps, { getAuthUserDataThunk: getAuthUserDataThunkCreator })(
  HeaderContainer
);
