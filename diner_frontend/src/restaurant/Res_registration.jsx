import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaSearchLocation } from "react-icons/fa";

const Res_registration = () => {
    const navigate = useNavigate();
    const mapRef = useRef(null);
    const searchInputRef = useRef(null);
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);
    const [autocomplete, setAutocomplete] = useState(null);
    const [scriptLoaded, setScriptLoaded] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        restaurantName: "",
        owner: {
            name: "",
            email: "",
            phone: "",
        },
        useSameNumber: false,
        restaurantPhone: "",
        locationSearch: "",
        address: {
            shop: "",
            floor: "",
            area: "",
            city: "",
            landmark: "",
        },
        coordinates: {
            lat: null,
            lng: null,
        },
    });

    // Load Google Maps script
    useEffect(() => {
        if (!window.google) {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=${
                import.meta.env.VITE_GOOGLE_MAPS_API_KEY
            }&libraries=places`;
            script.async = true;
            script.defer = true;
            script.onload = () => {
                setScriptLoaded(true);
                initializeMap();
            };
            document.head.appendChild(script);
        } else {
            setScriptLoaded(true);
            initializeMap();
        }

        return () => {
            // Cleanup
            if (autocomplete) {
                window.google.maps.event.clearInstanceListeners(autocomplete);
            }
        };
    }, []);

    // Initialize map and autocomplete when script is loaded
    useEffect(() => {
        if (scriptLoaded) {
            initializeMap();
        }
    }, [scriptLoaded]);

    // Initialize map and autocomplete
    const initializeMap = () => {
        if (!window.google || !mapRef.current || map) return;

        const initialMap = new window.google.maps.Map(mapRef.current, {
            center: { lat: 20.5937, lng: 78.9629 }, // Center of India
            zoom: 5,
        });
        setMap(initialMap);

        // Initialize Autocomplete
        if (searchInputRef.current) {
            const autocompleteInstance =
                new window.google.maps.places.Autocomplete(
                    searchInputRef.current,
                    {
                        types: ["geocode", "establishment"],
                        componentRestrictions: { country: "in" },
                    }
                );
            setAutocomplete(autocompleteInstance);

            // When a place is selected from the dropdown
            autocompleteInstance.addListener("place_changed", () => {
                const place = autocompleteInstance.getPlace();
                if (!place.geometry) {
                    alert("No details available for this place");
                    return;
                }

                // Update map view
                if (place.geometry.viewport) {
                    initialMap.fitBounds(place.geometry.viewport);
                } else {
                    initialMap.setCenter(place.geometry.location);
                    initialMap.setZoom(17);
                }

                // Place marker
                placeMarker(place.geometry.location);
                updateFormDataFromPlace(place);
            });
        }

        // Add click listener to place marker
        initialMap.addListener("click", (e) => {
            handleMapClick(e.latLng);
        });
    };

    // Place marker on map
    const placeMarker = (location) => {
        if (marker) {
            marker.setMap(null);
        }
        const newMarker = new window.google.maps.Marker({
            position: location,
            map,
        });
        setMarker(newMarker);
    };

    // Update form data from place
    const updateFormDataFromPlace = (place) => {
        const addressComponents = place.address_components || [];
        let city = "";
        let area = "";

        addressComponents.forEach((component) => {
            if (component.types.includes("locality")) {
                city = component.long_name;
            }
            if (
                component.types.includes("sublocality") ||
                component.types.includes("neighborhood")
            ) {
                area = component.long_name;
            }
        });

        setFormData((prev) => ({
            ...prev,
            locationSearch: place.name || place.formatted_address,
            coordinates: {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
            },
            address: {
                ...prev.address,
                area: area || prev.address.area,
                city: city || prev.address.city,
            },
        }));
    };

    // Handle map click
    const handleMapClick = (latLng) => {
        placeMarker(latLng);

        // Reverse geocode to get address
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ location: latLng }, (results, status) => {
            if (status === "OK" && results[0]) {
                updateFormDataFromGeocode(results[0], latLng);
            } else {
                // Just update coordinates if geocoding fails
                setFormData((prev) => ({
                    ...prev,
                    coordinates: {
                        lat: latLng.lat(),
                        lng: latLng.lng(),
                    },
                }));
            }
        });
    };

    // Update form data from geocode result
    const updateFormDataFromGeocode = (result, latLng) => {
        const addressComponents = result.address_components;
        let city = "";
        let area = "";

        addressComponents.forEach((component) => {
            if (component.types.includes("locality")) {
                city = component.long_name;
            }
            if (
                component.types.includes("sublocality") ||
                component.types.includes("neighborhood")
            ) {
                area = component.long_name;
            }
        });

        setFormData((prev) => ({
            ...prev,
            locationSearch: result.formatted_address,
            coordinates: {
                lat: latLng.lat(),
                lng: latLng.lng(),
            },
            address: {
                ...prev.address,
                area: area || prev.address.area,
                city: city || prev.address.city,
            },
        }));
    };

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name.includes(".")) {
            const [parent, child] = name.split(".");
            setFormData((prev) => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: type === "checkbox" ? checked : value,
                },
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: type === "checkbox" ? checked : value,
            }));
        }
    };

    // Handle address field changes
    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            address: {
                ...prev.address,
                [name]: value,
            },
        }));
    };

    // Use current location
    const handleCurrentLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by this browser.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                handleMapClick(new window.google.maps.LatLng(pos.lat, pos.lng));
                map.setCenter(pos);
                map.setZoom(15);
            },
            (error) => {
                alert(`Error getting location: ${error.message}`);
            }
        );
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { restaurantName, owner, address, coordinates } = formData;

        if (
            !restaurantName ||
            !owner.name ||
            !owner.phone ||
            !address.city ||
            !coordinates.lat
        ) {
            alert(
                "Please fill all required fields including selecting a location on the map."
            );
            return;
        }

        const data = {
            ...formData,
            restaurantPhone: formData.useSameNumber
                ? owner.phone
                : formData.restaurantPhone,
        };

        try {
            const response = await fetch(
                "https://your-api.com/api/restaurant/info",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                }
            );

            const result = await response.json();
            if (response.ok) {
                localStorage.setItem("restaurantInfo", JSON.stringify(data));
                navigate("/menu-details");
            } else {
                alert("Error: " + (result.message || "Failed to submit form"));
            }
        } catch (error) {
            console.error("API Error:", error);
            alert("Network error occurred. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg flex flex-col lg:flex-row overflow-hidden">
                <Sidebar />

                <div className="w-full lg:w-2/3 p-8 space-y-6">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Restaurant Information
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Restaurant Name */}
                        <div>
                            <label className="block font-medium mb-2 text-gray-700">
                                Restaurant Name{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="restaurantName"
                                value={formData.restaurantName}
                                onChange={handleChange}
                                placeholder="Restaurant name"
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>

                        {/* Owner Details */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Owner Details{" "}
                                <span className="text-red-500">*</span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="owner.name"
                                    placeholder="Full name"
                                    value={formData.owner.name}
                                    onChange={handleChange}
                                    className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
                                    required
                                />
                                <input
                                    type="email"
                                    name="owner.email"
                                    placeholder="Email address"
                                    value={formData.owner.email}
                                    onChange={handleChange}
                                    className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                            <div className="flex gap-2 items-center">
                                <span className="p-3 bg-gray-100 border rounded-md">
                                    +91
                                </span>
                                <input
                                    type="tel"
                                    name="owner.phone"
                                    placeholder="Phone number"
                                    value={formData.owner.phone}
                                    onChange={handleChange}
                                    className="p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-orange-500"
                                    required
                                    pattern="[0-9]{10}"
                                    title="Please enter a valid 10-digit phone number"
                                />
                                <button
                                    type="button"
                                    className="text-blue-600 font-medium"
                                >
                                    Verify
                                </button>
                            </div>
                        </div>

                        {/* Restaurant Contact */}
                        <div>
                            <h3 className="text-md font-medium text-gray-800 mb-1">
                                Restaurant's Primary Contact Number
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">
                                Customers may call on this number
                            </p>
                            <label className="flex items-center gap-2 px-4 py-3 border rounded-md w-full bg-white">
                                <input
                                    type="checkbox"
                                    name="useSameNumber"
                                    checked={formData.useSameNumber}
                                    onChange={handleChange}
                                    className="form-checkbox text-blue-600"
                                />
                                <span className="text-gray-700">
                                    Same as owner mobile number
                                </span>
                            </label>
                            {!formData.useSameNumber && (
                                <input
                                    type="tel"
                                    name="restaurantPhone"
                                    placeholder="Restaurant phone number"
                                    value={formData.restaurantPhone}
                                    onChange={handleChange}
                                    className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-orange-500"
                                    pattern="[0-9]{10}"
                                    title="Please enter a valid 10-digit phone number"
                                />
                            )}
                        </div>

                        {/* Location */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Add Your Restaurant's Location {" "}
                                <span className="text-red-500">*</span>
                            </h3>
                            <input
                                type="text"
                                name="locationSearch"
                                ref={searchInputRef}
                                placeholder="Search for area, street name"
                                value={formData.locationSearch}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
                            />

                            {/* Map Container */}
                            <div
                                ref={mapRef}
                                className="h-64 w-full mt-4 rounded-md overflow-hidden border border-gray-300 flex flex-col justify-center items-center"
                                style={{ minHeight: "256px" }}
                            />

                            <button
                                type="button"
                                onClick={handleCurrentLocation}
                                className=" mt-2 border-blue-400 font-bold text-blue-400 flex items-center rounded-xl gap-2 border-2 p-2 "
                            >
                                <FaSearchLocation />
                                Use Current Location
                            </button>

                        </div>

                        {/* Address Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="shop"
                                placeholder="Shop no. / building no."
                                value={formData.address.shop}
                                onChange={handleAddressChange}
                                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
                            />
                            <input
                                type="text"
                                name="floor"
                                placeholder="Floor / tower"
                                value={formData.address.floor}
                                onChange={handleAddressChange}
                                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
                            />
                            <input
                                type="text"
                                name="area"
                                placeholder="Area / Sector / Locality"
                                value={formData.address.area}
                                onChange={handleAddressChange}
                                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
                            />
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                value={formData.address.city}
                                onChange={handleAddressChange}
                                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
                                required
                            />
                            <input
                                type="text"
                                name="landmark"
                                placeholder="Nearby Landmark"
                                value={formData.address.landmark}
                                onChange={handleAddressChange}
                                className="p-3 border border-gray-300 rounded-md col-span-full focus:ring-2 focus:ring-orange-500"
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl text-lg font-semibold transition"
                            >
                                Submit & Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Res_registration;
