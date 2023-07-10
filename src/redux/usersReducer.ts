import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/helpers";
import { IUser } from "./../types/types";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
  users: [] as Array<IUser>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, // array of users id,
};

export type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
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

interface IFollowAction {
  type: typeof FOLLOW;
  userId: number;
}

export const followAC = (userId: number): IFollowAction => ({ type: FOLLOW, userId });

interface IUnfollowAction {
  type: typeof UNFOLLOW;
  userId: number;
}

export const unfollowAC = (userId: number): IUnfollowAction => ({ type: UNFOLLOW, userId });

interface ISetUsersAction {
  type: typeof SET_USERS;
  users: Array<IUser>;
}

export const setUsersAC = (users: Array<IUser>): ISetUsersAction => ({ type: SET_USERS, users });

interface ISetCurrentPageAction {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
}

export const setCurrentPageAC = (currentPage: number): ISetCurrentPageAction => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

interface ISetTotalUsersCountAction {
  type: typeof SET_TOTAL_USERS_COUNT;
  totalUsersCount: number;
}

export const setTotalUsersCountAC = (totalUsersCount: number): ISetTotalUsersCountAction => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});

interface IToggleIsFetchingAction {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
}

export const toggleIsFetchingAC = (isFetching: boolean): IToggleIsFetchingAction => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

interface IToggleFollowingProgressAction {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS;
  isFetching: boolean;
  userId: number;
}

export const toggleFollowingProgressAC = (
  isFetching: boolean,
  userId: number
): IToggleFollowingProgressAction => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const getUsersThunkCreator = (page: number, pageSize: number) => {
  return async (dispatch: any) => {
    dispatch(toggleIsFetchingAC(true));
    dispatch(setCurrentPageAC(page));
    const res = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleIsFetchingAC(false));
    dispatch(setUsersAC(res.items));
    dispatch(setTotalUsersCountAC(res.totalCount));
  };
};

const followUnfollowFlow = async (
  dispatch: any,
  id: number,
  apiMethod: any,
  actionCreator: any
) => {
  dispatch(toggleFollowingProgressAC(true, id));
  const res = await apiMethod(id);
  if (res.resultCode === 0) {
    dispatch(actionCreator(id));
  }
  dispatch(toggleFollowingProgressAC(false, id));
};

export const followThunkCreator = (id: number) => {
  return async (dispatch: any) => {
    followUnfollowFlow(dispatch, id, usersAPI.follow.bind(usersAPI), followAC);
  };
};

export const unfollowThunkCreator = (id: number) => {
  return async (dispatch: any) => {
    followUnfollowFlow(dispatch, id, usersAPI.unfollow.bind(usersAPI), unfollowAC);
  };
};

export default usersReducer;
