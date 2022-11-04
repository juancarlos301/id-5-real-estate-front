import React, { useRef } from "react";
import { useState } from "react";
import Leaflet from "leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-control-geocoder";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"
import markerRetina from "leaflet/dist/images/marker-icon-2x.png"

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: markerRetina,
    iconUrl: markerIcon,
    shadowUrl: markerShadow
});



export const MapComponent = () => { 
    const mapRef = useRef();
    const zoom = 4;
    const containerStyle = {
        width: "400px",
        height: "300px",
        display: "block",
        margin: '2rem 0 0 0',
    }
    const center = {
        lat: -38.416097, 
        lng: -63.616672
    }
    return (
        <MapContainer
            style={containerStyle}
            center={center}
            zoom={zoom}
            scrollWheelZoom={true} 
            ref={mapRef}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

        </MapContainer>
    );
};


