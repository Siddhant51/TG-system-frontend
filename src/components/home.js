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

  return userRole === "teacher" ? (
    <>
      <Topbar />

      <div className="display">
        <div className="side-div">
          <Sidebar
            user={user}
            switcher={switcher}
            setSwitcher={setSwitcher}
            setLoginUser={setLoginUser}
          />
        </div>

        <div className="main">
          {switcher === "profile" ? (
            <Profile user={user} userId={userId} setLoginUser={setLoginUser} />
          ) : (
            <TeacherFeed
              userId={userId}
              userClass={userClass}
              userGroup={userGroup}
            />
          )}
        </div>
      </div>
    </>
  ) : userRole === "admin" ? (
    <>
      <Topbar />

      <div className="display">
        <div className="side-div">
          <Sidebar
            user={user}
            switcher={switcher}
            setSwitcher={setSwitcher}
            setLoginUser={setLoginUser}
          />
        </div>

        <div className="main">
          {switcher === "profile" ? (
            <Profile user={user} userId={userId} setLoginUser={setLoginUser} />
          ) : switcher === "groups" ? (
            <Groups
              classId={classId}
              setClassName={setClassName}
              setGroupName={setGroupName}
              setSwitcher={setSwitcher}
            />
          ) : switcher === "users" ? (
            <Users className={className} groupName={groupName} />
          ) : (
            <Classes setClassId={setClassId} setSwitcher={setSwitcher} />
          )}
        </div>
      </div>
    </>
  ) : (
    <>
      <Topbar />

      <div className="display">
        <div className="side-div">
          <Sidebar
            user={user}
            switcher={switcher}
            setSwitcher={setSwitcher}
            setLoginUser={setLoginUser}
          />
        </div>

        <div className="main">
          {switcher === "profile" ? (
            <Profile user={user} userId={userId} setLoginUser={setLoginUser} />
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
