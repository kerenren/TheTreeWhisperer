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
      const analyze_response = await axios.post(
        "http://127.0.0.1:5000/analyze_leaf",
        fd
      );
      console.log(analyze_response);
      setResponse(analyze_response.statusText);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="image-div">
          <img style={{ height: "100%" }} src={img} />
        </div>
        <div className="buttons">
          <div
            style={{
              display: "inline",
              paddingRight: "4rem",
            }}
          >
            <input
              style={{ width: "120%" }}
              type="file"
              onChange={(e) => fileSelectedHandler(e)}
            />
          </div>
          <div>
            <button
              disabled={uploadBtn}
              type="submit"
              onClick={() => fileUploadHandler()}
            >
              Analyze
            </button>
          </div>
        </div>
      </div>
      {response ? <div>{response}</div> : null}
    </div>
  );
};

export default Classifier;
