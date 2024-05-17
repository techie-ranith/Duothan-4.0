"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

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
  }, []);

  if (latitude === null || longitude === null) {
    return <div>Loading...</div>;
  }

  const position = [latitude, longitude];

  return (
    <MapContainer center={position} zoom={6} style={{ height: "370px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          You are here.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
