import React from "react";
import { useState } from "react";
import "./home.css";
import Sidebar from "./sidebar";
import Profile from "./profile";
import StudentFeed from "./student/studentFeed";
import TeacherFeed from "./teacher/teacherFeed";
import Classes from "./admin/classes";
import Groups from "./admin/groups";
import Users from "./admin/users";
import Topbar from "./topbar";
import Attendance from "./attendance";
import Form from "./form";
import Achievement from "./achievement";

const Home = ({
  user,
  userId,
  userRole,
  userClass,
  userGroup,
  setLoginUser,
}) => {
  const [switcher, setSwitcher] = useState("posts");
  const [classId, setClassId] = useState("");
  const [className, setClassName] = useState("");
  const [groupName, setGroupName] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Topbar />

      <div className="display">
        <div
          className="toggle-button"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <span></span>
          <span></span>
          <span></span>
          <h1>=</h1>
        </div>

        <Sidebar
          user={user}
          switcher={switcher}
          setSwitcher={setSwitcher}
          userRole={userRole}
          setLoginUser={setLoginUser}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />

        <div className="main">
          {switcher === "profile" ? (
            <Profile user={user} userId={userId} setLoginUser={setLoginUser} />
          ) : switcher === "attendance" ? (
            <Attendance
              userId={userId}
              userClass={userClass}
              userGroup={userGroup}
            />
          ) : userRole === "teacher" ? (
            <TeacherFeed
              userId={userId}
              userClass={userClass}
              userGroup={userGroup}
            />
          ) : userRole === "admin" ? (
            <Classes setClassId={setClassId} setSwitcher={setSwitcher} />
          ) : switcher === "groups" ? (
            <Groups
              classId={classId}
              setClassName={setClassName}
              setGroupName={setGroupName}
              setSwitcher={setSwitcher}
            />
          ) : switcher === "users" ? (
            <Users className={className} groupName={groupName} />
          ) : switcher === "personalinfo" ? (
            <Form userId={userId} userClass={userClass} userGroup={userGroup} />
          ) : switcher === "achievement" ? (
            <Achievement
              userId={userId}
              userClass={userClass}
              userGroup={userGroup}
            />
          ) : (
            <StudentFeed
              userId={userId}
              userClass={userClass}
              userGroup={userGroup}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
