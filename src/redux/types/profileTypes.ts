import { IPhotos, IProfile } from "./../../types/types";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../redux-store";

export const ADD_POST = "ADD_POST";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const SET_STATUS = "SET_STATUS";
export const DELETE_POST = "DELETE_POST";
export const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

export interface IAddPostAction {
  type: typeof ADD_POST;
  newPostText: string;
}

export interface IDeletePostAction {
  type: typeof DELETE_POST;
  postId: number;
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

export type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;
