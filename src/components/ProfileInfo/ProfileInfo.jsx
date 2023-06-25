import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ProfileStatus from "./../ProfileStatus/ProfileStatus";
import ProfileAvatar from "./ProfileAvatar";

class ProfileInfo extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = (e) => {
    this.setState({ ...this.state, anchorEl: e.currentTarget });
  };

  handleClose = () => {
    this.setState({ ...this.state, anchorEl: null });
  };

  render() {
    return (
      <Stack direction="row" spacing={3}>
        <ProfileAvatar
          handleClick={this.handleClick}
          anchorEl={this.state.anchorEl}
          handleClose={this.handleClose}
          photo={this.props.profile.photos?.large}
          isOwner={this.props.isOwner}
        />
        <Stack>
          <Typography component="p">Имя: {this.props.profile.fullName}</Typography>
          <Typography component="p">О себе: {this.props.profile.aboutMe}</Typography>
          <Typography component="p">
            Информация: {this.props.profile?.lookingForAJobDescription}
          </Typography>
          <ProfileStatus
            prevStatus={this.props.status}
            updateStatusThunk={this.props.updateStatusThunk}
          />
        </Stack>
      </Stack>
    );
  }
}

export default ProfileInfo;
