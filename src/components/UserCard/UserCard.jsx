import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import userAvatar from "../../images/user.png";
import { StyledCardActions } from "./UserCardStyles";
import { NavLink } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import { PROFILE_PATH } from "./../../utils/constants";

const UserCard = ({ user, unfollowThunk, followThunk, followingInProgress }) => {
  return (
    <Card sx={{ width: { sm: 300, xs: 200 } }}>
      <StyledCardActions>
        <NavLink to={`${PROFILE_PATH}/${user.id}`}>
          <Avatar alt={user.name} src={user.photos?.small || userAvatar} />
        </NavLink>
        {user.followed ? (
          <LoadingButton
            loading={followingInProgress.some((item) => {
              return item === user.id;
            })}
            loadingIndicator="Loading…"
            onClick={() => {
              unfollowThunk(user.id);
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
              followThunk(user.id);
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
