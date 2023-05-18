const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let store = {
  _state: {
    profilePage: {
      newPostText: "it-kamasutra",
      posts: [
        {
          id: 0,
          message: "Всем привет. Я изучаю реакт",
          likesCount: 12,
        },
        {
          id: 1,
          message: "Хочу найти новую работу",
          likesCount: 5,
        },
      ],
    },
    dialogsPage: {
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
    },
  },

  _callSubscriber() {
    // console.log("test");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  // _addPost() {
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0,
  //   };

  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = "";
  //   this._callSubscriber(this._state);
  // },

  // _updateNewpostText(action) {
  //   this._state.profilePage.newPostText = action.newText;
  //   this._callSubscriber(this._state);
  // },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({ id: 6, message: body });
      this._callSubscriber(this._state);
    }
  },
};

export default store;
window.store = store;

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
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
