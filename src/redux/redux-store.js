import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

export const rootReducer = combineReducers({
  profileReducer: profileReducer,
  dialogsReducer: dialogsReducer,
  usersReducer: usersReducer,
  sidebarReducer: sidebarReducer,
  authReducer: authReducer,
});

//  thunk здесь - thunkMiddleware
const store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store;

export default store;
