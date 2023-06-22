import { authAPI } from "./../api/api";
const SET_USER_DATA = "auth/SET_USER_DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const setAuthUserDataAC = (userId, email, login, isAuth) => {
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

export const loginThunkCreator = (email, password, rememberMe, setStatus, setOpen) => {
  return async (dispatch) => {
    const res = await authAPI.login(email, password, rememberMe);
    if (res.resultCode === 0) {
      dispatch(getAuthUserDataThunkCreator());
    } else {
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
      dispatch(setAuthUserDataAC(null, null, null, false));
    }
  };
};

export default authReducer;
//   maria7373
