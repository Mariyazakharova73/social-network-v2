import { updateObjectInArray } from "../../utils/helpers";
import { ActionTypesV2 } from "../actions/usersActionsV2";
import { IUser } from "./../../types/types";
import {
  FOLLOW,
  UNFOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  TOGGLE_IS_FETCHING,
  TOGGLE_IS_FOLLOWING_PROGRESS,
  ActionTypes,
} from "./../types/usersTypes";

const initialState = {
  users: [] as Array<IUser>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, // array of users id,
};

export type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionTypesV2): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        // users: state.users.map((user) => {
        //   if (user.id === action.userId) {
        //     return { ...user, followed: true };
        //   }
        //   return user;
        // }),
        users: updateObjectInArray(state.users, action.userId, "id", { followed: true }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: false }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    // Добавляем userId в массив, если подписались, убираем, если отписывемся
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((item) => item !== action.userId),
      };
    default:
      return state;
  }
};

export default usersReducer;
