import React from "react";
import "./sidebar.css";

const Sidebar = ({
  user,
  userRole,
  setSwitcher,
  setLoginUser,
  showSidebar,
  setShowSidebar,
}) => {
  return (
    <>
      <div className={`sidebar ${showSidebar ? "show-sidebar" : ""}`}>
        <div
          className="profile"
          onClick={() => {
            setSwitcher("profile");
            setShowSidebar(!showSidebar);
          }}
        >
          <div className="img-container">
            <img src={user.profilePic} alt="Profile"></img>
          </div>
          <h2>{user.name}</h2>
        </div>

        <div
          className="option"
          onClick={() => {
            setSwitcher("userposts");
            setShowSidebar(!showSidebar);
          }}
        >
          <p>Home</p>
        </div>

        {userRole === "student" ? (
          <>
            <div
              className="option"
              onClick={() => {
                setSwitcher("personalinfo");
                setShowSidebar(!showSidebar);
              }}
            >
              <p>Personal Info</p>
            </div>
            <div
              className="option"
              onClick={() => {
                setSwitcher("achievement");
                setShowSidebar(!showSidebar);
              }}
            >
              <p>Achievement</p>
            </div>
          </>
        ) : userRole === "teacher" ? (
          <div
            className="option"
            onClick={() => {
              setSwitcher("attendance");
              setShowSidebar(!showSidebar);
            }}
          >
            <p>Attendance</p>
          </div>
        ) : null}

        <div
          className="option"
          onClick={() => {
            setShowSidebar(!showSidebar);
            localStorage.removeItem("userData");
            setLoginUser("");
            console.log("Logged-out successfully");
          }}
        >
          Logout
        </div>
      </div>
    </>
  );
};

export default Sidebar;
