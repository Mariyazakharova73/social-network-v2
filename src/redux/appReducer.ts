import { getAuthUserDataThunkCreator } from "./authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export interface IInitialState {
  initialized: boolean;
}

interface IInitializedSuccessAction {
  type: typeof INITIALIZED_SUCCESS;
}

const initialState: IInitialState = {
  initialized: false,
};

const appReducer = (state = initialState, action: IInitializedSuccessAction): IInitialState => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return { ...state, initialized: true };
    default:
      return state;
  }
};

export const initializedSuccess = (): IInitializedSuccessAction => ({ type: "INITIALIZED_SUCCESS" });

export const initializeAppThunkCreator = () => (dispatch: any) => {
  // id, email, login
  let promise = dispatch(getAuthUserDataThunkCreator());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
