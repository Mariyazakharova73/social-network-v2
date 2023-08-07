import { IPhotos, IProfile } from "./../../types/types";

export const ADD_POST = "pofile/ADD_POST";
export const SET_USER_PROFILE = "pofile/SET_USER_PROFILE";
export const SET_STATUS = "pofile/SET_STATUS";
export const DELETE_POST = "pofile/DELETE_POST";
export const SAVE_PHOTO_SUCCESS = "pofile/SAVE_PHOTO_SUCCESS";

export interface IAddPostAction {
  type: typeof ADD_POST;
  newPostText: string;
}

export interface IDeletePostAction {
  type: typeof DELETE_POST;
  postId: number | string;
}

export interface ISetUserProfileAction {
  type: typeof SET_USER_PROFILE;
  profile: IProfile;
}

export interface ISetStatusAction {
  type: typeof SET_STATUS;
  status: string;
}

export interface ISavePhotoSuccessAction {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: IPhotos;
}

export type ActionTypes =
  | IAddPostAction
  | IDeletePostAction
  | ISetUserProfileAction
  | ISetStatusAction
  | ISavePhotoSuccessAction;
