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
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body });
      return state;
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
