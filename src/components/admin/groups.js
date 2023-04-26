import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../post.css";
const BASE_URI = "http://localhost:3000";

const Groups = ({ classId, setClassName, setGroupName, setSwitcher }) => {
  const [groups, setGroups] = useState([]);
  const [groupName, setGroupname] = useState("");

  const Create = async (e) => {
    e.preventDefault();
    try {
      if (groupName && classId) {
        await axios.post(`${BASE_URI}/setgroup`, { groupName, classId });
        console.log("Group created successful");
        setGroupname("");
      } else {
        alert("Please fill all fields");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .post(`${BASE_URI}/getgroups`, { classId })
      .then((res) => {
        setGroups(res.data.groups.reverse());
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
            value={groupName}
            onChange={(e) => setGroupname(e.target.value)}
            placeholder="Group Name..."
          ></input>
          <button className="btn" onClick={Create}>
            Create
          </button>
        </div>
      </div>

      <div className="body">
        {groups.map((post) => (
          <div
            className="post"
            key={post._id}
            onClick={() => {
              setClassName(post.class.name);
              setGroupName(post.name);
              setSwitcher("users");
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

export default Groups;
