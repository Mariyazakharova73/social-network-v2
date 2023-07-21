import { ActionTypes, GET_CAPTCHA_URL_SUCCESS, SET_USER_DATA } from "./../types/authTypes";

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload };
    case GET_CAPTCHA_URL_SUCCESS:
      return { ...state, captchaUrl: action.payload };
    default:
      return state;
  }
};

export default authReducer;

//   maria7373