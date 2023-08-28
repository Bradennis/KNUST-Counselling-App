import React from "react";
import Person from "./Person";
import "./ChatMessages.css";
import SingleChat from "./SingleChat";

const ChatMessages = () => {
  return (
    <div className='div'>
      <SingleChat />
      <SingleChat />
    </div>
  );
};

export default ChatMessages;
