import React, { useState, useEffect } from "react";

const Bard = () => {
  const [file, setFile] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const content = reader.result;
        const viewer = document.getElementById("viewer");
        viewer.src = URL.createObjectURL(file);
        viewer.onload = () => {
          URL.revokeObjectURL(viewer.src);
        };
      };
      reader.readAsArrayBuffer(file);
    }
  }, [file]);

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <div id="viewer"></div>
    </div>
  );
};

export default Bard;
