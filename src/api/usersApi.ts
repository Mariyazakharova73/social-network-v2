import { GetItemsType, instance, IResponse } from "./api";

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`).then((res) => {
      return res.data;
    });
  },

  follow(id: number) {
    return instance.post<IResponse>(`follow/${id}`).then((res) => {
      return res.data;
    });
  },
  unfollow(id: number) {
    return instance.delete(`follow/${id}`).then((res) => {
      return res.data as Promise<IResponse>;
    });
  },
};
