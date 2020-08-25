import React, { useState } from "react";
import axios from "axios";

const Classifier = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadBtn, setuploadBtn] = useState(true);
  const [img, setImg] = useState(null);
  const [response, setResponse] = useState(null);

  const fileSelectedHandler = (event) => {
    console.log(event.target.files[0].name);
    setSelectedFile(event.target.files[0]);
    setuploadBtn(false);
    setImg(URL.createObjectURL(event.target.files[0]));
  };

  const fileUploadHandler = async () => {
    const fd = new FormData();
    fd.append("image", selectedFile, selectedFile.name);
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/upload_leaf",
        fd
      );
      const analyze_response = await axios.post(
        "http://127.0.0.1:5000/analyze_leaf",
        selectedFile
      );
      setResponse(analyze_response.statusText);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="image-div">
          <img src={img} />
        </div>
        <div className="buttons">
          <input type="file" onChange={(e) => fileSelectedHandler(e)} />

          <button
            disabled={uploadBtn}
            type="submit"
            onClick={() => fileUploadHandler()}
          >
            Upload
          </button>
        </div>
      </div>
      {response ? <div>{response}</div> : null}
    </div>
  );
};

export default Classifier;
