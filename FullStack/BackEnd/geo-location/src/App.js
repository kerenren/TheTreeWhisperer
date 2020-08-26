import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import "./App.css";
import Geolocation from "./component/Geolocation";

const App = (props) => {
  const location = { lat: props.lat, lng: props.lng };
  {
    return (
      <div className="App">
        <Geolocation location={location} />
      </div>
    );
  }
};

export default App;
