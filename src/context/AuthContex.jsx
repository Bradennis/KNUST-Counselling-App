import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const ContextAuth = createContext();

export const ContextAuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");

  const [isStudent, setIsStudent] = useState(true);
  const [isSwitch, setisSwitch] = useState(true);
  let image = "";

  const handleImage = (e) => {
    image = e.target.files[0];
  };

  const [details, setDetails] = useState({
    fullname: " ",
    year: " ",
    phone: " ",
    programme: "",
    name: "",
    password: "",
    studentid: "",
    staffid: "",
    email: "",
  });

  const handleDetails = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleStudentStatus = () => {
    setIsStudent(true);
  };

  const handleAdminStatus = () => {
    setIsStudent(false);
  };
  const handleBlogPost = () => {
    setisSwitch(!isSwitch);
  };

 
  return (
    <ContextAuth.Provider
      value={{
        currentUser,
        setCurrentUser,
        isSwitch,
        handleBlogPost,
        isStudent,
        handleAdminStatus,
        handleStudentStatus,
        details,
        setDetails,
        handleDetails,
        image,
        handleImage,
      }}
    >
      {children}
    </ContextAuth.Provider>
  );
};
