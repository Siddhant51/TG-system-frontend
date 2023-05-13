import React, { useState, useEffect } from "react";
import axios from "axios";
import "reactjs-popup/dist/index.css";

const BASE_URI = "http://localhost:3000";
const YOUR_CLOUDINARY_ID = "dsmdga8vs";
const NAME_OF_UPLOAD_PRESET = "pafh9buy";

const Achievement = ({ userId, userClass, userGroup }) => {
  const [pdfFile, setPdfFile] = useState();
  const [achievementList, setAchievementList] = useState([]);

  const handleFile = (event) => {
    setPdfFile(event.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      if (userId && pdfFile) {
        const data = new FormData();
        data.append("file", pdfFile);
        data.append("upload_preset", NAME_OF_UPLOAD_PRESET);
        data.append("folder", "TGsystem");

        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/${YOUR_CLOUDINARY_ID}/raw/upload`,
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const pdfUrl = res.data.secure_url;
        console.log("1");

        await axios.post(`${BASE_URI}/setachievement`, {
          userClass,
          userGroup,
          pdfUrl,
          userId,
        });
        console.log("3");

        console.log("Achievement uploaded successfully");
        setPdfFile();
      } else {
        alert("Please select a file to upload");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("4");
    axios
      .post(`${BASE_URI}/getachievement`, { userId })
      .then((res) => {
        setAchievementList(res.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pdfFile]);

  return (
    <>
      <div className="topbar">
        <div className="form">
          <input
            type="file"
            name="file"
            onChange={handleFile}
            accept=".pdf"
          ></input>
          <button className="btn" onClick={handleUpload}>
            Upload
          </button>
        </div>
      </div>

      <div className="body">
        {achievementList
          ? achievementList.map((achievement) => (
              <div className="achievement" key={achievement._id}>
                <iframe
                  // src={`https://view.officeapps.live.com/op/embed.aspx?src=${achievement.pdf}`}
                  src={achievement.pdf}
                  width="100%"
                  height="500px"
                ></iframe>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Achievement;
