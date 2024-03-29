import profileReducer, { InitialStateType } from "./profileReducer";
import { addPostAC, deletePostAC } from './../actions/profileActions';

const state: InitialStateType = {
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
  profile: null,
  status: ""
};

it("length of posts should be incremented", () => {
  let action = addPostAC("text for post");
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(state.posts.length + 1);
});

it("message of new post should be correct", () => {
  let action = addPostAC("text for post");
  let newState = profileReducer(state, action);
  expect(newState.posts[0].message).toBe("text for post");
});

it("after deleting length of messages should be decrement", () => {
  let action = deletePostAC(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(state.posts.length - 1);
});
