import React, { useCallback, useState } from "react";
import "./App.css";
import Classifier from "./components/Classifier.jsx";
import Dropzone from "./components/DropZone.jsx";
import ImageList from "./components/ImageList.jsx";
import NavBar from "./components/NavBar.jsx";
import CameraFeed from "./components/camera-feed.jsx";
import cuid from "cuid";
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);

  const uploadImage = (file) => {
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const analyze_response = axios
        .post("http://127.0.0.1:5000/test_pic", formData)
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <div className="Background">
        {" "}
        <NavBar />
      </div>
      <div>
        {/* <CameraFeed sendFile={uploadImage} /> */}
        <Classifier />
      </div>
    </div>
  );
}

export default App;
