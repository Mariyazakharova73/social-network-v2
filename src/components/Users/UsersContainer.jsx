import { connect } from "react-redux";
import UsersC from "./UsersC";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC } from "../../redux/usersReducer";
import { setTotalUsersCountAC } from "./../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
  };
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
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountAC(totalUsersCount));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer;
