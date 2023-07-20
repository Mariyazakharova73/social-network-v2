import React, { ChangeEvent, FC, useEffect } from "react";
import List from "@mui/material/List";
import { StyledListItem } from "./UsersStyles";
import Stack from "@mui/material/Stack";
import UserCard from "../UserCard/UserCard";
import { Pagination } from "@mui/material";
import UsersSearchForm from "../UsersSearchForm/UsersSearchForm";
import { FilterType } from "../../redux/reducers/usersReducer";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentPage,
  getPageSize,
  getTotalUsersCount,
  getUsersFilter,
  requestUsers,
  getFollowingInProgress,
} from "./../../redux/usersSelectors";
import {
  getUsersThunkCreator,
  unfollowThunkCreator,
  followThunkCreator,
} from "../../redux/actions/usersActionsV2";
import { AppDispatch } from "../../redux/redux-store";
import { useLocation } from "react-router-dom";

interface IUsersProps {
  searchParams: URLSearchParams;
  setSearchParams: any;
}

const Users: FC<IUsersProps> = ({ searchParams, setSearchParams }) => {
  const totalItemsCount = useSelector(getTotalUsersCount);
  const currentPage = useSelector(getCurrentPage);
  const pageSize = useSelector(getPageSize);
  const filter = useSelector(getUsersFilter);
  const users = useSelector(requestUsers);
  const followingInProgress = useSelector(getFollowingInProgress);
  const pagesCount = Math.ceil(totalItemsCount / pageSize);

  const dispatch: AppDispatch = useDispatch();

  const handlePageChange = (e: ChangeEvent<unknown>, pageNumber: number) => {
    dispatch(getUsersThunkCreator(pageNumber, pageSize, filter));
  };

  const onFilterChanged = (filter: FilterType) => {
    dispatch(getUsersThunkCreator(1, pageSize, filter));
  };

  const follow = (userId: number) => {
    dispatch(followThunkCreator(userId));
  };
  const unfollow = (userId: number) => {
    dispatch(unfollowThunkCreator(userId));
  };

  return (
    <>
      <Stack spacing={2}>
        <UsersSearchForm
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          onFilterChanged={onFilterChanged}
        />
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
