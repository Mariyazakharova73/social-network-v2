import { createStore, combineReducers, applyMiddleware, compose, Action } from "redux";
import thunk from "redux-thunk";
import { ThunkAction } from "redux-thunk";
import profileReducer from "./reducers/profileReducer";
import sidebarReducer from "./reducers/sidebarReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import appReducer from "./reducers/appReducer";
import chatReducer from "./reducers/chatReducer";

export const rootReducer = combineReducers({
  profileReducer: profileReducer,
  usersReducer: usersReducer,
  sidebarReducer: sidebarReducer,
  authReducer: authReducer,
  appReducer: appReducer,
  chatReducer: chatReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//  thunk здесь - thunkMiddleware
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export type AppDispatch = typeof store.dispatch 

// @ts-ignore
window.__store__ = store;

export default store;
