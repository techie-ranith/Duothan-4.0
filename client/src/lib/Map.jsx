"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";

function Map() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const geo = navigator.geolocation;
    geo.getCurrentPosition(userCoords);

    function userCoords(position) {
      let userLatitude = position.coords.latitude;
      let userLongitude = position.coords.longitude;
      setLatitude(userLatitude);
      setLongitude(userLongitude);
    }
  }, []); // Empty dependency array to run the effect only once on mount

  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: latitude || 0,
    lng: longitude || 0,
  };

  return (
    <LoadScript googleMapsApiKey="f798455d29f5443081ef43ce6eae04e3">
      <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
        <Marker position={{ lat: latitude || 0, lng: longitude || 0 }} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
