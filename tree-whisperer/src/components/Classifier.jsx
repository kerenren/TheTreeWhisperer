import React, { useState } from "react";
import axios from "axios";

const Classifier = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadBtn, setuploadBtn] = useState(true);

  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setuploadBtn(false);
  };

  const fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("image", selectedFile, selectedFile.name);
    axios.post("http://127.0.0.1:5000/", fd).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="App">
      <input type="file" onChange={(e) => fileSelectedHandler(e)} />
      <button
        disabled={uploadBtn}
        type="submit"
        onClick={() => fileUploadHandler()}
      >
        Upload
      </button>
    </div>
  );
};

export default Classifier;
