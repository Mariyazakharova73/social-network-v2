import { createSelector } from "reselect";
import { AppStateType } from "./redux-store";

export const requestUsers = (state: AppStateType) => {
  return state.usersReducer.users;
};

export const getPageSize = (state: AppStateType) => {
  return state.usersReducer.pageSize;
};

export const getTotalUsersCount = (state: AppStateType) => {
  return state.usersReducer.totalUsersCount;
};

export const getCurrentPage = (state: AppStateType) => {
  return state.usersReducer.currentPage;
};

export const getIsFetching = (state: AppStateType) => {
  return state.usersReducer.isFetching;
};

export const getFollowingInProgress = (state: AppStateType) => {
  return state.usersReducer.followingInProgress;
};

// export const getUsersTestSelector = createSelector(requestUsers, (users) => {
//   return users.filter((u) => true);
// });
