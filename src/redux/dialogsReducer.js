const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
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
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updateNewMessageBodyActionCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default dialogsReducer;
