import { IChatMessage, StatusType } from "../redux/types/chatTypes";
import { WS_URL } from "../utils/constants";

type MessagesReceivedSubscriberType = (messages: IChatMessage[]) => void;
type StatusChangedSubscriberType = (status: StatusType) => void;

const subscribers = {
  "messages-received": [] as MessagesReceivedSubscriberType[],
  "status-changed": [] as StatusChangedSubscriberType[],
};

let ws: WebSocket | null = null;
type EventsNamesType = "messages-received" | "status-changed";

const closeHandler = () => {
  console.log("close ws");
  notifysubscribersAboutStatus("pending");
  setTimeout(createWsChannel, 3000);
};

const messageHandler = (e: MessageEvent) => {
  let newMessages = JSON.parse(e.data);
  subscribers["messages-received"].forEach((s) => s(newMessages));
};

const openHandler = () => {
  notifysubscribersAboutStatus("ready");
};

const errorHandler = () => {
  notifysubscribersAboutStatus("error");
  console.error("REFRESH PAGE");
};

const cleanUp = () => {
  ws?.removeEventListener("close", closeHandler);
  ws?.removeEventListener("message", messageHandler);
  ws?.removeEventListener("open", openHandler);
  ws?.removeEventListener("error", errorHandler);
};

const notifysubscribersAboutStatus = (status: StatusType) => {
  subscribers["status-changed"].forEach((s) => {
    s(status);
  });
};

const createWsChannel = () => {
  cleanUp();
  ws?.close();
  ws = new WebSocket(WS_URL);
  notifysubscribersAboutStatus("pending");
  ws?.addEventListener("close", closeHandler);
  ws?.addEventListener("message", messageHandler);
  ws?.addEventListener("open", openHandler);
  ws?.addEventListener("error", errorHandler);
};

export const chatApi = {
  start() {
    createWsChannel();
  },
  stop() {
    subscribers["messages-received"] = [];
    subscribers["status-changed"] = [];
    cleanUp();
    ws?.close();
  },
  subscribe(
    eventName: EventsNamesType,
    callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType
  ) {
    // @ts-ignore
    subscribers[eventName].push(callback);
    return () => {
      // @ts-ignore
      subscribers[eventName] = subscribers[eventName].filter((s) => s !== callback);
    };
  },
  unsubscribe(
    eventName: EventsNamesType,
    callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType
  ) {
    // @ts-ignore
    subscribers[eventName] = subscribers[eventName].filter((s) => s !== callback);
  },
  sendMessage(message: string) {
    ws?.send(message);
  },
};
