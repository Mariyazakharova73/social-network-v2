import { AppStateType } from "../redux-store";

export const selectStatus = (state: AppStateType) => {
  return state.chatReducer.status;
};

export const selectChatMesssages = (state: AppStateType) => {
  return state.chatReducer.messages;
};
