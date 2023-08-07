import { IUser } from "../../types/types";

export const FOLLOW = "users/FOLLOW";
export const UNFOLLOW = "users/UNFOLLOW";
export const SET_USERS = "users/SET_USERS";
export const SET_CURRENT_PAGE = "users/SET_CURENT_PAGE";
export const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
export const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
export const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS";
export const SET_FILTER = "users/SET_FILTER";

export interface IFollowAction {
  type: typeof FOLLOW;
  userId: number;
}

export interface IUnfollowAction {
  type: typeof UNFOLLOW;
  userId: number;
}

export interface ISetUsersAction {
  type: typeof SET_USERS;
  users: Array<IUser>;
}

export interface ISetCurrentPageAction {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
}

export interface ISetTotalUsersCountAction {
  type: typeof SET_TOTAL_USERS_COUNT;
  totalUsersCount: number;
}

export interface IToggleIsFetchingAction {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
}

export interface IToggleFollowingProgressAction {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS;
  followingInProgress: boolean;
  userId: number;
}

export interface ISetFilterAction {
  type: typeof SET_FILTER;
  payload: { term: string };
}

export type ActionTypes =
  | IFollowAction
  | IUnfollowAction
  | ISetUsersAction
  | ISetCurrentPageAction
  | ISetTotalUsersCountAction
  | IToggleIsFetchingAction
  | ISetFilterAction
  | IToggleFollowingProgressAction;
