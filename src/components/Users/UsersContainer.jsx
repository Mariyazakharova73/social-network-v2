import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  followAC,
  unfollowAC,
  setCurrentPageAC,
  getUsersThunkCreator,
  unfollowThunkCreator,
} from "../../redux/usersReducer";
import { CircularProgress } from "@mui/material";
import { followThunkCreator } from "./../../redux/usersReducer";
import { withAuthRedirect } from "./../../HOC/withAuthRedirectComponent";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  handlePageChange = (e, pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return this.props.isFetching ? (
      <CircularProgress thickness={5} color="secondary" size={50} />
    ) : (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        followThunk={this.props.followThunk}
        unfollowThunk={this.props.unfollowThunk}
        handlePageChange={this.handlePageChange}
        pagesCount={this.props.pagesCount}
        users={this.props.users}
        currentPage={this.props.currentPage}
        followingInProgress={this.props.followingInProgress}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching,
    followingInProgress: state.usersReducer.followingInProgress,
  };
};

export default compose(
  connect(mapStateToProps, {
    follow: followAC,
    unfollow: unfollowAC,
    setCurrentPage: setCurrentPageAC,
    getUsers: getUsersThunkCreator,
    unfollowThunk: unfollowThunkCreator,
    followThunk: followThunkCreator,
  }),
  withAuthRedirect
)(UsersContainer);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPageAC(currentPage));
//     },
//     setTotalUsersCount: (totalUsersCount) => {
//       dispatch(setTotalUsersCountAC(totalUsersCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },
//   };
// };
