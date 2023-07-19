import React, { FC } from "react";
import List from "@mui/material/List";
import { StyledListItem } from "./UsersStyles";
import Stack from "@mui/material/Stack";
import UserCard from "../UserCard/UserCard";
import { Pagination } from "@mui/material";
import { IUser } from "./../../types/types";
import UsersSearchForm from "../UsersSearchForm/UsersSearchForm";
import { FilterType } from "../../redux/reducers/usersReducer";

interface IUsersProps {
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  handlePageChange: any;
  users: Array<IUser>;
  followingInProgress: Array<number>;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  onFilterChanged: (filter: FilterType) => void;
}

const Users: FC<IUsersProps> = ({
  totalItemsCount,
  pageSize,
  follow,
  unfollow,
  currentPage,
  handlePageChange,
  users,
  followingInProgress,
  onFilterChanged,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  return (
    <>
      <Stack spacing={2}>
        <UsersSearchForm onFilterChanged={onFilterChanged}/>
        <Pagination
          page={currentPage}
          onChange={handlePageChange}
          count={pagesCount}
          variant="outlined"
          shape="rounded"
          size="small"
          color="secondary"
        />
      </Stack>
      <List sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {users.map((user) => {
          return (
            <StyledListItem key={user.id}>
              <UserCard
                user={user}
                unfollow={unfollow}
                follow={follow}
                followingInProgress={followingInProgress}
              />
            </StyledListItem>
          );
        })}
      </List>
    </>
  );
};

export default Users;
