import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import userAvatar from "../../images/user.png";

class UsersC extends React.Component {
  getUsers = () => {
    if (this.props.users.length === 0) {
      axios.get(`${BASE_URL}/users`).then((res) => {
        this.props.setUsers(res.data.items);
      });
    }
  };

  render() {
    return (
      <>
        <button onClick={this.getUsers}>get Users</button>
        <List>
          {this.props.users.map((user) => {
            return (
              <ListItem
                sx={{
                  width: "100%",
                  maxWidth: 600,
                  bgcolor: "background.paper",
                  borderRadius: 5,
                  mb: 2,
                }}
                key={user.id}
                alignItems="flex-start"
              >
                <Stack spacing={1} alignItems="center" sx={{ mr: 2, minWidth: "80px" }}>
                  <Avatar
                    alt={user.name}
                    src={user.photos.small != null ? user.photos.small : userAvatar}
                  />
                  {user.followed ? (
                    <Button
                      onClick={() => {
                        this.props.unfollow(user.id);
                      }}
                      variant="contained"
                      size="small"
                    >
                      Unfollow
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        this.props.follow(user.id);
                      }}
                      variant="contained"
                      size="small"
                    >
                      Follow
                    </Button>
                  )}
                </Stack>
                <Stack
                  sx={{
                    border: 1,
                    borderColor: grey[500],
                    borderRadius: "16px",
                    minHeight: "50px",
                    p: 2,
                    width: "100%",
                  }}
                  direction="row"
                >
                  <Grid container spacing={1}>
                    <Grid item xs={8}>
                      <Typography>{user.name}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography>
                        {"user.location.city"}, {"user.location.country"}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>{user.status}</Typography>
                    </Grid>
                  </Grid>
                </Stack>
              </ListItem>
            );
          })}
        </List>
      </>
    );
  }
}
export default UsersC;
