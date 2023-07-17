import { ISendMessageAction } from '../types/dialogsTypes';
import { IDialog, IMessage } from './../../types/types';
import { SEND_MESSAGE } from './../types/dialogsTypes';

const initialState = {
  dialogs: [
    {
      id: 0,
      name: "Irina",
    },
    {
      id: 1,
      name: "Ivan",
    },
    {
      id: 2,
      name: "Pavel",
    },
    {
      id: 3,
      name: "Vlad",
    },
    {
      id: 4,
      name: "Dima",
    },
  ] as Array<IDialog>,
  messages: [
    {
      id: 0,
      message: "Irina bbbb bbbbb b",
    },
    {
      id: 1,
      message: "Irina bbbb bbbbb b",
    },
    {
      id: 2,
      message: "Irina bbbb bbbbb b",
    },
    {
      id: 3,
      message: "Irina bbbb bbbbb b",
    },
    {
      id: 4,
      message: "Irina bbbb bbbbb b",
    },
  ] as Array<IMessage>,
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: ISendMessageAction): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export default dialogsReducer;
