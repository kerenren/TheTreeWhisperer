import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "30%",
  height: "30%",
};

const Geolocation = (props) => {
  const location = props.location;
  const marker = {
    lat: location.lat,
    lng: location.lng,
  };
  const center = {
    lat: 32.0853,
    lng: 34.7818,
  };

  return (
    <div>
      <Map
        google={props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{
          lat: center.lat,
          lng: center.lng,
        }}
      >
        <Marker position={{ lat: center.lat, lng: center.lng }} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCITyh1CqIhRGZAl3qv9fVNNzOEw2AeSm8",
})(Geolocation);
