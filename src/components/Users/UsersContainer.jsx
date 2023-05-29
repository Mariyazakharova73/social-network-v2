import { connect } from "react-redux";
import UsersC from "./UsersC";
import { followAC, unfollowAC, setUsersAC } from "../../redux/usersReducer";

const mapStateToProps = (state) => {
  return { users: state.usersReducer.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer;
