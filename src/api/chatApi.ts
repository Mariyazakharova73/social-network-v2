import { IChatMessage } from "../redux/types/chatTypes";
import { WS_URL } from "../utils/constants";

let subscribers = [] as SubscriberType[];
let ws: WebSocket | null = null;
const closeHandler = () => {
  console.log("close ws");
  setTimeout(createWsChannel, 3000);
};

function createWsChannel() {
  if (ws !== null) {
    ws?.removeEventListener("close", closeHandler);
    ws?.close();
  }
  ws = new WebSocket(WS_URL);

  ws?.addEventListener("close", closeHandler);
  ws?.addEventListener("message", messageHandler);
}

const messageHandler = (e: MessageEvent) => {
  let newMessages = JSON.parse(e.data);
  subscribers.forEach((s) => s(newMessages));
};

export const chatApi = {
  start() {
    createWsChannel();
  },
  stop() {
    subscribers = [];
    ws?.removeEventListener("close", closeHandler);
    ws?.removeEventListener("message", messageHandler);
    ws?.close();
  },
  subscribe(callback: SubscriberType) {
    subscribers.push(callback);
    return () => {
      subscribers = subscribers.filter((s) => s !== callback);
    };
  },
  unsubscribe(callback: SubscriberType) {
    subscribers = subscribers.filter((s) => s !== callback);
  },
  sendMessage(message: string) {
    ws?.send(message);
  },
};

type SubscriberType = (messages: IChatMessage[]) => void;
