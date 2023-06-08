import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import userAvatar from "../../images/user.png";
import { StyledCardActions } from "./UserCardStyles";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import LoadingButton from "@mui/lab/LoadingButton";

const UserCard = ({ user, unfollow, follow, toggleFollowingProgress, followingInProgress }) => {
  return (
    <Card sx={{ width: { sm: 300, xs: 200 } }}>
      <StyledCardActions>
        <NavLink to={"/profile/" + user.id}>
          <Avatar
            alt={user.name}
            src={user.photos.small != null ? user.photos.small : userAvatar}
          />
        </NavLink>
        {user.followed ? (
          <LoadingButton
            loading={followingInProgress.some((item) => {
              return item === user.id;
            })}
            loadingIndicator="Loading…"
            onClick={() => {
              toggleFollowingProgress(true, user.id);
              axios
                .delete(`${BASE_URL}/follow/${user.id}`, {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "a0fe9b9a-5b25-4ddf-ad31-84dadd909d2c",
                  },
                })
                .then((res) => {
                  if (res.data.resultCode === 0) {
                    unfollow(user.id);
                  }
                  toggleFollowingProgress(false, user.id);
                });
            }}
            variant="contained"
            size="small"
          >
            <span>Unfollow</span>
          </LoadingButton>
        ) : (
          <LoadingButton
            loading={followingInProgress.some((item) => {
              return item === user.id;
            })}
            loadingIndicator="Loading…"
            onClick={() => {
              toggleFollowingProgress(true, user.id);
              axios
                .post(`${BASE_URL}/follow/${user.id}`, null, {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "a0fe9b9a-5b25-4ddf-ad31-84dadd909d2c",
                  },
                })
                .then((res) => {
                  if (res.data.resultCode === 0) {
                    follow(user.id);
                  }
                  toggleFollowingProgress(false, user.id);
                });
            }}
            variant="contained"
            size="small"
          >
            <span>Follow</span>
          </LoadingButton>
        )}
      </StyledCardActions>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {user.status ? user.status : "student"}
        </Typography>
        <Typography>{user.name}</Typography>
        <Typography color="text.secondary">test</Typography>
        <Typography color="text.secondary">test</Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
