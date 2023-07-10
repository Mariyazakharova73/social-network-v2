import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getStatusThunkCreator,
  getUserProfileThunkCreator,
  updateStatusThunkCreator,
  savePhotoThunkCreator,
  saveProfieThunkCreator,
} from "../../redux/profileReducer";
import withRouter from "../../HOC/withRouter";
import { compose } from "redux";
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

    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
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
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.router.params.id}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        saveProfie={this.props.saveProfie}
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
    getUserProfile: getUserProfileThunkCreator,
    getStatus: getStatusThunkCreator,
    updateStatus: updateStatusThunkCreator,
    savePhoto: savePhotoThunkCreator,
    saveProfie: saveProfieThunkCreator,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
