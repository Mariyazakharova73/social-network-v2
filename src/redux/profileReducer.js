const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const initialState = {
  posts: [
    {
      id: 0,
      message: "Всем привет. Я изучаю реакт",
      likesCount: 12,
      date: "05.06.2023, 18:50:49",
    },
    {
      id: 1,
      message: "Хочу найти новую работу",
      likesCount: 5,
      date: "05.06.2023, 18:48:00",
    },
  ],
  newPostText: "it-kamasutra",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
        date: new Date().toLocaleString(),
      };

      return { ...state, posts: [newPost, ...state.posts], newPostText: "" };
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return { ...state, newPostText: action.newText };
    default:
      return state;
  }
};

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

export default profileReducer;
