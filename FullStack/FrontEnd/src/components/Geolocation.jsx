import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "50%",
  height: "50%",
  margin: "5rem 14rem",
  padding: 0,
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
    <div className="map">
      <Map
        google={props.google}
        zoom={2}
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
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(Geolocation);
