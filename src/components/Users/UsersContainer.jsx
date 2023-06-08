import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  toggleIsFetching,
  setTotalUsersCount,
} from "../../redux/usersReducer";
import { CircularProgress } from "@mui/material";
import { usersAPI } from "./../../api/api";
import { toggleFollowingProgress } from "./../../redux/usersReducer";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((res) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(res.items);
      this.props.setTotalUsersCount(res.totalCount);
    });
  }

  handlePageChange = (e, pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then((res) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(res.items);
    });
  };

  render() {
    return this.props.isFetching ? (
      <CircularProgress thickness={5} color="secondary" size={50} />
    ) : (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        handlePageChange={this.handlePageChange}
        pagesCount={this.props.pagesCount}
        users={this.props.users}
        currentPage={this.props.currentPage}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
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

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
})(UsersAPIComponent);

export default UsersContainer;
