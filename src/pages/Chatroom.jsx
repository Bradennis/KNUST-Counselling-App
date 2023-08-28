import React, { useContext } from "react";
import "./chatroom.css";
import Sidebar from "../components/Sidebar";
import MessageRoom from "../components/MessageRoom";
import UserInfoPage from "../components/UserInfoPage";
import { FaBars, FaBell, FaHome, FaReadme, FaUser } from "react-icons/fa";

const Chatroom = () => {
  const name = "bra Teye";
  return (
    <div className='main-chat'>
      {/* <div className='dashboard'>
        <div className='home'>
          <FaHome />
          <p> Home</p>
        </div>
        <div className='home'>
          <FaReadme />
          <p>Chat Room</p>
        </div>
        <div className='home'>
          <FaBell />
          <p>User Profile</p>
        </div>
      </div> */}
      <div className='chat-divisions'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='message-room'>
          <MessageRoom />
        </div>
        <div className='info-room'>
          <UserInfoPage />
        </div>
      </div>
    </div>
  );
};

export default Chatroom;
