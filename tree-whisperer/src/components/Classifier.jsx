import React, { useState } from "react";
import axios from "axios";

const Classifier = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadBtn, setuploadBtn] = useState(true);
  const [img, setImg] = useState(null);
  const [response, setResponse] = useState(null);

  const fileSelectedHandler = (event) => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
    setuploadBtn(false);
    setImg(URL.createObjectURL(event.target.files[0]));
  };

  const fileUploadHandler = async () => {
    const fd = new FormData();
    fd.append("image", selectedFile, selectedFile.name);
    try {
      const analyze_response = await axios
        .post("http://127.0.0.1:5000/analyze_leaf", fd)
        .then((data) => {
          setResponse(data.data.status);
        });
    } catch (error) {
      console.error(error);
    }
  };

  let result;
  if (response === "sick") {
    result = (
      <div style={{ display: "flex" }}>
        <div class="alert alert-danger" role="alert">
          The tree is sick !
        </div>
        <div>
          <img
            src={"https://media.sciencephoto.com/image/c0419912/800wm"}
          ></img>
        </div>
      </div>
    );
  } else if (response === "healthy") {
    result = (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "4px solid red",
        }}
      >
        <div class="alert alert-success" role="alert">
          The tree is healthy !
        </div>
        <div>
          <img
            style={{ height: "40vh" }}
            src={
              "https://webneel.com/daily/sites/default/files/images/daily/06-2016/6-tree-drawing-by-serhii-liakhevych.preview.jpg"
            }
          ></img>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="image-div">
          <img style={{ height: "100%" }} src={img} />
        </div>
        <div className="buttons" style={{ marginBottom: "2rem" }}>
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
          <div style={{ display: "inline-block" }}>
            <button
              class="btn btn-success"
              style={{ marginLeft: "0.5rem" }}
              disabled={uploadBtn}
              type="submit"
              onClick={() => fileUploadHandler()}
            >
              Analyze
            </button>
            {result}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classifier;
