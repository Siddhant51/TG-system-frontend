import React, { useState } from "react";

const MyComponent = () => {
  const [fileData, setFileData] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setFileData(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {fileData && (
        <embed
          src={fileData}
          type="application/pdf"
          width="100%"
          height="600px"
        />
      )}
    </div>
  );
};

export default MyComponent;
