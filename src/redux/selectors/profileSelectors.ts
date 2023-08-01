import { AppStateType } from "../redux-store";

export const selectCurrentUser = (state: AppStateType) => {
  return state.profileReducer.profile;
};

export const selectPosts = (state: AppStateType) => {
  return state.profileReducer.posts;
};
