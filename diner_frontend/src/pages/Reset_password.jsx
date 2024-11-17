import React, { useState, useEffect } from "react";
import Api from "../context/Api";
import { useLocation, useNavigate } from "react-router-dom";

const Reset_password = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    // State to manage the visibility of the passwords
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Extract the token from the URL query string
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");

        // Store the token in localStorage
        if (token) {
            localStorage.setItem("reset-token", token);
        }

        return () => {
            localStorage.removeItem("reset-token");
        };
    }, [location]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");
        setIsLoading(true); // Set loading state
        setIsDisabled(true); // Disable button while sending the request

        // Validate that passwords match
        if (password !== confirmPassword) {
            setIsLoading(false); // Stop loading
            setIsDisabled(false); // Re-enable button
            setError("Passwords do not match.");
            return;
        }

        if (password.length < 6) {
            setIsLoading(false); // Stop loading
            setIsDisabled(false); // Re-enable button
            setError("Password must be at least 6 characters long.");
            return;
        }

        // Get the token from localStorage
        const token = localStorage.getItem("reset-token");

        if (!token) {
            setIsLoading(false); // Stop loading
            setIsDisabled(false); // Re-enable button
            setError("Invalid or expired token.");
            return;
        }

        try {
            // Call the API to reset the password
            const response = await Api.post(
                "/api/auth/public/reset-password",
                {},
                {
                    params: { token: token, newPassword: password }, // Pass the token as query param
                }
            );

            if (response.status === 200) {
                setMessage("Your password has been reset successfully.");
                localStorage.removeItem("reset-token"); // Remove token from localStorage after successful reset
                navigate("/login"); // Redirect to login page after success (you can change this as per your flow)
            } else {
                setError("Failed to reset password. Please try again.");
            }
        } catch (err) {
            // Handle errors from the API
            if (err.response) {
                setError(err.response.data.message || "An error occurred.");
            } else {
                setError(
                    "An error occurred while resetting the password. Please try again."
                );
            }
        } finally {
            setIsLoading(false); // Stop loading
            setIsDisabled(false); // Re-enable button
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">
                    Reset Password
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 mb-2"
                        >
                            New Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter new password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "👁️" : "🙈"}{" "}
                                {/* Emoji toggle */}
                            </button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-gray-700 mb-2"
                        >
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Confirm new password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                required
                            />
                            <button
                                type="button"
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl"
                                onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                }
                            >
                                {showConfirmPassword ? "👁️" : "🙈"}{" "}
                                {/* Emoji toggle */}
                            </button>
                        </div>
                    </div>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    {message && (
                        <p className="text-green-500 mb-4">{message}</p>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors duration-200"
                        disabled={isDisabled} // Disable the button while loading
                    >
                        {isLoading ? "Resetting..." : "Reset Password"}{" "}
                        {/* Change button text on loading */}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Reset_password;
