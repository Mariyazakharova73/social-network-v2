import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getStatusThunkCreator, getUserProfileThunkCreator } from "../../redux/profileReducer";
import withRouter from "../../HOC/withRouter";
import { compose } from "redux";
import { updateStatusThunkCreator } from "./../../redux/profileReducer";
import { LOGIN_PATH } from "../../utils/constants";
import { withAuthRedirect } from "./../../HOC/withAuthRedirectComponent";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.router.params.id;
    if (userId === "*" || !userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        // this.props.navigate(LOGIN_PATH);
        window.location.replace(LOGIN_PATH);
      }
    }

    this.props.getUserProfileThunk(userId);
    this.props.getStatusThunk(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.props.router.params.id !== prevProps.router.params.id) {
      this.refreshProfile();
    }
  }

  render() {
    console.log(this.props.router.params.id);
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.router.params.id}
        profile={this.props.profile}
        status={this.props.status}
        updateStatusThunk={this.props.updateStatusThunk}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    authorizedUserId: state.authReducer.userId,
    isAuth: state.authReducer.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfileThunk: getUserProfileThunkCreator,
    getStatusThunk: getStatusThunkCreator,
    updateStatusThunk: updateStatusThunkCreator,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
