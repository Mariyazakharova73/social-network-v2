const SEND_MESSAGE = "SEND_MESSAGE";

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
  ],
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
  ],
};

const dialogsReducer = (state = initialState, action) => {
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

export const sendMessageActionCreator = (newMessageBody) => {
  return {
    type: SEND_MESSAGE,
    newMessageBody
  };
};

export default dialogsReducer;
