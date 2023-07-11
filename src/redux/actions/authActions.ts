import { authAPI, securityAPI } from "../../api/api";
import {
  SET_USER_DATA,
  ISetAuthUserDataAction,
  IGetCaptchaUrlSuccessACAction,
  GET_CAPTCHA_URL_SUCCESS,
  ThunkType,
} from "../types/authTypes";

export const setAuthUserDataAC = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): ISetAuthUserDataAction => {
  return {
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth },
  };
};

export const getAuthUserDataThunkCreator = (): ThunkType => {
  return async (dispatch: any) => {
    const res = await authAPI.getMe();
    if (res.resultCode === 0) {
      let { id, email, login } = res.data;
      dispatch(setAuthUserDataAC(id, email, login, true));
    }
  };
};

export const loginThunkCreator = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: any,
  setStatus: any,
  setOpen: any
): ThunkType => {
  return async (dispatch: any) => {
    const res = await authAPI.login(email, password, rememberMe, captcha);
    if (res.resultCode === 0) {
      dispatch(getAuthUserDataThunkCreator());
    } else {
      if (res.resultCode === 10) {
        dispatch(getCaptchaUrlThunkCreator());
      }
      let message = res.messages.length > 0 ? res.messages[0] : "Неверный логин или пароль";
      setStatus({ testError: `Неверный логин или пароль. (${message})` });
      setOpen(true);
    }
  };
};

export const logoutThunkCreator = (): ThunkType => {
  return async (dispatch: any) => {
    const res = await authAPI.logout();
    if (res.resultCode === 0) {
      //  зачищаем информацию о себе
      dispatch(setAuthUserDataAC(null, null, null, false));
    }
  };
};

export const getCaptchaUrlSuccessAC = (captchaUrl: string): IGetCaptchaUrlSuccessACAction => {
  return {
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: captchaUrl,
  };
};

export const getCaptchaUrlThunkCreator = (): ThunkType => {
  return async (dispatch: any) => {
    const res = await securityAPI.getCaptchaUrl();
    const captchaUrl = res.url;
    console.log(captchaUrl);
    dispatch(getCaptchaUrlSuccessAC(captchaUrl));
  };
};

// export const getAuthUserDataThunkCreator = () => {
//   return (dispatch) => {
//     return authAPI.getMe().then((res) => {
//       if (res.resultCode === 0) {
//         let { id, email, login } = res.data;
//         dispatch(setAuthUserDataAC(id, email, login, true));
//       }
//     });
//   };
// };
