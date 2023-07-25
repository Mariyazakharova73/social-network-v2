import { AppDispatch, BaseThunkType } from "../redux-store";
import {
  ActionTypes,
  IChatMessage,
  ISetMessagesAction,
  MESSAGES_RECEVIED,
} from "./../types/chatTypes";
import { chatApi } from "./../../api/chatApi";

let _newMessageHandler: ((messages: IChatMessage[]) => void) | null = null;

const newMessageHandlerCreator = (dispatch: AppDispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = (messages) => {
      dispatch(setMessages(messages));
    };
  }
  return _newMessageHandler;
};

export const setMessages = (messages: IChatMessage[]): ISetMessagesAction => {
  return {
    type: MESSAGES_RECEVIED,
    payload: messages,
  };
};

export const startMessagesListeningThunkCreator = (): BaseThunkType<ActionTypes> => {
  return async (dispatch) => {
    chatApi.start()
     chatApi.subscribe(newMessageHandlerCreator(dispatch));
  };
};

export const stopMessagesListeningThunkCreator = (): BaseThunkType<ActionTypes> => {
  return async (dispatch) => {
    chatApi.unsubscribe(newMessageHandlerCreator(dispatch));
    chatApi.stop()
  };
};

export const sendMessageThunkCreator = (message: string): BaseThunkType<ActionTypes> => {
  return async (dispatch) => {
    chatApi.sendMessage(message);
  };
};
