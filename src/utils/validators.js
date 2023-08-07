import * as Yup from "yup";
import { REG_EXP } from "./constants";

const validateUrl = () => {
  return Yup.string().matches(REG_EXP, "checkUrl").required("requiredField");
};

const validateText = () => {
  return Yup.string().min(2, "minLength").required("requiredField");
};

export const newPostTextSchema = Yup.object().shape({
  newPostText: validateText(),
});

export const newMessageBodySchema = Yup.object().shape({
  newMessageBody: validateText(),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("checkEmail").required("requiredField"),
  password: Yup.string().min(4, "passwordLength").required("requiredField"),
  rememberMe: Yup.boolean(),
  captcha: Yup.string(),
});

export const statusSchema = Yup.object().shape({
  status: validateText(),
});

export const profileSchema = Yup.object().shape({
  fullName: validateText(),
  lookingForAJob: Yup.boolean(),
  lookingForAJobDescription: validateText(),
  aboutMe: validateText(),
  facebook: validateUrl(),
  website: validateUrl(),
  vk: validateUrl(),
  twitter: validateUrl(),
  instagram: validateUrl(),
  youtube: validateUrl(),
  github: validateUrl(),
  mainLink: validateUrl(),
});

export const messageSchema = Yup.object().shape({
  message: validateText(),
});
