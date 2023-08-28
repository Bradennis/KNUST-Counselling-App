import React, { useContext } from "react";
import logo from "../assets/KnustLogo.jpeg";
import { FaUserGraduate } from "react-icons/fa";
import "./welcome.css";
import { ContextAuth } from "../context/AuthContex";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const { handleStudentStatus, handleAdminStatus } = useContext(ContextAuth);

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/login");
  };
  return (
    <div className='welcome-main'>
      <div className='knust-logo'>
        <img src={logo} alt='' />
      </div>

      <p className='welcome-txt'>
        Welcome to Knust Counselling Center, Your Safe Haven
      </p>

      <div className='img-circles'>
        <div className='status'>
          <FaUserGraduate size='65' color='green' />
          <p className='status-desc'>Student</p>
          <h4 className='h4'>Proceed to your dashboard</h4>

          <form onSubmit={handleSubmit}>
            <button type='submit' className='btn' onClick={handleStudentStatus}>
              Click here
            </button>
          </form>
        </div>

        <div className='status'>
          <FaUserGraduate size='65' color='green' />
          <p className='status-desc'>Councillor</p>
          <h4 className='h4'>Proceed to your dashboard</h4>

          <form onSubmit={handleSubmit}>
            <button type='submit' className='btn' onClick={handleAdminStatus}>
              Click here
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
