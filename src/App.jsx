import React, { useContext, useEffect, useState } from "react";
import Authentication from "./pages/Authentication";
import Chatroom from "./pages/Chatroom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ContextAuth } from "./context/AuthContex";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import WelcomePage from "./pages/WelcomePage";
import SetProfile from "./pages/SetProfile";

const App = () => {
  const { currentUser, setCurrentUser } = useContext(ContextAuth);

  useEffect(() => {
    const cleanUp = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      cleanUp();
    };
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route
              index
              element={
                currentUser ? (
                  <Chatroom currentUser={currentUser} />
                ) : (
                  <WelcomePage />
                )
              }
            />
            <Route path='login' element={<Authentication />} />
            <Route path='welcome' element={<WelcomePage />} />
            <Route path='setprofile' element={<SetProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
