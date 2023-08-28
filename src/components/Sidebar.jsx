import React, { useContext, useEffect, useState } from "react";
import Person from "./Person";
import "./sidebar.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { ContextAuth } from "../context/AuthContex";
import { FaSearch } from "react-icons/fa";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { async } from "@firebase/util";
import { db } from "../firebase";

const Sidebar = () => {
  const friends = [
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "James",
    },
    {
      id: 3,
      name: "Michael",
    },
    {
      id: 4,
      name: "Sam",
    },
    {
      id: 5,
      name: "Sromani",
    },
    {
      id: 6,
      name: "saducees",
    },
    {
      id: 7,
      name: "Abrantie",
    },
    {
      id: 8,
      name: "Kofi",
    },
  ];

  const [dbUsers, setDbuser] = useState([]);

  // const dbU = firebase.firestore();

  const fetch = () => {
    db.collection("users")
      .get()
      .then((snapshot) => {
        if (snapshot.docs.lenght > 0) {
          snapshot.docs.array.forEach((element) => {
            setDbuser((prev) => {
              return [...prev, element.data()];
            });
          });
        }
      });

    console.log(dbUsers);
  };
  const { isSwitch, handleBlogPost } = useContext(ContextAuth);
  const [users, setUsers] = useState(friends);
  const [searchQuery, setSearchQuery] = useState("");

  const dbRef = collection(db, "users");

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDocs(dbRef);

      const finresult = result.docs.map((doc) => ({ ...doc.data() }));
      setDbuser(finresult);
    };

    // const q = query(dbRef, where("displayName", "==", "jakoja"));
    // const unsuscribe = onSnapshot(q, (querysnapshot) => {
    //   let message = {};
    //   querysnapshot.forEach((doc) => {
    //     console.log(doc.data());
    //     message.push({ ...doc.data(), id: doc.id });
    //   });
    //   setDbuser(message);
    // });

    fetchData();
  }, []);

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter users based on the search query
    const filteredUsers = friends.filter((friend) =>
      friend.name.toLowerCase().includes(query.toLowerCase())
    );

    setUsers(filteredUsers);
  };

  console.log(dbUsers.uid);
  return (
    <div className='main-sidebar'>
      <div className='navbar'>
        <h4 className='logo' style={{ fontSize: "1.3rem" }}>
          kcApp
        </h4>
        <div className='logout'>
          <Person username='John' />
          <button
            className='logout-btn'
            onClick={() => {
              signOut(auth);
              console.log("user is logged out");
            }}
          >
            logout
          </button>
        </div>
      </div>
      <div>
        <div className='search'>
          <div className='form-search'>
            <div className='search-box'>
              <FaSearch className='search-icon' />
              <input
                type='text'
                placeholder='search'
                className='input'
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='users-lodge'>
        {users.map((friend) => (
          <div className='users' key={friend.id}>
            <div className='single-user'>
              <Person message='' username={friend.name} time='just now' />
            </div>
          </div>
        ))}
      </div>

      <button className='blogs-btn' onClick={handleBlogPost}>
        Daily Blogs
      </button>
    </div>
  );
};

export default Sidebar;
