import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { setAuthUserData } from "./../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    //this.props.toggleIsFetching(true);
    axios.get(`${BASE_URL}/auth/me`, { withCredentials: true }).then((res) => {
      //this.props.toggleIsFetching(false);
      if (res.data.resultCode === 0) {
        let { id, email, login } = res.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
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

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
