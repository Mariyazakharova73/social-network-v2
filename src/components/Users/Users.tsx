import React, { ChangeEvent, FC } from "react";
import { StyledListItem, StyledList } from "./UsersStyles";
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
} from "../../redux/selectors/usersSelectors";
import {
  getUsersThunkCreator,
  unfollowThunkCreator,
  followThunkCreator,
} from "../../redux/actions/usersActionsV2";
import { AppDispatch } from "../../redux/redux-store";

interface IUsersProps {}

const Users: FC<IUsersProps> = () => {
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
      <Stack spacing={2} alignItems="center">
        <UsersSearchForm onFilterChanged={onFilterChanged} />
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
      <StyledList>
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
      </StyledList>
    </>
  );
};

export default Users;
