import { IUser } from "../../types/types";
import {
  FOLLOW,
  UNFOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  TOGGLE_IS_FETCHING,
  TOGGLE_IS_FOLLOWING_PROGRESS,
  SET_FILTER,
} from "./../types/usersTypes";
import { Dispatch } from "redux";
import { usersAPI } from "../../api/usersApi";
import { BaseThunkType } from "../redux-store";
import { IResponse } from "../../api/api";
import { FilterType } from "../reducers/usersReducer";

export const actions = {
  toggleFollowingProgressAC: (followingInProgress: boolean, userId: number) =>
    ({
      type: TOGGLE_IS_FOLLOWING_PROGRESS,
      followingInProgress,
      userId,
    } as const),

  toggleIsFetchingAC: (isFetching: boolean) =>
    ({
      type: TOGGLE_IS_FETCHING,
      isFetching,
    } as const),

  setCurrentPageAC: (currentPage: number) =>
    ({
      type: SET_CURRENT_PAGE,
      currentPage,
    } as const),

  setUsersAC: (users: Array<IUser>) => ({ type: SET_USERS, users } as const),

  setTotalUsersCountAC: (totalUsersCount: number) =>
    ({
      type: SET_TOTAL_USERS_COUNT,
      totalUsersCount,
    } as const),

  followAC: (userId: number) => ({ type: FOLLOW, userId } as const),
  unfollowAC: (userId: number) => ({ type: UNFOLLOW, userId } as const),
  setFilterAC: (filter: FilterType) => ({ type: SET_FILTER, payload: filter } as const),
};

const _followUnfollowFlow = async (
  dispatch: Dispatch<ActionTypesV2>,
  id: number,
  apiMethod: (id: number) => Promise<IResponse>,
  actionCreator: (id: number) => ActionTypesV2
) => {
  dispatch(actions.toggleFollowingProgressAC(true, id));
  const res = await apiMethod(id);
  if (res.resultCode === 0) {
    dispatch(actionCreator(id));
  }
  dispatch(actions.toggleFollowingProgressAC(false, id));
};

export const getUsersThunkCreator = (
  page: number,
  pageSize: number,
  filter: FilterType
): BaseThunkType<ActionTypesV2> => {
  return async (dispatch) => {
    dispatch(actions.toggleIsFetchingAC(true));
    dispatch(actions.setCurrentPageAC(page));
    dispatch(actions.setFilterAC(filter));
    const res = await usersAPI.getUsers(page, pageSize, filter.term, filter.friend);
    dispatch(actions.toggleIsFetchingAC(false));
    dispatch(actions.setUsersAC(res.items));
    dispatch(actions.setTotalUsersCountAC(res.totalCount));
  };
};

export const followThunkCreator = (id: number): BaseThunkType<ActionTypesV2> => {
  return async (dispatch) => {
    await _followUnfollowFlow(dispatch, id, usersAPI.follow.bind(usersAPI), actions.followAC);
  };
};

export const unfollowThunkCreator = (id: number): BaseThunkType<ActionTypesV2> => {
  return async (dispatch) => {
    await _followUnfollowFlow(dispatch, id, usersAPI.unfollow.bind(usersAPI), actions.unfollowAC);
  };
};

type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;

export type ActionTypesV2 = InferActionsTypes<typeof actions>;
