import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Added navigate import
import Api from "../context/Api";

const Signup = () => {
    // State variables for form fields
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // State for error and success messages
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // State for toggling password visibility
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // To redirect after successful signup
    const navigate = useNavigate();

    // Function to validate the form
    const validateForm = () => {
        if (!username || !email || !phone || !password || !confirmPassword) {
            setError("All fields are required.");
            return false;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return false;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return false;
        }
        if (!/^[\d\+\-\.\(\)\/\s]*$/.test(phone)) {
            setError("Please enter a valid phone number.");
            return false;
        }
        setError(""); // Clear any existing errors
        return true;
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        if (validateForm()) {
            setSuccess("Signup successful!"); // Show success message

            try {
                const response = await Api.post(`api/auth/public/signup`, {
                    username,
                    email,
                    phone,
                    password, // Send the password as is (finalPassword is redundant)
                    role: ["user"],
                });

                if (response && response.data) {
                    // Save user data to local storage if the response is successful
                    localStorage.setItem("user-data", JSON.stringify(response.data));
                    console.log("Sign up successful:", response.data);
                    setError(""); // Clear any existing errors
                    navigate("/"); // Redirect after a successful signup
                }
            } catch (error) {
                setError("Sign up failed. Please check your credentials and try again.");
                console.error("Signup failed:", error.message);
            }
        }
    };

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Function to toggle confirm password visibility
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white borderbg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4 text-center">
                Sign Up
            </h2>
            {error && <p className="text-red-600 text-center mb-2">{error}</p>}
            {success && (
                <p className="text-green-600 text-center mb-2">{success}</p>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-orange-700 mb-1">
                        Username:
                    </label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-orange-700 mb-1">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-orange-700 mb-1">Phone:</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-orange-700 mb-1">
                        Password:
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-orange-600"
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </button>
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-orange-700 mb-1">
                        Confirm Password:
                    </label>
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <button
                            type="button"
                            onClick={toggleConfirmPasswordVisibility}
                            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-orange-600"
                        >
                            {showConfirmPassword ? "🙈" : "👁️"}
                        </button>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white font-semibold py-2 rounded hover:bg-orange-600 transition-colors"
                >
                    Sign Up
                </button>
            </form>
            <div className="mt-4 text-center">
                <p className="text-gray-700">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-orange-600 font-semibold hover:underline hover:text-orange-500 transition-colors"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
