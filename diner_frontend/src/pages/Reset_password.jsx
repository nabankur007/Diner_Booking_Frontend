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
        setIsLoading(true);
        setIsDisabled(true);

        if (password !== confirmPassword) {
            setIsLoading(false);
            setIsDisabled(false);
            setError("Passwords do not match.");
            return;
        }

        if (password.length < 6) {
            setIsLoading(false);
            setIsDisabled(false);
            setError("Password must be at least 6 characters long.");
            return;
        }

        const token = localStorage.getItem("reset-token");

        if (!token) {
            setIsLoading(false);
            setIsDisabled(false);
            setError("Invalid or expired token.");
            return;
        }

        try {
            const response = await Api.post(
                "/api/auth/public/reset-password",
                {},
                {
                    params: { token: token, newPassword: password },
                }
            );

            if (response.status === 200) {
                setMessage("Your password has been reset successfully.");
                localStorage.removeItem("reset-token");
                navigate("/close_reset_password");
            } else {
                setError("Failed to reset password. Please try again.");
            }
        } catch (err) {
            if (err.response) {
                setError(err.response.data.message || "An error occurred.");
            } else {
                setError("An error occurred while resetting the password. Please try again.");
            }
        } finally {
            setIsLoading(false);
            setIsDisabled(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
                    Reset Password
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* Password Field */}
                    <div className="mb-6 relative">
                        <label htmlFor="password" className="block text-gray-300 mb-2">
                            New Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className="w-full px-4 py-3 border border-gray-600 rounded-md focus:ring-2 focus:ring-orange-500 outline-none bg-gray-700 text-gray-200"
                            placeholder="Enter new password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </button>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="mb-6 relative">
                        <label htmlFor="confirmPassword" className="block text-gray-300 mb-2">
                            Confirm Password
                        </label>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmPassword"
                            className="w-full px-4 py-3 border border-gray-600 rounded-md focus:ring-2 focus:ring-orange-500 outline-none bg-gray-700 text-gray-200"
                            placeholder="Confirm new password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? "🙈" : "👁️"}
                        </button>
                    </div>

                    {/* Validation Message */}
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    {message && <p className="text-green-500 text-sm mb-4">{message}</p>}

                    {/* Reset Password Button */}
                    <button
                        type="submit"
                        disabled={isDisabled}
                        className={`w-full py-3 rounded-md text-white ${
                            isLoading
                                ? "bg-orange-400 cursor-not-allowed"
                                : "bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-700 transition-colors duration-200"
                        }`}
                    >
                        {isLoading ? "Resetting..." : "Reset Password"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Reset_password;
