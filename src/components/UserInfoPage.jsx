import React, { useState } from "react";
import Person from "./Person";
import "./userInfo.css";

import bradennis from "../assets/Bra Dennis.jpg";

const UserInfoPage = () => {
  const [isClicked, setIsClicked] = useState(true);

  const handleSwitchPersonal = () => {
    setIsClicked(true);
  };

  const handleSwitchContact = () => {
    setIsClicked(false);
  };
  return (
    <div className='gen-profile'>
      <div className='profile'>
        <div className='person-main'>
          <div className='person'>
            <img
              src={bradennis}
              alt=''
              style={{
                width: "30px",
                height: "30px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
            <div className='exported-txt '>
              <p className='username-profile '>John </p>
              <p className='message-profile'>last seen at 6:30 pm</p>
            </div>
          </div>
        </div>
      </div>
      <div className='contact-detail'>
        <div className='bio-heading'>Bio</div>
        <div className='bio-btns'>
          <button
            onClick={handleSwitchPersonal}
            className={isClicked ? "child-btn-visited" : "child-btn"}
          >
            Personal
          </button>
          <button
            onClick={handleSwitchContact}
            className={!isClicked ? "child-btn-visited" : "child-btn"}
          >
            Contact
          </button>
        </div>

        {isClicked ? (
          <div className='bio-category'>
            <div className='personal'>
              <div className='header'>
                <p className='header-txt'>Full Name</p>
                <p className='real-txt'>Boye Doe John</p>
              </div>
              <hr className='hr' />
              <div className='header'>
                <p className='header-txt'>Programme of Study</p>
                <p className='real-txt'>Bsc. computer Science</p>
              </div>

              <hr className='hr' />

              <div className='header'>
                <p className='header-txt'>year</p>
                <p className='real-txt'>3</p>
              </div>

              <hr className='hr' />

              <div className='header'>
                <p className='header-txt'>REligious affiliation</p>
                <p className='real-txt'>Christian</p>
              </div>
            </div>
            <div className='contacts'></div>
          </div>
        ) : (
          <div className='bio-category'>
            <div className='personal'>
              <div className='header'>
                <p className='header-txt'>Student ID</p>
                <p className='real-txt'>20111234</p>
              </div>
              <hr className='hr' />
              <div className='header'>
                <p className='header-txt'>Tel</p>
                <p className='real-txt'>0501673421</p>
              </div>
              <hr className='hr' />

              <div className='header'>
                <p className='header-txt'>E-mail</p>
                <p className='real-txt'>brahodt12@outlook.com</p>
              </div>

              <hr className='hr' />

              <div className='header'>
                <p className='header-txt'>Closest Person of Contact</p>
                <p className='real-txt'>Amadiogba Ogbanjele</p>
              </div>
              <hr className='hr' />

              <div className='header'>
                <p className='header-txt'>Contact</p>
                <p className='real-txt'>0245672341</p>
              </div>
            </div>
            <div className='contacts'></div>
          </div>
        )}
      </div>
      <div className='appointment'>
        <p className='appointment-heading'>Book an Appointment</p>

        <p className='next'>
          click <span>next</span> to continue
        </p>
      </div>
    </div>
  );
};

export default UserInfoPage;
