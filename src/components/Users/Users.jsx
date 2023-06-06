import React from "react";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import userAvatar from "../../images/user.png";
import { StyledListItem, StyledStack } from './UsersStyles';

const Users = ({ users, follow, unfollow, setUsers }) => {
  if (users.length === 0) {
    axios.get(`${BASE_URL}/users`).then((res) => {
      setUsers(res.data.items);
    });
  }

  return (
    <List>
      {users.map((user) => {
        return (
          <StyledListItem
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
                    unfollow(user.id);
                  }}
                  variant="contained"
                  size="small"
                >
                  Unfollow
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    follow(user.id);
                  }}
                  variant="contained"
                  size="small"
                >
                  Follow
                </Button>
              )}
            </Stack>
            <StyledStack
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
            </StyledStack>
          </StyledListItem>
        );
      })}
    </List>
  );
};

export default Users;
