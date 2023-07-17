export const SET_USER_DATA = "auth/SET_USER_DATA";
export const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";

export interface ISetAuthUserDataAction {
  type: typeof SET_USER_DATA;
  payload: ISetAuthUserDataActionPayload;
}

export interface ISetAuthUserDataActionPayload {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
}

export interface IGetCaptchaUrlSuccessACAction {
  type: typeof GET_CAPTCHA_URL_SUCCESS;
  payload: string;
}

export type ActionTypes = ISetAuthUserDataAction | IGetCaptchaUrlSuccessACAction;
