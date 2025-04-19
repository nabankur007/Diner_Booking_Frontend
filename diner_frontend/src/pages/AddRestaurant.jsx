import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../context/Api";

const AddRestaurant = () => {
    const [newRestaurant, setNewRestaurant] = useState({
        userName: "",
        restaurantName: "",
        password: "",
        confirmPassword: "",
        description: "",
        phoneNumber: "",
        email: "",
        openingTime: "",
        closingTime: "",
        location: {
            address: "",
            longitude: "",
            latitude: "",
            city: "",
            state: "",
            country: "",
            zip: "",
            ownerUserName: "",
        },
        menu: [],
        cuisines: [],
        role: ["RESTAURANT"],
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const updateField = (field, value) => {
        setNewRestaurant((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const updateNestedField = (nestedField, value) => {
        setNewRestaurant((prev) => ({
            ...prev,
            location: {
                ...prev.location,
                [nestedField]: value,
            },
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        // Check for required fields
        const requiredFields = [
            "userName", "restaurantName", "password", "confirmPassword",
            "email", "phoneNumber", "openingTime", "closingTime",
            "location.address", "location.city", "location.state",
            "location.country", "location.zip"
        ];

        requiredFields.forEach((field) => {
            const value = field.includes('.') 
                ? field.split('.').reduce((acc, key) => acc[key], newRestaurant)
                : newRestaurant[field];
            
            if (!value) {
                const fieldName = field.split('.').join(' ');
                newErrors[field] = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required.`;
            }
        });

        // Password match validation
        if (newRestaurant.password !== newRestaurant.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (newRestaurant.email && !emailRegex.test(newRestaurant.email)) {
            newErrors.email = "Invalid email format.";
        }

        // Phone number validation
        const phoneRegex = /^[0-9]{10}$/;
        if (newRestaurant.phoneNumber && !phoneRegex.test(newRestaurant.phoneNumber)) {
            newErrors.phoneNumber = "Invalid phone number format.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleAddRestaurant = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        try {
            const { confirmPassword, ...dataToSend } = newRestaurant;

            const response = await Api.post(
                "/api/auth/public/restaurant/signup",
                dataToSend,
                { headers: { "Content-Type": "application/json" } }
            );

            if (response.status === 200) {
                alert("Restaurant registered successfully!");
                localStorage.setItem("user-data", JSON.stringify(response.data));
                navigate("/"); // Redirect to the restaurant page
            } else {
                alert(`Error: ${response.data.message}`);
            }
        } catch (error) {
            console.error("Error adding restaurant:", error);
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-3xl p-8 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
                    Register Your Restaurant
                </h2>
                <form onSubmit={handleAddRestaurant}>
                    {[{
                        label: "Username",
                        field: "userName"
                    }, {
                        label: "Restaurant Name",
                        field: "restaurantName"
                    }, {
                        label: "Password",
                        field: "password",
                        type: showPassword ? "text" : "password",
                        togglePassword: () => setShowPassword((prev) => !prev),
                        showPassword
                    }, {
                        label: "Confirm Password",
                        field: "confirmPassword",
                        type: showConfirmPassword ? "text" : "password",
                        togglePassword: () => setShowConfirmPassword((prev) => !prev),
                        showPassword: showConfirmPassword
                    }, {
                        label: "Description",
                        field: "description",
                        type: "textarea"
                    }, {
                        label: "Phone Number",
                        field: "phoneNumber"
                    }, {
                        label: "Email",
                        field: "email"
                    }].map((input, index) => (
                        <div className="mb-4" key={index}>
                            {input.type === "textarea" ? (
                                <textarea
                                    placeholder={input.label}
                                    className="w-full p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm bg-gray-700 text-gray-200"
                                    value={newRestaurant[input.field]}
                                    onChange={(e) => updateField(input.field, e.target.value)}
                                    required
                                />
                            ) : (
                                <div className="relative">
                                    <input
                                        type={input.type || "text"}
                                        placeholder={input.label}
                                        className="w-full p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm bg-gray-700 text-gray-200"
                                        value={newRestaurant[input.field]}
                                        onChange={(e) => updateField(input.field, e.target.value)}
                                        required
                                    />
                                    {input.togglePassword && (
                                        <button
                                            type="button"
                                            className="absolute top-3 right-3 text-gray-400"
                                            onClick={input.togglePassword}
                                        >
                                            {input.showPassword ? "🙈" : "👁️"}
                                        </button>
                                    )}
                                </div>
                            )}
                            {errors[input.field] && (
                                <p className="text-red-500 text-sm mt-2">{errors[input.field]}</p>
                            )}
                        </div>
                    ))}

                    <div className="mb-4 flex gap-4">
                        <input
                            type="time"
                            placeholder="Opening Time"
                            className="w-1/2 p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm bg-gray-700 text-gray-200"
                            value={newRestaurant.openingTime}
                            onChange={(e) => updateField("openingTime", e.target.value)}
                            required
                        />
                        <input
                            type="time"
                            placeholder="Closing Time"
                            className="w-1/2 p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm bg-gray-700 text-gray-200"
                            value={newRestaurant.closingTime}
                            onChange={(e) => updateField("closingTime", e.target.value)}
                            required
                        />
                    </div>

                    {[{
                        label: "Address",
                        field: "location.address"
                    }, {
                        label: "City",
                        field: "location.city"
                    }, {
                        label: "State",
                        field: "location.state"
                    }, {
                        label: "Country",
                        field: "location.country"
                    }, {
                        label: "Zip Code",
                        field: "location.zip"
                    }].map((input, index) => (
                        <div className="mb-4" key={index}>
                            <input
                                type="text"
                                placeholder={input.label}
                                className="w-full p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm bg-gray-700 text-gray-200"
                                value={input.field.split('.').reduce((acc, key) => acc[key], newRestaurant)}
                                onChange={(e) =>
                                    updateNestedField(input.field.split('.')[1], e.target.value)
                                }
                                required
                            />
                            {errors[input.field] && (
                                <p className="text-red-500 text-sm mt-2">{errors[input.field]}</p>
                            )}
                        </div>
                    ))}

                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Menu Items (comma separated)"
                            className="w-full p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm bg-gray-700 text-gray-200"
                            value={newRestaurant.menu.join(", ")}
                            onChange={(e) => updateField("menu", e.target.value.split(", "))}
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Cuisines (comma separated)"
                            className="w-full p-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm bg-gray-700 text-gray-200"
                            value={newRestaurant.cuisines.join(", ")}
                            onChange={(e) => updateField("cuisines", e.target.value.split(", "))}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full p-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition"
                    >
                        Register Restaurant
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddRestaurant;
