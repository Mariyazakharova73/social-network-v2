import { AppStateType } from "../redux-store";

export const selectIsAuth = (state: AppStateType) => {
  return state.authReducer.isAuth;
};

export const selectCurrentUser = (state: AppStateType) => {
  return state.profileReducer.profile;
};
