import { instance } from "./api";

interface IGetCaptchaUrlResponseType {
  url: string;
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get<IGetCaptchaUrlResponseType>(`security/get-captcha-url`).then((res) => {
      return res.data;
    });
  },
};
