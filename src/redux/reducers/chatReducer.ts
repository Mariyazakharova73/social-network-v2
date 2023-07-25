import { IChatMessage, ActionTypes, MESSAGES_RECEVIED } from "./../types/chatTypes";

const initialState = {
  messages: [] as IChatMessage[],
};

export type InitialStateType = typeof initialState;

const chatReducer = (state = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case MESSAGES_RECEVIED:
      return { ...state, messages: [...state.messages, ...action.payload] };

    default:
      return state;
  }
};

export default chatReducer;
