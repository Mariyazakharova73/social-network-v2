export const MESSAGES_RECEVIED = "chat/MESSAGES_RECEVIED";
export const CHAT_STATUS_CHANGED = "chat/CHAT_STATUS_CHANGED";

export interface IChatMessage {
  message: string;
  photo: string;
  userId: number;
  userName: string;
}

export interface ISetMessagesAction {
  type: typeof MESSAGES_RECEVIED;
  payload: IChatMessage[];
}

export interface IChangeStatusAction {
  type: typeof CHAT_STATUS_CHANGED;
  payload: StatusType;
}

export type StatusType = "pending" | "ready" | "error";

export type ActionTypes = ISetMessagesAction | IChangeStatusAction;
