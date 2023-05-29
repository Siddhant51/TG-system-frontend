import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const BASE_URI = "http://localhost:3000";

const StudentData = ({ studentId }) => {
  const [info, setInfo] = useState([]);
  const [achievement, setAchievement] = useState([]);

  useEffect(() => {
    axios
      .post(`${BASE_URI}/getstudentdata`, {
        studentId,
      })
      .then((res) => {
        setInfo(res.data.info);
        setAchievement(res.data.achievement);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="modal">
      {info.map((student) => (
        <div className="comment" key={student._id}>
          <h4>{student.name} </h4>
          <h4>{student.rollno} </h4>
        </div>
      ))}
      {achievement.map((student) => (
        <div className="comment" key={student._id}>
          <iframe width="100%" height="500px" src={student.pdf}></iframe>
          {/* {student.pdf} */}
        </div>
      ))}
    </div>
  );
};

export default StudentData;
