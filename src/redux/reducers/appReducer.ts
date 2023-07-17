import { INITIALIZED_SUCCESS, IInitializedSuccessAction } from "../types/appTypes";

const initialState = {
  initialized: false,
};

export type IInitialState = typeof initialState;

const appReducer = (state = initialState, action: IInitializedSuccessAction): IInitialState => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return { ...state, initialized: true };
    default:
      return state;
  }
};

export default appReducer;
