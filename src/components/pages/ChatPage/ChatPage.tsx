import React, { FC } from "react";
import Chat from "./../../Chat/Chat";
import { WS_URL } from './../../../utils/constants';

const ws = new WebSocket(WS_URL);

const ChatPage: FC = () => {
  return <Chat ws={ws}/>;
};

export default ChatPage;
