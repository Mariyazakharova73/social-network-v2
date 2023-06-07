import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Profile from "./Profile";
import { BASE_URL } from "../../utils/constants";
import { setUserProfile } from "../../redux/profileReducer";
import withRouter from "./../HOC/withRouter";

class ProfileContainer extends React.Component {
  componentDidMount() {
    // this.props.toggleIsFetching(true);
    let userId = this.props.router.params.id;
    if (userId === "*") {
      userId = 2;
    }
    axios.get(`${BASE_URL}/profile/${userId}`).then((res) => {
      // this.props.toggleIsFetching(false);
      this.props.setUserProfile(res.data);
    });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => {
  return { profile: state.profileReducer.profile };
};

// ProfileContainer обернули в withRouter, чтобы передать url в классовый компонент
export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));
