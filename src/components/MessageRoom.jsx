import React, { createContext, useContext, useState } from "react";
import {} from "react-icons";
import "./messageRoom.css";
import {
  FaPaperclip,
  FaUser,
  FaVideo,
  FaEllipsisV,
  FaSmile,
  FaMicrophone,
  FaPaperPlane,
} from "react-icons/fa";
import ChatMessages from "./ChatMessages";
import BlogPosts from "./Blogs";
import { ContextAuth } from "../context/AuthContex";

const MessageRoom = () => {
  const { isSwitch } = useContext(ContextAuth);
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    // const { uid, displayName, photoURL } = auth.currentUser;
    // await addDoc(collection(db, "messages"), {
    //   text: message,
    //   name: displayName,
    //   avatar: photoURL,
    //   createdAt: serverTimestamp(),
    //   uid,
    // });
    // setMessage("");
  };

  return (
    <div className='main-message-room'>
      <div className='message-navbar'>
        <div className='user-side'>
          <p className='username'>John</p>
        </div>
        <div className='icon-side'>
          <FaVideo cursor='pointer' />
          <FaUser cursor='pointer' />
          <FaEllipsisV cursor='pointer' />
        </div>
      </div>
      <div className='message-body'>
        {isSwitch ? <ChatMessages /> : <BlogPosts />}
      </div>
      <div className='message-input'>
        <form className='keybd-form'>
          <div className='typeside-icon'>
            <FaSmile className='smile' cursor='pointer' />
            <input
              type='text'
              placeholder='Type something...'
              className='message-txt'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className='text-icons'>
            <FaPaperclip cursor='pointer' />
            <FaMicrophone cursor='pointer' />
          </div>
          <div className='send text-icons'>
            <button
              type='submit'
              style={{ border: "none", fontSize: "1.3rem" }}
            >
              <FaPaperPlane color='green' cursor='pointer' />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessageRoom;
