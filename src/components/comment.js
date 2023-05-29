import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./comment.css";
const BASE_URI = "http://localhost:3000";

const Comment = ({ postId, userId, userClass, userGroup }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const Create = async (e) => {
    e.preventDefault();
    try {
      if (comment && postId && userId && userClass && userGroup) {
        await axios.post(`${BASE_URI}/setcomment`, {
          userClass,
          userGroup,
          comment,
          postId,
          userId,
        });
        console.log("Commented successful");
        setComment("");
      } else {
        alert("Please fill all fields");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .post(`${BASE_URI}/getcomments`, {
        postId,
        userClass,
        userGroup,
      })
      .then((res) => {
        setComments(res.data.comments.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }, [Create]);

  return (
    <div className="modal">
      {/* <div>
        <div onClick={() => close()}>x</div>
      </div> */}
      <div className="form2">
        <textarea
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter comment here..."
        ></textarea>
        <div className="btn" onClick={Create}>
          Comment
        </div>
      </div>

      {comments.map((post) => (
        <div className="comment" key={post._id}>
          <h4>{post.user.name} </h4>
          <div className="text">{post.comment}</div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
