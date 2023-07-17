import { getAuthUserDataThunkCreator } from "../actions/authActions";
import { BaseThunkType } from "../redux-store";
import { IInitializedSuccessAction, INITIALIZED_SUCCESS } from "../types/appTypes";

export const initializedSuccessAction = (): IInitializedSuccessAction => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeAppThunkCreator =
  (): BaseThunkType<IInitializedSuccessAction, void> => (dispatch) => {
    // id, email, login
    let promise = dispatch(getAuthUserDataThunkCreator());
    Promise.all([promise]).then(() => {
      dispatch(initializedSuccessAction());
    });
  };
