import { IResponse, ResultCodes } from "../../api/api";
import { followThunkCreator, unfollowThunkCreator } from "../actions/usersActionsV2";
import { usersAPI } from "./../../api/usersApi";
import { actions } from "./../actions/usersActionsV2";

jest.mock("./../../api/usersApi");
const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
  dispatchMock.mockClear();
  getStateMock.mockClear();
  usersAPIMock.follow.mockClear();
  usersAPIMock.unfollow.mockClear();
});

const result: IResponse = {
  resultCode: ResultCodes.Success,
  messages: [],
  data: {},
};



test("success follow thunk", async () => {
  usersAPIMock.follow.mockReturnValue(Promise.resolve(result));
  const thunk = followThunkCreator(1);

  await thunk(dispatchMock, getStateMock, {});

  expect(dispatchMock).toBeCalledTimes(3);

  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgressAC(true, 1));
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followAC(1));
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgressAC(false, 1));
});

test("success unfollow thunk", async () => {
  usersAPIMock.unfollow.mockReturnValue(Promise.resolve(result));
  const thunk = unfollowThunkCreator(1);

  await thunk(dispatchMock, getStateMock, {});

  expect(dispatchMock).toBeCalledTimes(3);

  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgressAC(true, 1));
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowAC(1));
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgressAC(false, 1));
});
