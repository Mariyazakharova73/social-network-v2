import { ISendMessageAction } from "../types/dialogsTypes";
import { SEND_MESSAGE } from './../types/dialogsTypes';

export const sendMessageActionCreator = (newMessageBody: string): ISendMessageAction => {
  return {
    type: SEND_MESSAGE,
    newMessageBody,
  };
};