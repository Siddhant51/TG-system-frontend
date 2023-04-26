import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../post.css";
const BASE_URI = "http://localhost:3000";

const Users = ({ className, groupName }) => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const Create = async (e) => {
    e.preventDefault();
    try {
      if (name && email && password && role && groupName && className) {
        await axios.post(`${BASE_URI}/setuser`, {
          name,
          email,
          password,
          role,
          className,
          groupName,
        });
        console.log("User created successful");
        setName("");
        setEmail("");
        setPassword("");
        setRole("");
      } else {
        alert("Please fill all fields");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .post(`${BASE_URI}/getusers`, { className, groupName })
      .then((res) => {
        setUsers(res.data.users.reverse());
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name..."
          ></input>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email..."
          ></input>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password..."
          ></input>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Role..."
          ></input>
          <button className="btn" onClick={Create}>
            Create
          </button>
        </div>
      </div>

      <div className="body">
        {users.map((post) => (
          <div className="post" key={post._id}>
            <div className="content">
              <p>{post.name}</p>
              <p>{post.email}</p>
              <p>{post.password}</p>
              <p>{post.role}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
