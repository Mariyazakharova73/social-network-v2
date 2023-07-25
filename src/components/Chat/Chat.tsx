import React, { FC, useEffect, useState } from "react";
import ChatMessages from "./../ChatMessages/ChatMessages";
import ChatMessageForm from "./../ChatMessageForm/ChatMessageForm";
import { WS_URL } from "./../../utils/constants";
import { useDispatch } from "react-redux";
import {
  startMessagesListeningThunkCreator,
  stopMessagesListeningThunkCreator,
} from "../../redux/actions/chatActions";
import { AppDispatch } from "../../redux/redux-store";

const Chat: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(startMessagesListeningThunkCreator());
    return () => {
      dispatch(stopMessagesListeningThunkCreator());
    };
  }, []);

  return (
    <>
      <ChatMessages />
      <ChatMessageForm />
    </>
  );
};

export default Chat;
