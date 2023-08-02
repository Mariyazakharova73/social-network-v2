import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Users from "../../components/Users/Users";
import {
  getCurrentPage,
  getPageSize,
  getUsersFilter,
  getIsFetching,
} from "../../redux/selectors/usersSelectors";
import { CircularProgress } from "@mui/material";
import { AppDispatch } from "../../redux/redux-store";
import { getUsersThunkCreator } from "../../redux/actions/usersActionsV2";
import { useLocation, useSearchParams } from "react-router-dom";
// @ts-ignore
import queryString from "query-string";
import { changeStrValues } from "../../utils/helpers";

interface IUsresProps {}

const UsersPage: FC<IUsresProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const isFetching = useSelector(getIsFetching);
  const currentPage = useSelector(getCurrentPage);
  const pageSize = useSelector(getPageSize);
  const filter = useSelector(getUsersFilter);
  const dispatch: AppDispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const parsed = queryString.parse(location.search) as {
      term: string;
      page: string;
      friend: string;
    };

    let actualPage = currentPage;
    let actualFilter = filter;
    if (!!parsed.page) actualPage = Number(parsed.page);
    if (!!parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string };
    if (!!parsed.friend)
      actualFilter = {
        ...actualFilter,
        friend: changeStrValues(parsed.friend),
      };

    dispatch(getUsersThunkCreator(actualPage, pageSize, actualFilter));
  }, []);

  useEffect(() => {
    // @ts-ignore
    setSearchParams({ term: filter.term, friend: filter.friend, page: currentPage });
  }, [filter, currentPage]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {isFetching ? (
        <CircularProgress thickness={5} color="secondary" size={50} />
      ) : (
        <Users searchParams={searchParams} setSearchParams={setSearchParams} />
      )}
    </div>
  );
};

export default UsersPage;
