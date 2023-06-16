import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ProfileStatus from "./../ProfileStatus/ProfileStatus";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

class ProfileInfo extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatusThunk(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({ status: e.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

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
          {/* <ProfileStatus
            deactivateEditMode={this.deactivateEditMode}
            activateEditMode={this.activateEditMode}
            editMode={this.state.editMode}
            onStatusChange={this.onStatusChange}
            status={this.state.status}
            textStatus={this.props.status}
          /> */}
          {!this.state.editMode ? (
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography component="p">
                Статус: {this.props.status ? this.props.status : "Не задан"}
              </Typography>
              <IconButton aria-label="delete" size="small" onClick={this.activateEditMode}>
                <EditIcon fontSize="inherit" />
              </IconButton>
            </Stack>
          ) : (
            <form>
              <TextField
                onChange={this.onStatusChange}
                variant="standard"
                value={this.state.status}
                onBlur={this.deactivateEditMode}
                autoFocus
              />
            </form>
          )}
        </Stack>
      </Stack>
    );
  }
}

export default ProfileInfo;
