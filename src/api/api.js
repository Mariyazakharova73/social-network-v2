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
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((res) => {
      return res.data;
    });
  },

  follow(id) {
    return instance.post(`follow/${id}`).then((res) => {
      return res.data;
    });
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`).then((res) => {
      return res.data;
    });
  },
};

export const authAPI = {
  getMe() {
    return instance.get(`auth/me`).then((res) => {
      return res.data;
    });
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((res) => {
      return res.data;
    });
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then((res) => {
      return res.data;
    });
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status }).then((res) => {
      return res.data;
    });
  },
};
