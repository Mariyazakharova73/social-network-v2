import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../redux-store";

export const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export interface IInitializedSuccessAction {
  type: typeof INITIALIZED_SUCCESS;
}

export type ThunkType = ThunkAction<void, AppStateType, unknown, IInitializedSuccessAction>;