import { ActionTypes } from "../types/profileTypes";
import { IPost, IProfile } from "./../../types/types";
import {
  ADD_POST,
  SET_USER_PROFILE,
  SET_STATUS,
  DELETE_POST,
  SAVE_PHOTO_SUCCESS,
} from "./../types/profileTypes";
import { v1 } from "uuid";

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
  ] as Array<IPost>,
  profile: null as IProfile | null,
  status: "",
};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: (v1()),
        message: action.newPostText,
        likesCount: 0,
        date: new Date().toLocaleString(),
      };
      return { ...state, posts: [newPost, ...state.posts] };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.postId),
      };
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as IProfile,
      };
    default:
      return state;
  }
};

export default profileReducer;
