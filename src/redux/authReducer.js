import { authAPI, securityAPI } from "./../api/api";
const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload };
    case GET_CAPTCHA_URL_SUCCESS:
      return { ...state, captchaUrl: action.payload };
    default:
      return state;
  }
};

export const setAuthUserDataAC = (userId, email, login, isAuth, ) => {
  return {
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth },
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

export const getAuthUserDataThunkCreator = () => {
  return async (dispatch) => {
    const res = await authAPI.getMe();
    if (res.resultCode === 0) {
      let { id, email, login } = res.data;
      dispatch(setAuthUserDataAC(id, email, login, true));
    }
  };
};

export const loginThunkCreator = (email, password, rememberMe, captcha,  setStatus, setOpen) => {
  return async (dispatch) => {
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

export const logoutThunkCreator = () => {
  return async (dispatch) => {
    const res = await authAPI.logout();
    if (res.resultCode === 0) {
      //  зачищаем информацию о себе
      dispatch(setAuthUserDataAC(null, null, null, false, ));
    }
  };
};

export const getCaptchaUrlSuccessAC = (captchaUrl) => {
  return {
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: captchaUrl,
  };
};

export const getCaptchaUrlThunkCreator = () => {
  return async (dispatch) => {
    const res = await securityAPI.getCaptchaUrl();
    const captchaUrl = res.url;
    console.log(captchaUrl);
    dispatch(getCaptchaUrlSuccessAC(captchaUrl));
  };
};

export default authReducer;
//   maria7373
