import { INITIALIZED_SUCCESS, IInitializedSuccessAction } from "../types/appTypes";

export interface IInitialState {
  initialized: boolean;
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

export default appReducer;
