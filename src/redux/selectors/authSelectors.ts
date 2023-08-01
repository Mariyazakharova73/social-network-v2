import { AppStateType } from "../redux-store";

export const selectIsAuth = (state: AppStateType) => {
  return state.authReducer.isAuth;
};

export const selectCaptchaUrl = (state: AppStateType) => {
  return state.authReducer.captchaUrl;
};
