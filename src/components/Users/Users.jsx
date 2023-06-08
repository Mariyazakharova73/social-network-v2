import React from "react";
import List from "@mui/material/List";
import { StyledListItem } from "./UsersStyles";
import Stack from "@mui/material/Stack";
import UserCard from "../UserCard/UserCard";
import { Pagination } from "@mui/material";

const Users = ({
  totalUsersCount,
  pageSize,
  unfollow,
  follow,
  currentPage,
  handlePageChange,
  users,
  toggleFollowingProgress,
  followingInProgress,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  return (
    <>
      <Stack spacing={2}>
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
                toggleFollowingProgress={toggleFollowingProgress}
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
