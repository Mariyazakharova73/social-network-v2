const state = {
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
  },
};

export default state;

let rerender = () => {
  console.log("test");
};

window.state = state;

export const addPost = () => {
  const newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerender(state);
};

export const updateNewpostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerender(state);
};

export const subscribe = (observer) => {
  rerender = observer;
};
