export const MESSAGES_RECEVIED = "chat/MESSAGES_RECEVIED";

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

export type ActionTypes = ISetMessagesAction;
