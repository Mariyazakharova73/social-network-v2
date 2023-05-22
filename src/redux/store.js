import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

// const ADD_POST = "ADD_POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
// const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
// const SEND_MESSAGE = "SEND_MESSAGE";

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
    sidebar: {},
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

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);

    // if (action.type === ADD_POST) {
    //   let newPost = {
    //     id: 5,
    //     message: this._state.profilePage.newPostText,
    //     likesCount: 0,
    //   };
    //   this._state.profilePage.posts.push(newPost);
    //   this._state.profilePage.newPostText = "";
    //   this._callSubscriber(this._state);
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //   this._state.profilePage.newPostText = action.newText;
    //   this._callSubscriber(this._state);
    // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //   this._state.dialogsPage.newMessageBody = action.body;
    //   this._callSubscriber(this._state);
    // } else if (action.type === SEND_MESSAGE) {
    //   let body = this._state.dialogsPage.newMessageBody;
    //   this._state.dialogsPage.newMessageBody = "";
    //   this._state.dialogsPage.messages.push({ id: 6, message: body });
    //   this._callSubscriber(this._state);
    // }
  },
};

export default store;





