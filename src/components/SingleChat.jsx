import React from "react";
import "./singlechat.css";
import Person from "./Person";

const SingleChat = () => {
  return (
    <div className='chat-messages sender'>
      <div className='single-chat-bot'>
        <Person />
        <div className='chat-time'>just now</div>
      </div>

      <div className='text-box text-box-sender'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </div>
    </div>
  );
};

export default SingleChat;
