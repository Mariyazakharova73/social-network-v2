import React, { FC, UIEvent, useEffect, useRef, useState } from "react";
import List from "@mui/material/List";
import { useSelector } from "react-redux";
import { selectChatMesssages } from "../../redux/selectors/chatSelectors";
import Message from "../ChatMessage/ChatMessage";

const ChatMessages: FC = () => {
  const messages = useSelector(selectChatMesssages);
  const ref = useRef<HTMLDivElement>(null);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  const scrollHandler = (e: UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      !isAutoScroll && setIsAutoScroll(true);
    } else {
      isAutoScroll && setIsAutoScroll(false);
    }
  };
  useEffect(() => {
    if (isAutoScroll) {
      ref.current?.scrollIntoView(true);
    }
  }, [messages]);

  return (
    <div
      style={{ height: "400px", overflowY: "auto", marginBottom: "50px" }}
      onScroll={scrollHandler}
    >
      <List>
        {messages.map((message, index) => {
          return <Message key={index} message={message} />;
        })}
        <div ref={ref}></div>
      </List>
    </div>
  );
};

export default ChatMessages;
