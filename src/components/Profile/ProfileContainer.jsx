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
  componentDidMount() {
    let userId = this.props.router.params.id;

    if (userId === "*") {
      userId = this.props.authorizedUserId;
      if (!userId) {
        console.log("tut");
        console.log(this.props);
        this.props.navigate("/login");
        window.location.replace(LOGIN_PATH);
      }
    }

    this.props.getUserProfileThunk(userId);
    this.props.getStatusThunk(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
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
