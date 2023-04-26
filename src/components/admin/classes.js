import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../post.css";
const BASE_URI = "http://localhost:3000";

const Classes = ({ setClassId, setSwitcher }) => {
  const [classes, setClasses] = useState([]);
  const [className, setClassName] = useState("");

  const Create = async (e) => {
    e.preventDefault();
    try {
      if (className) {
        await axios.post(`${BASE_URI}/setclass`, { className });
        console.log("Class created successful");
        setClassName("");
      } else {
        alert("Please fill all fields");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .post(`${BASE_URI}/getclasses`)
      .then((res) => {
        setClasses(res.data.classes.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }, [Create]);

  return (
    <>
      <div className="topbar">
        <div className="form">
          <input
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            placeholder="Class Name..."
          ></input>
          <button className="btn" onClick={Create}>
            Create
          </button>
        </div>
      </div>

      <div className="body">
        {classes.map((post) => (
          <div
            className="post"
            key={post._id}
            onClick={() => {
              setClassId(post._id);
              setSwitcher("groups");
            }}
          >
            <div className="content">
              <p>{post.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Classes;
