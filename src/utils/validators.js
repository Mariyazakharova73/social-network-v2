import * as Yup from "yup";

export const newPostTextSchema = Yup.object().shape({
  newPostText: Yup.string()
    .min(2, "Минимальная длина текста - 2 символа")
    .required("Поле должно быть заполнено"),
});

export const newMessageBodySchema = Yup.object().shape({
  newMessageBody: Yup.string()
    .min(2, "Минимальная длина текста - 2 символа")
    .required("Поле должно быть заполнено"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Неверный email").required("Поле должно быть заполнено"),
  password: Yup.string()
    .min(6, "Минимальная длина пароля - 6 символов")
    .required("Поле должно быть заполнено"),
  rememberMe: Yup.boolean(),
});

export const statusSchema = Yup.object().shape({
  status: Yup.string()
    .min(2, "Минимальная длина текста - 2 символа")
    .required("Поле должно быть заполнено"),
});

export const profileSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Минимальная длина текста - 2 символа")
    .required("Поле должно быть заполнено"),
});
