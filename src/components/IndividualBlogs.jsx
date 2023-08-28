import React from "react";
import Person from "./Person";
import { FaComment, FaEllipsisV, FaThumbsUp } from "react-icons/fa";
import "./individualBlogs.css";
import braDennis from "../assets/Bra Dennis.jpg";

const IndividualBlogs = () => {
  return (
    <div className='blogs-main'>
      <div className='blogs-header'>
        <div className='single-chat-bot'>
          <Person />
        </div>
        <div className='chat-time'>just now</div>
        <FaEllipsisV cursor='pointer' />
      </div>

      <div className='posts'>
        <div className='blog-txts'>
          <div className='blog-img' style={{ width: "100px" }}>
            <img src='' alt='' />
          </div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          libero magni, qui ut voluptates est, vero, delectus assumenda
          molestiae a porro eos rerum obcaecati ducimus similique deserunt
          aliquam laboriosam sed quaerat exercitationem nobis reiciendis ipsum
          officia. Ducimus vero, odio eum possimus ratione quisquam? Nostrum a
          quod quam explicabo odio maiores.
        </div>
      </div>

      <hr />
      <div className='reaction-area'>
        <div className='like'>
          <div className='count'>
            <FaThumbsUp color='gray' />
            <span style={{ fontSize: "1rem", color: "black" }}>12</span>
          </div>
          <p className='like-txt'>like</p>
        </div>

        <div className='comment'>
          <div className='count'>
            <FaComment color='gray' />
            <span style={{ fontSize: "1rem", color: "black" }}>12</span>
          </div>
          <p className='comment-txt'>comment</p>
        </div>
      </div>
    </div>
  );
};

export default IndividualBlogs;
