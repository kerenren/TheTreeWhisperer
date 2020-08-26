import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "60%",
  height: "60%",
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
    <div className="mt-3">
      <Map
        google={props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{
          lat: marker.lat,
          lng: marker.lng,
        }}
      >
        <Marker position={{ lat: marker.lat, lng: marker.lng }} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCITyh1CqIhRGZAl3qv9fVNNzOEw2AeSm8",
})(Geolocation);
