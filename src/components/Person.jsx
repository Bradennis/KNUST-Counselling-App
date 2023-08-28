import React, { useContext } from "react";
import bradennis from "../assets/Bra Dennis.jpg";
import "./person.css";
import { ContextAuth } from "../context/AuthContex";

const Person = ({ username }) => {
  const { currentUser } = useContext(ContextAuth);

  return (
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
        <div className='txt-category '>
          <p className='username '>{username}</p>
        </div>
      </div>
    </div>
  );
};

export default Person;
