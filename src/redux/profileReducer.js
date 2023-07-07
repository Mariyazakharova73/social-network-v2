import { profileAPI } from "./../api/api";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

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
      return { ...state, posts: [newPost, ...state.posts] };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.postId),
      };
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText,
  };
};

export const deletePostAC = (postId) => ({ type: DELETE_POST, postId });

export const setUserProfileAC = (profile) => ({ type: SET_USER_PROFILE, profile });

export const getUserProfileThunkCreator = (userId) => {
  return async (dispatch) => {
    const res = await profileAPI.getProfile(userId);
    dispatch(setUserProfileAC(res));
  };
};

export const setStatusAC = (status) => ({ type: SET_STATUS, status });

export const getStatusThunkCreator = (userId) => {
  return async (dispatch) => {
    const res = await profileAPI.getStatus(userId);
    dispatch(setStatusAC(res));
  };
};

export const updateStatusThunkCreator = (status) => {
  return async (dispatch) => {
    try {
      const res = await profileAPI.updateStatus(status);
      if (res.resultCode === 0) {
        dispatch(setStatusAC(status));
      }
      if (res.resultCode === 1) {
        Promise.reject("Максимальня длина текста - 300 символов");
      }
    } catch(e) {
      console.log(e)
    }
  };
};

export const savePhotoSuccessAC = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const savePhotoThunkCreator = (file) => {
  return async (dispatch) => {
    const res = await profileAPI.savePhoto(file);
    if (res.resultCode === 0) {
      dispatch(savePhotoSuccessAC(res.data.photos));
    }
  };
};

export const saveProfieThunkCreator = (profileData) => {
  return async (dispatch, getState) => {
    const userId = getState().authReducer.userId;
    const res = await profileAPI.saveProfie(profileData);
    if (res.resultCode === 0) {
      // т.к в res нет данных о профиле, запросим заново измененные данные
      dispatch(getUserProfileThunkCreator(userId));
    }
  };
};

export default profileReducer;
