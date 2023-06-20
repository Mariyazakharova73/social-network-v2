import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ProfileStatus from "./../ProfileStatus/ProfileStatus";

class ProfileInfo extends React.Component {

  // state = {
  //   editMode: false,
  //   status: this.props.status,
  // };

  // activateEditMode = () => {
  //   this.setState({
  //     editMode: true,
  //   });
  // };

  // deactivateEditMode = () => {
  //   this.setState({
  //     editMode: false,
  //   });
  //   this.props.updateStatusThunk(this.state.status);
  // };

  // onStatusChange = (e) => {
  //   this.setState({ status: e.target.value });
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.status !== this.props.status) {
  //     this.setState({ status: this.props.status });
  //   }
  // }

  render() {
    return (
      <Stack direction="row" spacing={3}>
        <Avatar
          alt="Avatar."
          src={this.props.profile.photos?.large}
          sx={{ height: "90px", width: "90px" }}
        />
        <Stack>
          <Typography component="p">Имя: {this.props.profile.fullName}</Typography>
          <Typography component="p">О себе: {this.props.profile.aboutMe}</Typography>
          <Typography component="p">
            Информация: {this.props.profile.lookingForAJobDescription}
          </Typography>
          <ProfileStatus
            // deactivateEditMode={this.deactivateEditMode}
            // activateEditMode={this.activateEditMode}
            // editMode={this.state.editMode}
            // onStatusChange={this.onStatusChange}
            prevStatus={this.props.status}
            updateStatusThunk={this.props.updateStatusThunk}
          />
        </Stack>
      </Stack>
    );
  }
}

export default ProfileInfo;
