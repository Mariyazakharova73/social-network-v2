import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfileThunkCreator } from "../../redux/profileReducer";
import withRouter from "../../HOC/withRouter";
import { Navigate } from "react-router-dom";
import { LOGIN_PATH } from "../../utils/constants";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.id;
    if (userId === "*") {
      userId = 29248;
    }

    this.props.getUserProfileThunk(userId);
  }

  render() {
    return this.props.isAuth ? (
      <Profile {...this.props} profile={this.props.profile} />
    ) : (
      <Navigate to={LOGIN_PATH} />
    );
  }
}

const mapStateToProps = (state) => {
  return { profile: state.profileReducer.profile,
    isAuth: state.authReducer.isAuth };
};

// ProfileContainer обернули в withRouter, чтобы передать url в классовый компонент
export default connect(mapStateToProps, {
  getUserProfileThunk: getUserProfileThunkCreator,
})(withRouter(ProfileContainer));
