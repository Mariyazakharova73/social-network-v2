const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
  users: [
    {
      id: 0,
      followed: true,
      fullName: "Dima",
      status:
        "text ghhhhhhh hhhhhhhhhhh uuuuuu uuuuuuuu uuuuuuuuuuuu  hhhhhhh hhhhhhhhh hhhhhhh yyyyyyyyyyyyyy",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 1,
      followed: false,
      fullName: "Pavel",
      status: "text",
      location: { city: "Moscow", country: "Russia" },
    },
    {
      id: 2,
      followed: false,
      fullName: "Masha",
      status: "text",
      location: { city: "Ulsk", country: "Russia" },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
