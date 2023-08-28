// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import Person from "./Person";
// import "./sidebar.css";
// import { collection, query, where, getDocs } from "firebase/firestore";
// import { db } from "../firebase";

// const SearchBar = () => {
//   const [username, setUsername] = useState("");
//   const [user, setUser] = useState(null);
//   const [eRR, seteRR] = useState(false);

//   const handleSearch = async () => {
//     const admin = query(
//       collection(db, "users"),
//       where("displayName", "==", username)
//     );

//     console.log(admin);
//   };

//   const handleKey = (e) => {
//     e.code === "Enter" && handleSearch();
//   };
//   return (
//     <div>
//       <div className='search'>
//         <div className='form-search'>
//           <div className='search-box'>
//             <FaSearch className='search-icon' />
//             <input
//               type='text'
//               placeholder='search'
//               className='input'
//               onKeyDown={handleKey}
//               onChange={(e) => {
//                 setUsername(e.target.value);
//               }}
//             />
//           </div>
//         </div>
//         {/* {eRR && <span> user not found</span>}

//         {user && (
//           <div className='search-person'>
//             <Person />
//             <p>{user.uid}</p>
//           </div>
//         )} */}
//       </div>
//     </div>
//   );
// };

// export default SearchBar;
