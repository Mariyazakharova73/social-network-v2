import * as Yup from "yup";

const validateUrl = () => {
  return Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Введите корректный url!"
    )
    .required("Поле должно быть заполнено");
};

const validateText = () => {
  return Yup.string()
    .min(2, "Минимальная длина текста - 2 символа")
    .required("Поле должно быть заполнено");
};

export const newPostTextSchema = Yup.object().shape({
  newPostText: validateText(),
});

export const newMessageBodySchema = Yup.object().shape({
  newMessageBody: validateText(),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Неверный email").required("Поле должно быть заполнено"),
  password: Yup.string()
    .min(6, "Минимальная длина пароля - 6 символов")
    .required("Поле должно быть заполнено"),
  rememberMe: Yup.boolean(),
  captcha: Yup.string()
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
