 import React from "react";
import List from "@mui/material/List";
import { StyledListItem } from "./UsersStyles";
import Stack from "@mui/material/Stack";
import UserCard from "../UserCard/UserCard";
import { Pagination } from "@mui/material";

const Users = ({
  totalItemsCount,
  pageSize,
  followThunk,
  unfollowThunk,
  currentPage,
  handlePageChange,
  users,
  followingInProgress
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
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
                unfollowThunk={unfollowThunk}
                followThunk={followThunk}
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
