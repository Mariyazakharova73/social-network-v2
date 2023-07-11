import { profileAPI } from "../api/api";
import { IPost, IProfile, IPhotos, IProfileData } from './../types/types';
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
  ] as Array<IPost>,
  profile: null as IProfile | null,
  status: "",
};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
        profile: { ...state.profile, photos: action.photos } as IProfile,
      };
    default:
      return state;
  }
};

interface IAddPostAction {
  type: typeof ADD_POST;
  newPostText: string;
}

export const addPostActionCreator = (newPostText: string): IAddPostAction => {
  return {
    type: ADD_POST,
    newPostText,
  };
};

interface IDeletePostAction {
  type: typeof DELETE_POST;
  postId: number;
}

export const deletePostAC = (postId: number): IDeletePostAction => ({ type: DELETE_POST, postId });

interface ISetUserProfileAction {
  type: typeof SET_USER_PROFILE;
  profile: IProfile;
}

export const setUserProfileAC = (profile: IProfile): ISetUserProfileAction => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfileThunkCreator = (userId: number) => {
  return async (dispatch: any) => {
    const res = await profileAPI.getProfile(userId);
    dispatch(setUserProfileAC(res));
  };
};

interface ISetStatusAction {
  type: typeof SET_STATUS;
  status: string;
}

export const setStatusAC = (status: string): ISetStatusAction => ({ type: SET_STATUS, status });

export const getStatusThunkCreator = (userId: number) => {
  return async (dispatch: any) => {
    const res = await profileAPI.getStatus(userId);
    dispatch(setStatusAC(res));
  };
};

export const updateStatusThunkCreator = (status: string) => {
  return async (dispatch: any) => {
    try {
      const res = await profileAPI.updateStatus(status);
      if (res.resultCode === 0) {
        dispatch(setStatusAC(status));
      }
      if (res.resultCode === 1) {
        Promise.reject("Максимальня длина текста - 300 символов");
      }
    } catch (e) {
      console.log(e);
    }
  };
};

interface ISavePhotoSuccessAction {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: IPhotos;
}

export const savePhotoSuccessAC = (photos: IPhotos): ISavePhotoSuccessAction => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const savePhotoThunkCreator = (file: any) => {
  return async (dispatch: any) => {
    const res = await profileAPI.savePhoto(file);
    if (res.resultCode === 0) {
      dispatch(savePhotoSuccessAC(res.data.photos));
    }
  };
};

export const saveProfileThunkCreator = (profileData: IProfileData) => {
  return async (dispatch: any, getState: any) => {
    const userId = getState().authReducer.userId;
    const res = await profileAPI.saveProfie(profileData);
    if (res.resultCode === 0) {
      // т.к в res нет данных о профиле, запросим заново измененные данные
      dispatch(getUserProfileThunkCreator(userId));
    }
  };
};

export default profileReducer;
