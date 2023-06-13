import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getStatusThunkCreator, getUserProfileThunkCreator } from "../../redux/profileReducer";
import withRouter from "../../HOC/withRouter";
import { compose } from "redux";
import { updateStatusThunkCreator } from "./../../redux/profileReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.id;
    if (userId === "*") {
      userId = 29248;
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
  return { profile: state.profileReducer.profile, status: state.profileReducer.status };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfileThunk: getUserProfileThunkCreator,
    getStatusThunk: getStatusThunkCreator,
    updateStatusThunk: updateStatusThunkCreator,
  }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);
