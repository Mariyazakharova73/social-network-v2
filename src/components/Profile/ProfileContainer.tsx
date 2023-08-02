import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getStatusThunkCreator,
  getUserProfileThunkCreator,
  updateStatusThunkCreator,
  savePhotoThunkCreator,
  saveProfileThunkCreator,
} from "../../redux/actions/profileActions";
import withRouter from "../../HOC/withRouter";
import { compose } from "redux";
import { LOGIN_PATH } from "../../utils/constants";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { IProfile, IProfileData } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";

interface IMapStateProps {
  profile: IProfile | null;
  status: string;
  authorizedUserId: number | null;
  isAuth: boolean;
}

interface IMapDispatchProps {
  getUserProfile: (userId: number) => void;
  getStatus: (userId: number) => void;
  updateStatus: (status: string) => void;
  savePhoto: (file: any) => void;
  saveProfile: (data: IProfileData) => void;
}

interface IOwnProps {
  router: {
    location: any;
    navigate: any;
    params: { id: any };
  };
}

type PropsType = IMapStateProps & IMapDispatchProps & IOwnProps;

class ProfileContainer extends React.Component<PropsType> {
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

  componentDidUpdate(prevProps: PropsType) {
    if (this.props.router.params.id !== prevProps.router.params.id) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.router.params.id || this.props.router.params.id === "*"}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        saveProfile={this.props.saveProfile}
      />
    );
  }
}

const mapStateToProps = (state: AppStateType): IMapStateProps => {
  return {
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    authorizedUserId: state.authReducer.userId,
    isAuth: state.authReducer.isAuth,
  };
};

export default compose<React.ComponentType>(
  connect<IMapStateProps, IMapDispatchProps, IOwnProps, AppStateType>(mapStateToProps, {
    getUserProfile: getUserProfileThunkCreator,
    getStatus: getStatusThunkCreator,
    updateStatus: updateStatusThunkCreator,
    savePhoto: savePhotoThunkCreator,
    saveProfile: saveProfileThunkCreator,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
