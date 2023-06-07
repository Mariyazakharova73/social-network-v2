import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import userAvatar from "../../images/user.png";
import { StyledCardActions } from "./UserCardStyles";
import { NavLink } from "react-router-dom";

const UserCard = ({ user, unfollow, follow }) => {
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
