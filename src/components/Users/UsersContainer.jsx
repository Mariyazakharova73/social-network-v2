import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Users from "./Users";
import { BASE_URL } from "../../utils/constants";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  toggleIsFetching,
  setTotalUsersCount,
} from "../../redux/usersReducer";
import { CircularProgress } from "@mui/material";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(`${BASE_URL}/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((res) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  }

  handlePageChange = (e, pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios.get(`${BASE_URL}/users?page=${pageNumber}&count=${this.props.pageSize}`).then((res) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(res.data.items);
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
})(UsersAPIComponent);

export default UsersContainer;
