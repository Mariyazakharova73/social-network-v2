import React, { ChangeEvent } from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  setCurrentPageAC,
  getUsersThunkCreator,
  unfollowThunkCreator,
  followThunkCreator,
} from "../../redux/actions/usersActions";
import { CircularProgress } from "@mui/material";
import { compose } from "redux";
import {
  getPageSize,
  requestUsers,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from "../../redux/usersSelectors";
import { IUser } from "./../../types/types";
import { AppStateType } from "../../redux/redux-store";

interface IMapStateProps {
  currentPage: number;
  pageSize: number;
  isFetching: boolean;
  totalItemsCount: number;
  users: Array<IUser>;
  followingInProgress: Array<number>;
}

interface IMapDispatchProps {
  getUsers: (currentPage: number, pageSize: number) => void;
  setCurrentPage: (pageNumber: number) => void;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
}

interface IOwnProps {}

type PropsType = IMapStateProps & IMapDispatchProps & IOwnProps;

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  handlePageChange = (e: ChangeEvent<unknown>, pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return this.props.isFetching ? (
      <CircularProgress thickness={5} color="secondary" size={50} />
    ) : (
      <Users
        totalItemsCount={this.props.totalItemsCount}
        pageSize={this.props.pageSize}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        handlePageChange={this.handlePageChange}
        users={this.props.users}
        currentPage={this.props.currentPage}
        followingInProgress={this.props.followingInProgress}
      />
    );
  }
}

const mapStateToProps = (state: AppStateType): IMapStateProps => {
  return {
    users: requestUsers(state),
    pageSize: getPageSize(state),
    totalItemsCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  // <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, TMergedProps = {}, State = DefaultState
  connect<IMapStateProps, IMapDispatchProps, IOwnProps, AppStateType>(mapStateToProps, {
    setCurrentPage: setCurrentPageAC,
    getUsers: getUsersThunkCreator,
    unfollow: unfollowThunkCreator,
    follow: followThunkCreator,
  })
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
