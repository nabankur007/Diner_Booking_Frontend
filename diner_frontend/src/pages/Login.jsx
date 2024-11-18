import React, { useState } from "react";
import Api from "../context/Api";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    // State for username, password, visibility, and validation error messages
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Submitting the login request with validation
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Validation checks
        if (!username || !password) {
            setError("Username and password are required.");
            return;
        }

        try {
            const response = await Api.post("/api/auth/public/signin", {
                username: username,
                password: password,
            });

            if (response && response.data) {
                // Save user data to local storage if the response is successful
                localStorage.setItem(
                    "user-data",
                    JSON.stringify(response.data)
                );
                console.log("Login successful:", response.data);
                setError(""); // Clear any existing errors
                navigate("/"); // Redirect after a successful login
            }
        } catch (error) {
            setError(
                "Login failed. Please check your credentials and try again."
            );
            console.error("Login failed:", error.message);
        }
    };

    // Handling input changes for both username and password
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setError(""); // Clear error message on input change
        if (name === "username") {
            setUsername(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    // Toggle password visibility
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
                    Welcome to Diner Booking
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block mb-2 text-gray-800">Username or Email</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter username or email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
                            value={username}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mb-6 relative">
                        <label className="block mb-2 text-gray-800">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 outline-none"
                            value={password}
                            onChange={handleInputChange}
                        />
                        <button
                            type="button"
                            onClick={toggleShowPassword}
                            className="absolute right-4 top-1/2 pt-8 transform -translate-y-1/2 text-gray-500 hover:text-orange-600"
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </button>
                    </div>

                    {/* Display validation error */}
                    {error && <p className="mb-4 text-red-500">{error}</p>}

                    <div className="flex justify-between items-center">
                        <Link to="/forget_password" className="text-orange-600 text-sm hover:text-orange-700">
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        disabled={!username || !password}
                        className="mt-4 w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition duration-300 disabled:opacity-50"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-700">
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-orange-600 font-semibold hover:underline hover:text-orange-700 transition-colors"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
