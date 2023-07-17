import { instance, IResponse, ResultCodes } from "./api";

export enum ResultCodesForCaptcha {
  CaptchaIsRequired = 10,
}

interface IMeResponseData {
  id: number;
  email: string;
  login: string;
}

interface ILoginResponseData {
  userId: number;
}

export const authAPI = {
  getMe() {
    return instance.get<IResponse<IMeResponseData>>(`auth/me`).then((res) => {
      return res.data;
    });
  },
  login(
    email: string,
    password: string,
    rememberMe: boolean = false,
    captcha: null | string = null
  ) {
    return instance
      .post<IResponse<ILoginResponseData, ResultCodes | ResultCodesForCaptcha>>(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((res) => {
        return res.data;
      });
  },
  logout() {
    return instance.delete(`auth/login`).then((res) => {
      return res.data;
    });
  },
};
