import React, { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./Authentication.css";
import { useNavigate } from "react-router-dom";
import { ContextAuth } from "../context/AuthContex";
import council from "../assets/council.jpeg";

const Authentication = () => {
  const { isStudent, details, handleDetails } = useContext(ContextAuth);
  const [isSignUp, setIsSignUp] = useState(true);
  const [eRRor, seteRRor] = useState(false);
  const [suscriber, setSuscriber] = useState({
    name: "",
    password: "",
    studentid: "",
    staffid: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setSuscriber({ ...suscriber, [e.target.name]: e.target.value });
  };

  // switching between the sign up and login forms
  const handleSwitch = () => {
    setIsSignUp(!isSignUp);
  };

  // signing up for a new account
  const handleSubmitSignUP = (e) => {
    e.preventDefault();
    navigate("/setprofile");
  };

  // submission for a login
  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await signInWithEmailAndPassword(
        auth,
        details.email,
        details.password
      );

      navigate("/");
    } catch (error) {
      seteRRor(true);
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className='full-page'>
        <div className='main-form'>
          <div className='login-page'>
            <p className='login-title'>{isSignUp ? "Sign Up" : "Sign In"}</p>

            {isStudent ? (
              <form
                className='forms'
                onSubmit={isSignUp ? handleSubmitSignUP : handleSubmitLogin}
              >
                <div className='login-forms'>
                  <input
                    className='input-btn'
                    type='text'
                    id='displayName'
                    placeholder='UserName'
                    name='username'
                    value={details.username}
                    onChange={handleDetails}
                  />
                </div>

                {isSignUp && (
                  <div className='login-forms'>
                    <input
                      className='input-btn'
                      type='text'
                      id='studentid'
                      name='studentid'
                      placeholder=' student id'
                      value={details.studentid}
                      onChange={handleDetails}
                    />
                  </div>
                )}

                <div className='login-forms'>
                  <input
                    className='input-btn'
                    type='email'
                    id='email'
                    placeholder='example@gmail.com'
                    name='email'
                    value={details.email}
                    onChange={handleDetails}
                  />
                </div>
                <div className='login-forms'>
                  <input
                    className='input-btn'
                    type='password'
                    id='password'
                    placeholder='password'
                    name='password'
                    value={details.password}
                    onChange={handleDetails}
                  />
                </div>

                {isSignUp ? (
                  <button disabled={loading} type='submit' className='btn'>
                    {loading ? "Loading..." : "sign up"}
                  </button>
                ) : (
                  <button disabled={loading} type='submit' className='btn'>
                    {loading ? "Loading..." : "sign in"}
                  </button>
                )}

                {eRRor && <p>something went wrong...</p>}
              </form>
            ) : (
              <form
                className='forms'
                onSubmit={isSignUp ? handleSubmitSignUP : handleSubmitLogin}
              >
                <div className='login-forms'>
                  <input
                    className='input-btn'
                    type='text'
                    id='displayName'
                    placeholder='UserName'
                    name='username'
                    value={details.username}
                    onChange={handleDetails}
                  />
                </div>

                {isSignUp && (
                  <div className='login-forms'>
                    <input
                      className='input-btn'
                      type='text'
                      id='staffid'
                      name='staffid'
                      placeholder=' staffid'
                      value={details.staffid}
                      onChange={handleDetails}
                    />
                  </div>
                )}

                <div className='login-forms'>
                  <input
                    className='input-btn'
                    type='email'
                    id='email'
                    placeholder='example@gmail.com'
                    name='email'
                    value={details.email}
                    onChange={handleDetails}
                  />
                </div>
                <div className='login-forms'>
                  <input
                    className='input-btn'
                    type='password'
                    id='password'
                    placeholder='password'
                    name='password'
                    value={details.password}
                    onChange={handleDetails}
                  />
                </div>

                {isSignUp ? (
                  <button disabled={loading} type='submit' className='btn'>
                    {loading ? "Loading..." : "sign up"}
                  </button>
                ) : (
                  <button disabled={loading} type='submit' className='btn'>
                    {loading ? "Loading..." : "sign in"}
                  </button>
                )}

                {eRRor && <p>something went wrong...</p>}
              </form>
            )}

            <div className='bottomline-info'>
              <p className='info'>
                {isSignUp
                  ? "Already have an account?"
                  : "Don't have an account?"}
                <span onClick={handleSwitch} style={{ cursor: "pointer" }}>
                  {isSignUp ? " Login" : " Sign Up"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
