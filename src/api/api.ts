import axios from "axios";
import { IUser } from "../types/types";
import { BASE_URL } from "../utils/constants";
import { API_KEY } from "../utils/constants";

export enum ResultCodes {
  Success = 0,
  Error = 1,
}

export interface IResponse<D = {}, RC = ResultCodes> {
  data: D;
  messages: Array<string>;
  resultCode: RC;
}

export interface GetItemsType {
  items: Array<IUser>;
  totalCount: number;
  error: string | null;
}

export const instance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    "API-KEY": API_KEY,
  },
});
