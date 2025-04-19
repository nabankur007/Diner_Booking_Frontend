import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

const Res_preview = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Get form data from location state or localStorage
    const formData = location.state?.formData ||
        JSON.parse(localStorage.getItem("restaurantInfo")) || {
            restaurantName: "",
            owner: { name: "", email: "", phone: "" },
            address: { city: "", area: "", shop: "", floor: "", landmark: "" },
            coordinates: { lat: null, lng: null },
        };

    const handleEdit = (section) => {
        // Navigate back to the appropriate section
        switch (section) {
            case "basic":
                navigate("/res_registration");
                break;
            case "menu":
                navigate("/res_menu_operationDetails");
                break;
            case "docs":
                navigate("/res_document_form");
                break;
            default:
                navigate("/res_registration");
        }
    };

    const handleSubmit = async () => {
        try {
            // Submit all data to your API
            const response = await fetch(
                "https://your-api.com/api/restaurants",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                localStorage.removeItem("restaurantInfo");
                navigate("/registration-success"); // Create this success page
            } else {
                alert("Submission failed. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg flex flex-col lg:flex-row overflow-hidden">
                <Sidebar />

                <div className="w-full lg:w-2/3 p-8 space-y-8">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Review Your Information
                    </h2>
                    <p className="text-gray-600">
                        Please review all details before submission
                    </p>

                    {/* Basic Information Section */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Basic Information
                            </h3>
                            <button
                                onClick={() => handleEdit("basic")}
                                className="text-orange-600 hover:text-orange-800 font-medium"
                            >
                                Edit
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-500">
                                    Restaurant Name
                                </p>
                                <p className="font-medium">
                                    {formData.restaurantName || "Not provided"}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Owner Name
                                </p>
                                <p className="font-medium">
                                    {formData.owner.name || "Not provided"}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Owner Email
                                </p>
                                <p className="font-medium">
                                    {formData.owner.email || "Not provided"}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Owner Phone
                                </p>
                                <p className="font-medium">
                                    {formData.owner.phone || "Not provided"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Location Section */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Location Details
                            </h3>
                            <button
                                onClick={() => handleEdit("basic")}
                                className="text-orange-600 hover:text-orange-800 font-medium"
                            >
                                Edit
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-500">Address</p>
                                <p className="font-medium">
                                    {formData.address.shop &&
                                        `${formData.address.shop}, `}
                                    {formData.address.floor &&
                                        `${formData.address.floor}, `}
                                    {formData.address.area &&
                                        `${formData.address.area}, `}
                                    {formData.address.city ||
                                        "Address not complete"}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Landmark
                                </p>
                                <p className="font-medium">
                                    {formData.address.landmark ||
                                        "Not provided"}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Coordinates
                                </p>
                                <p className="font-medium">
                                    {formData.coordinates.lat
                                        ? `${formData.coordinates.lat.toFixed(
                                              6
                                          )}, ${formData.coordinates.lng.toFixed(
                                              6
                                          )}`
                                        : "Not set"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Menu & Operations Section */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Menu & Operations
                            </h3>
                            <button
                                onClick={() => handleEdit("menu")}
                                className="text-orange-600 hover:text-orange-800 font-medium"
                            >
                                Edit
                            </button>
                        </div>

                        {/* Add your menu and operation details preview here */}
                        <p className="text-gray-500">
                            Menu items, operating hours, etc. would be shown
                            here
                        </p>
                    </div>

                    {/* Documents Section */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Documents
                            </h3>
                            <button
                                onClick={() => handleEdit("docs")}
                                className="text-orange-600 hover:text-orange-800 font-medium"
                            >
                                Edit
                            </button>
                        </div>

                        {/* Add your documents preview here */}
                        <p className="text-gray-500">
                            Uploaded documents would be listed here
                        </p>
                    </div>

                    {/* Submission Button */}
                    <div className="pt-6">
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl text-lg font-semibold transition"
                        >
                            Submit Registration
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Res_preview;
