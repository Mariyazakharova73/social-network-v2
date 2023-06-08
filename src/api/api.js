import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { API_KEY } from "./../utils/constants";

const instance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  "API-KEY": API_KEY,
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then((res) => {
        return res.data;
      });
  },
};
