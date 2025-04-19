import React, { useState } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const Res_registration = () => {
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapId = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID;

  // Handle location fetch
  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates({ lat: latitude, lng: longitude });
          reverseGeocode(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Failed to get location.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  // Reverse geocoding
  const reverseGeocode = (latitude, longitude) => {
    if (window.google && window.google.maps) {
      const geocoder = new window.google.maps.Geocoder();
      const latLng = new window.google.maps.LatLng(latitude, longitude);

      geocoder.geocode({ location: latLng }, (results, status) => {
        if (status === "OK" && results[0]) {
          results[0].address_components.forEach((component) => {
            if (component.types.includes("locality")) {
              setCity(component.long_name);
            }
            if (component.types.includes("administrative_area_level_2")) {
              setArea(component.long_name);
            }
          });
        } else {
          console.error("Geocoder failed due to: " + status);
        }
      });
    } else {
      console.warn("Google Maps API not loaded yet.");
    }
  };

  // Marker drag handler
  const handleMarkerDrag = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setCoordinates({ lat, lng });
    reverseGeocode(lat, lng);
  };

  const isLocationAvailable = coordinates.lat && coordinates.lng;

  return (
    <div className="p-4">
      <button
        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-4"
        onClick={handleLocation}
      >
        Use Current Location
      </button>

      <p className="text-sm text-gray-600 mb-2">
        Lat: {coordinates.lat}, Lng: {coordinates.lng}
      </p>

      <div className="h-[500px] w-full mb-4">
        {apiKey ? (
          <APIProvider apiKey={apiKey} libraries={["places"]}>
            <Map
              center={
                isLocationAvailable
                  ? coordinates
                  : { lat: 22.5744, lng: 88.3629 }
              }
              zoom={14}
              mapId={mapId}
              style={{ width: "100%", height: "100%" }}
            >
              {isLocationAvailable && (
                <Marker
                  position={coordinates}
                  draggable={true}
                  onDragEnd={handleMarkerDrag}
                />
              )}
            </Map>
          </APIProvider>
        ) : (
          <p className="text-red-500">Missing Google Maps API Key</p>
        )}
      </div>

      {/* Input fields */}
      <div className="flex flex-col gap-2 max-w-md">
        <input
          type="text"
          placeholder="City"
          value={city}
          className="border p-2 rounded bg-gray-100"
          readOnly
        />
        <input
          type="text"
          placeholder="Area"
          value={area}
          className="border p-2 rounded bg-gray-100"
          readOnly
        />
      </div>
    </div>
  );
};

export default Res_registration;
