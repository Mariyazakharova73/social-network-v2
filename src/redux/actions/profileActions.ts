import { IPhotos, IProfile, IProfileData } from "../../types/types";
import {
  DELETE_POST,
  IAddPostAction,
  ADD_POST,
  IDeletePostAction,
  SET_USER_PROFILE,
  ISetStatusAction,
  SET_STATUS,
  ISavePhotoSuccessAction,
  SAVE_PHOTO_SUCCESS,
  ISetUserProfileAction,
  ThunkType,
} from "../types/profileTypes";
import { profileAPI } from "./../../api/api";

export const addPostAC = (newPostText: string): IAddPostAction => {
  return {
    type: ADD_POST,
    newPostText,
  };
};

export const deletePostAC = (postId: number): IDeletePostAction => ({ type: DELETE_POST, postId });

export const setUserProfileAC = (profile: IProfile): ISetUserProfileAction => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfileThunkCreator = (userId: number): ThunkType => {
  return async (dispatch: any) => {
    const res = await profileAPI.getProfile(userId);
    dispatch(setUserProfileAC(res));
  };
};

export const setStatusAC = (status: string): ISetStatusAction => ({ type: SET_STATUS, status });

export const getStatusThunkCreator = (userId: number): ThunkType => {
  return async (dispatch: any) => {
    const res = await profileAPI.getStatus(userId);
    dispatch(setStatusAC(res));
  };
};

export const updateStatusThunkCreator = (status: string): ThunkType => {
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

export const savePhotoSuccessAC = (photos: IPhotos): ISavePhotoSuccessAction => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const savePhotoThunkCreator = (file: any): ThunkType => {
  return async (dispatch: any) => {
    const res = await profileAPI.savePhoto(file);
    if (res.resultCode === 0) {
      dispatch(savePhotoSuccessAC(res.data.photos));
    }
  };
};

export const saveProfileThunkCreator = (profileData: IProfileData): ThunkType => {
  return async (dispatch: any, getState: any) => {
    const userId = getState().authReducer.userId;
    const res = await profileAPI.saveProfie(profileData);
    if (res.resultCode === 0) {
      // т.к в res нет данных о профиле, запросим заново измененные данные
      dispatch(getUserProfileThunkCreator(userId));
    }
  };
};
