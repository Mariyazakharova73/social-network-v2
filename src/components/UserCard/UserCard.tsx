import React, { FC } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import userAvatar from "../../images/user.png";
import { StyledCardActions, StyledCard } from "./UserCardStyles";
import { NavLink } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import { PROFILE_PATH } from "../../utils/constants";
import { IUser } from "../../types/types";

interface IUserCardProps {
  user: IUser;
  followingInProgress: Array<number>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
}

const UserCard: FC<IUserCardProps> = ({ user, unfollow, follow, followingInProgress }) => {
  return (
    <StyledCard>
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
              unfollow(user.id);
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
              follow(user.id);
            }}
            variant="contained"
            size="small"
          >
            <span>Follow</span>
          </LoadingButton>
        )}
      </StyledCardActions>
      <CardContent>
        <Typography sx={{ fontSize: 15 }} color="text.secondary">
          {user.status ? user.status : "Не задан"}
        </Typography>
        <Typography>{user.name}</Typography>
      </CardContent>
    </StyledCard>
  );
};

export default UserCard;
