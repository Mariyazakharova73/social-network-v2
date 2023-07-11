import { getAuthUserDataThunkCreator } from "../actions/authActions";
import { IInitializedSuccessAction, ThunkType } from "../types/appTypes";

export const initializedSuccessAction = (): IInitializedSuccessAction => ({
  type: "INITIALIZED_SUCCESS",
});

export const initializeAppThunkCreator = (): ThunkType => (dispatch) => {
  // id, email, login
  let promise = dispatch(getAuthUserDataThunkCreator());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccessAction());
  });
};
