import React, { useCallback, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

  // const uploadImage = (file) => {
  //   console.log(file);
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   try {
  //     const analyze_response = axios
  //       .post("http://127.0.0.1:5000/test_pic", formData)
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="App">
      <Router>
        <div className="Background">
          <NavBar />
        </div>
        <Switch>
          <Route path="/welcome" exact></Route>
          <Route path="/classifier" exact>
            <Classifier />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
