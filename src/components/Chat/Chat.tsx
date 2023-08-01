import React, { FC, useEffect } from "react";
import ChatMessages from "../ChatMessages/ChatMessages";
import ChatMessageForm from "./../ChatMessageForm/ChatMessageForm";
import { useDispatch, useSelector } from "react-redux";
import {
  startMessagesListeningThunkCreator,
  stopMessagesListeningThunkCreator,
} from "../../redux/actions/chatActions";
import { AppDispatch} from "../../redux/redux-store";
import { selectStatus } from './../../redux/selectors/chatSelectors';

const Chat: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(startMessagesListeningThunkCreator());
    return () => {
      dispatch(stopMessagesListeningThunkCreator());
    };
  }, []);

  return (
    <>
      {status === "error" && <p>Some error occured. Please refresh the page</p>}
      <ChatMessages />
      <ChatMessageForm />
    </>
  );
};

export default Chat;
