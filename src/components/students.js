import { useEffect, useState } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import StudentData from "./studentData";
const BASE_URI = "http://localhost:3000";

const Students = ({ userClass, userGroup }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .post(`${BASE_URI}/getstudents`, {
        userClass,
        userGroup,
      })
      .then((res) => {
        setStudents(res.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {students.map((student) => (
        <div className="comment" key={student._id}>
          <Popup
            trigger={
              <h4>
                {student.name} {student.rollno}{" "}
              </h4>
            }
            modal
            nested
            contentStyle={{
              borderRadius: "10px",
              backgroundColor: "azure",
              fontFamily: "sans-serif",
              paddingLeft: "10px",
              paddingRight: "10px",
              width: "90%",
            }}
            className="popup-content"
          >
            <StudentData studentId={student._id} />
          </Popup>
        </div>
      ))}
    </>
  );
};

export default Students;
