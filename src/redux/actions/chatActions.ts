import { AppDispatch, BaseThunkType } from "../redux-store";
import {
  ActionTypes,
  IChatMessage,
  ISetMessagesAction,
  MESSAGES_RECEVIED,
  StatusType,
  IChangeStatusAction,
  CHAT_STATUS_CHANGED,
} from "./../types/chatTypes";
import { chatApi } from "./../../api/chatApi";

let _newMessageHandler: ((messages: IChatMessage[]) => void) | null = null;

let _statusChangedHandler: ((status: StatusType) => void) | null = null;

const newMessageHandlerCreator = (dispatch: AppDispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = (messages) => {
      dispatch(setMessages(messages));
    };
  }
  return _newMessageHandler;
};

const statusChangedHandlerCreator = (dispatch: AppDispatch) => {
  if (_statusChangedHandler === null) {
    _statusChangedHandler = (status) => {
      dispatch(changeStatus(status));
    };
  }
  return _statusChangedHandler;
};

export const setMessages = (messages: IChatMessage[]): ISetMessagesAction => {
  return {
    type: MESSAGES_RECEVIED,
    payload: messages,
  };
};

export const startMessagesListeningThunkCreator = (): BaseThunkType<ActionTypes> => {
  return async (dispatch) => {
    chatApi.start();
    chatApi.subscribe("messages-received", newMessageHandlerCreator(dispatch));
    chatApi.subscribe("status-changed", statusChangedHandlerCreator(dispatch));
  };
};

export const stopMessagesListeningThunkCreator = (): BaseThunkType<ActionTypes> => {
  return async (dispatch) => {
    chatApi.unsubscribe("messages-received", newMessageHandlerCreator(dispatch));
    chatApi.unsubscribe("status-changed", statusChangedHandlerCreator(dispatch));
    chatApi.stop();
  };
};

export const sendMessageThunkCreator = (message: string): BaseThunkType<ActionTypes> => {
  return async (dispatch) => {
    chatApi.sendMessage(message);
  };
};

export const changeStatus = (status: StatusType): IChangeStatusAction => {
  return {
    type: CHAT_STATUS_CHANGED,
    payload: status,
  };
};
