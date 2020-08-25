import React, { useCallback, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Classifier from "./components/Classifier.jsx";
import NavBar from "./components/NavBar.jsx";
import cuid from "cuid";
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);

  return (
    <div className="App">
      <Router>
        <div className="Background">
          <NavBar />
        </div>
        <Switch>
          <Route path="/" exact></Route>
          <Route path="/classifier" exact>
            <Classifier />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
