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
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Diner
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-700">
                            Username or email
                        </label>
                        <input
                            type="text"
                            name="username"
                            placeholder="type here"
                            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                            value={username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block mb-1 text-gray-700">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                            value={password}
                            onChange={handleInputChange}
                        />
                        <button
                            type="button"
                            onClick={toggleShowPassword}
                            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </button>
                    </div>

                    {/* Display validation error */}
                    {error && <p className="mb-4 text-red-500">{error}</p>}

                    <button
                        type="submit"
                        disabled={!username || !password}
                        className="w-full mb-2 bg-orange-500 text-white py-2 rounded-md hover:bg-blue-600 transition disabled:opacity-50"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-2 ml-1">
                    don't have an account ?{" "}
                    <Link className="text-blue-500" to="/singup">
                        sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
