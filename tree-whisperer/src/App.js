import React, { useCallback, useState } from "react";
import "./App.css";
import Classifier from "./components/Classifier.jsx";
import Dropzone from "./components/DropZone.jsx";
import ImageList from "./components/ImageList.jsx";
import NavBar from "./components/NavBar.jsx";
import cuid from "cuid";

function App() {
  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: cuid(), src: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      console.log(file);
      return file;
    });
  }, []);

  return (
    <div className="App">
      <div className="Background" style={{ border: "7px solid black" }}>
        {" "}
        <NavBar />
      </div>
      <div style={{ border: "5px solid red" }}>
        <Classifier />
      </div>
    </div>
  );
}

export default App;
