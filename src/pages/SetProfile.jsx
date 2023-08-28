import React, { useContext, useState } from "react";
import "./setProfile.css";
import { FaImage } from "react-icons/fa";
import { ContextAuth } from "../context/AuthContex";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { auth, db, storage } from "../firebase";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

const SetProfile = () => {
  const { details, image, handleImage, setDetails, handleDetails } =
    useContext(ContextAuth);
  const navigate = useNavigate();

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  // handle signUp

  const handleSubmitSignUP = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await createUserWithEmailAndPassword(
        auth,
        details.email,
        details.password
      );
      const storageRef = ref(storage, details.username);

      // const uploadTask = uploadBytesResumable(storageRef, image);

      // uploadTask.on(
      //   (error) => {
      //     setErr(true);
      //   },
      //   () => {
      //     getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      //       await updateProfile(res.user, {
      //         displayName: details.username,
      //         photoURL: downloadURL,
      //       });
      const displayName = details.username;

      updateProfile(res.user, {
        displayName: details.username,
      });

      console.log(res.user.displayName);

      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName: details.username,
        fullname: details.fullname,
        year: details.year,
        phone: details.phone,
        password: details.password,
        programme: details.programme,
        email: details.email,
        studentid: details.studentid,
        staffid: details.staffid,
        // image: downloadURL,
      });

      await setDoc(doc(db, "variousChats", res.user.uid), {});
      setLoading(false);
      navigate("/");

      setDetails(" ");
      //     });
      //   }
      // );
    } catch (error) {
      setErr(true);
      console.log(error);
      setLoading(false);
    }
  };
  // end signUp handle

  return (
    <div className='profile-page'>
      <p className='profile-title'>Hi! Help us set your dashboard</p>

      <form className='set-profile' onSubmit={handleSubmitSignUP}>
        <div className='login-forms profile-login-forms'>
          <p className='txt'>Add a picture</p>
          <div className='profile_img'>
            <label htmlFor='image'>
              <FaImage
                size='40px'
                className='fa-image'
                cursor='pointer'
                color='lightgray'
              />
              <span
                className='img-span'
                style={{
                  fontSize: "1.4rem",
                  color: "lightgray",
                }}
              >
                choose image
              </span>
            </label>
            <input
              className='profile-input'
              type='file'
              id='image'
              placeholder='choose image'
              name='image'
              value={image}
              onChange={handleImage}
              style={{ display: "none" }}
            />
          </div>
        </div>

        <div className='profile-forms'>
          <p className='txt'>Add your credentials</p>

          <div className='name-year'>
            <div className='profile_name'>
              <label htmlFor='fullname' className='label'>
                Full Name
              </label>
              <input
                className='profile-input fullname'
                type='text'
                id='fullname'
                placeholder='fullname'
                name='fullname'
                value={details.fullname}
                onChange={handleDetails}
              />
            </div>
            <div className='profile_name'>
              <label htmlFor='year' className='label'>
                Year
              </label>
              <input
                className='profile-input'
                type='text'
                id='year'
                placeholder='Level 100'
                name='year'
                value={details.year}
                onChange={handleDetails}
              />
            </div>
          </div>

          <div className='profile_name'>
            <label htmlFor='programme' className='label'>
              Programme
            </label>
            <input
              className='profile-input'
              type='text'
              id='programme'
              placeholder='programme of study'
              name='programme'
              value={details.programme}
              onChange={handleDetails}
            />
          </div>

          <div className='profile_name'>
            <label htmlFor='phone' className='label'>
              Phone Number
            </label>
            <input
              className='profile-input'
              type='text'
              id='phone'
              placeholder='Phone Number'
              name='phone'
              value={details.phone}
              onChange={handleDetails}
            />
          </div>
        </div>
        <button disabled={loading} type='submit' className='btn profile_btn'>
          {loading ? "Loading..." : "Finish"}
        </button>

        {err && <p>something went wrong...</p>}
      </form>
    </div>
  );
};

export default SetProfile;
