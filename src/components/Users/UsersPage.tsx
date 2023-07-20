import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Users from "./Users";
import { getCurrentPage, getPageSize, getUsersFilter } from "./../../redux/usersSelectors";
import { CircularProgress } from "@mui/material";
import { getIsFetching } from "../../redux/usersSelectors";
import { AppDispatch } from "../../redux/redux-store";
import { getUsersThunkCreator } from "../../redux/actions/usersActionsV2";
import { useLocation, useSearchParams } from "react-router-dom";
// @ts-ignore
import queryString from "query-string";
import { changeStrValues } from "./../../utils/helpers";

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

  return isFetching ? (
    <CircularProgress thickness={5} color="secondary" size={50} />
  ) : (
    <Users searchParams={searchParams} setSearchParams={setSearchParams} />
  );
};

export default UsersPage;
