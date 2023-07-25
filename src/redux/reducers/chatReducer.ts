import { v1 } from "uuid";
import {
  IChatMessage,
  ActionTypes,
  MESSAGES_RECEVIED,
  CHAT_STATUS_CHANGED,
  StatusType,
} from "./../types/chatTypes";

const initialState = {
  messages: [] as ChatMessageType[],
  status: "pending" as StatusType,
};

type ChatMessageType = IChatMessage & { id: string };

export type InitialStateType = typeof initialState;

const chatReducer = (state = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case MESSAGES_RECEVIED:
      return {
        ...state,
        messages: [...state.messages, ...action.payload.map((m) => ({ ...m, id: v1() }))].filter(
          (m, i, arr) => i >= arr.length - 100
        ),
      };
    case CHAT_STATUS_CHANGED:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};

export default chatReducer;
