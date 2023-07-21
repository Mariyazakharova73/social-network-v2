import React, { FC, useEffect } from "react";
import ChatMessages from "./../ChatMessages/ChatMessages";
import ChatMessageForm from "./../ChatMessageForm/ChatMessageForm";

const Chat: FC<{ ws: any }> = ({ ws }) => {
useEffect(()=>{

}, [])

  return (
    <>
      <ChatMessages />
      <ChatMessageForm />
    </>
  );
};

export default Chat;
