const SEND_MESSAGE = "SEND_MESSAGE";

interface IDialog {
  id: number;
  name: string;
}

interface IMessage {
  id: number;
  message: string;
}

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

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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

interface ISendMessageAction {
  type: typeof SEND_MESSAGE,
  newMessageBody: string
}

export const sendMessageActionCreator = (newMessageBody: string): ISendMessageAction => {
  return {
    type: SEND_MESSAGE,
    newMessageBody,
  };
};

export default dialogsReducer;
