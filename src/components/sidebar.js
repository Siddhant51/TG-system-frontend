import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ user, switcher, setSwitcher, setLoginUser }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="profile" onClick={() => setSwitcher("profile")}>
        <div className="img-container">
          <img src={user.profilePic} alt="Profile pic"></img>
        </div>
        <h2>{user.name}</h2>
      </div>

      <div className="options">
        <div className="option" onClick={() => setSwitcher("userposts")}>
          <p>Feed</p>
        </div>

        <div className="option" onClick={() => setSwitcher("attendance")}>
          <p>Attendance</p>
        </div>

        <div
          className="option"
          onClick={() => {
            localStorage.removeItem("userData");
            setLoginUser("");
            console.log("Logged-out successfully");
          }}
        >
          <p>Logout</p>
        </div>
      </div>

      <div className="toggle-btn" onClick={handleToggle}>
        <button
          className="toggle-button"
          aria-label={isOpen ? "Close Sidebar" : "Open Sidebar"}
        >
          {isOpen ? "Close" : "Open"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
