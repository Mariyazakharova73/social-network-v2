import { IUser } from "../../types/types";
import {
  FOLLOW,
  IFollowAction,
  ISetUsersAction,
  IUnfollowAction,
  UNFOLLOW,
  SET_USERS,
  ISetCurrentPageAction,
  SET_CURRENT_PAGE,
  ISetTotalUsersCountAction,
  SET_TOTAL_USERS_COUNT,
  IToggleIsFetchingAction,
  TOGGLE_IS_FETCHING,
  IToggleFollowingProgressAction,
  TOGGLE_IS_FOLLOWING_PROGRESS,
  ActionTypes,
  ISetFilterAction,
  SET_FILTER,
} from "./../types/usersTypes";
import { Dispatch } from "redux";
import { usersAPI } from "../../api/usersApi";
import { BaseThunkType } from "../redux-store";
import { IResponse } from "../../api/api";
import { FilterType } from "../reducers/usersReducer";

const _followUnfollowFlow = async (
  dispatch: Dispatch<ActionTypes>,
  id: number,
  apiMethod: (userId: number) => Promise<IResponse>,
  actionCreator: (userId: number) => IUnfollowAction | IFollowAction
) => {
  dispatch(toggleFollowingProgressAC(true, id));
  const res = await apiMethod(id);
  if (res.resultCode === 0) {
    dispatch(actionCreator(id));
  }
  dispatch(toggleFollowingProgressAC(false, id));
};

export const toggleFollowingProgressAC = (
  followingInProgress: any,
  userId: number
): IToggleFollowingProgressAction => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  followingInProgress,
  userId,
});

export const toggleIsFetchingAC = (isFetching: boolean): IToggleIsFetchingAction => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const setCurrentPageAC = (currentPage: number): ISetCurrentPageAction => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setUsersAC = (users: Array<IUser>): ISetUsersAction => ({ type: SET_USERS, users });

export const setTotalUsersCountAC = (totalUsersCount: number): ISetTotalUsersCountAction => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});

export const getUsersThunkCreator = (
  page: number,
  pageSize: number,
  filter: FilterType
): BaseThunkType<ActionTypes> => {
  return async (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    dispatch(setCurrentPageAC(page));

    dispatch(setFilterAC(filter));
    const res = await usersAPI.getUsers(page, pageSize, filter.term, filter.friend);
    dispatch(toggleIsFetchingAC(false));
    dispatch(setUsersAC(res.items));
    dispatch(setTotalUsersCountAC(res.totalCount));
  };
};

export const followAC = (userId: number): IFollowAction => ({ type: FOLLOW, userId });

export const followThunkCreator = (id: number): BaseThunkType<ActionTypes> => {
  return async (dispatch) => {
    await _followUnfollowFlow(dispatch, id, usersAPI.follow.bind(usersAPI), followAC);
  };
};

export const unfollowAC = (userId: number): IUnfollowAction => ({ type: UNFOLLOW, userId });

export const unfollowThunkCreator = (id: number): BaseThunkType<ActionTypes> => {
  return async (dispatch) => {
    await _followUnfollowFlow(dispatch, id, usersAPI.unfollow.bind(usersAPI), unfollowAC);
  };
};

export const setFilterAC = (filter: FilterType): ISetFilterAction => ({
  type: SET_FILTER,
  payload: filter,
});
