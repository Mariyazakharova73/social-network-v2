import usersReducer, { InitialStateType } from "./usersReducer";
import { actions } from "./../actions/usersActionsV2";

let state: InitialStateType;

beforeEach(() => {
  state = {
    users: [
      {
        id: 0,
        name: "Pavel",
        photos: { small: null, large: null },
        followed: false,
        status: "status 0",
      },
      {
        id: 1,
        name: "Pavel 1",
        photos: { small: null, large: null },
        followed: false,
        status: "status 1",
      },
      {
        id: 1,
        name: "Pavel 2",
        photos: { small: null, large: null },
        followed: true,
        status: "status 2",
      },
      {
        id: 3,
        name: "Pavel 3",
        photos: { small: null, large: null },
        followed: true,
        status: "status 3",
      },
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    filter: { term: "", friend: null as null | boolean },
  };
});

test("follow success", () => {
  const newState = usersReducer(state, actions.followAC(1));
  expect(newState.users[0].followed).toBeFalsy();
  expect(newState.users[1].followed).toBeTruthy(); 
});

test("unFollow success", () => {
  const newState = usersReducer(state, actions.unfollowAC(3));
  expect(newState.users[3].followed).toBeFalsy();
  expect(newState.users[2].followed).toBeTruthy();
});
