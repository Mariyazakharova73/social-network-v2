export const SEND_MESSAGE = "SEND_MESSAGE";

export interface ISendMessageAction {
  type: typeof SEND_MESSAGE,
  newMessageBody: string
}
