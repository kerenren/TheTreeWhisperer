import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "80%",
  height: "80%",
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
        zoom={30}
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
  apiKey: "xxxxxx",
})(Geolocation);
