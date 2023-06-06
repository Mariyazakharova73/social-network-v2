import React from "react";
import List from "@mui/material/List";
import { StyledListItem } from "./UsersStyles";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import UserCard from "./../UserCard/UserCard";
import { Pagination } from "@mui/material";

class UsersC extends React.Component {
  componentDidMount() {
    axios
      .get(`${BASE_URL}/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  }

  handlePageChange = (e, pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`${BASE_URL}/users?page=${pageNumber}&count=${this.props.pageSize}`).then((res) => {
      this.props.setUsers(res.data.items);
    });
  };

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    return (
      <>
        <Stack spacing={2}>
          <Pagination
            page={this.props.currentPage}
            onChange={this.handlePageChange}
            count={pagesCount}
            variant="outlined"
            shape="rounded"
            size="small"
            color="secondary"
          />
        </Stack>
        <List sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {this.props.users.map((user) => {
            return (
              <StyledListItem key={user.id}>
                <UserCard user={user} unfollow={this.props.unfollow} follow={this.props.follow} />
              </StyledListItem>
            );
          })}
        </List>
      </>
    );
  }
}
export default UsersC;
