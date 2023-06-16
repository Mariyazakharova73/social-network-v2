import { profileAPI } from "./../api/api";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
  posts: [
    {
      id: 0,
      message: "Всем привет. Я изучаю реакт",
      likesCount: 12,
      date: "05.06.2023, 18:50:49",
    },
    {
      id: 1,
      message: "Хочу найти новую работу",
      likesCount: 5,
      date: "05.06.2023, 18:48:00",
    },
  ],
  profile: "null",
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
        date: new Date().toLocaleString(),
      };
      return { ...state, posts: [newPost, ...state.posts]};
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText
  };
};

export const setUserProfileAC = (profile) => ({ type: SET_USER_PROFILE, profile });

export const getUserProfileThunkCreator = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((res) => {
      dispatch(setUserProfileAC(res));
    });
  };
};

export const setStatusAC = (status) => ({ type: SET_STATUS, status });

export const getStatusThunkCreator = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((res) => {
      dispatch(setStatusAC(res));
    });
  };
};

export const updateStatusThunkCreator = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((res) => {
      if (res.resultCode === 0) {
        dispatch(setStatusAC(status));
      }
    });
  };
};

export default profileReducer;
