import React, { useState } from "react";
import Api from "../context/Api";
import { Link } from "react-router-dom";

const Forget_password = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false); // State to manage loading
    const [isDisabled, setIsDisabled] = useState(false); // Disable button while waiting for the response

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");
        setIsLoading(true); // Start loading

        // Disable the button while waiting for the response
        setIsDisabled(true);

        // Validate the email format
        if (!emailRegex.test(email)) {
            setIsLoading(false); // Stop loading
            setIsDisabled(false); // Enable button
            setError("Please enter a valid email address.");
            return;
        }

        try {
            // Call the API using Axios with the email as a query parameter
            const response = await Api.post(
                `api/auth/public/forgot-password`,
                {},
                {
                    params: { email: email },
                }
            );

            if (response.status === 200) {
                setMessage(response.data.message);
            } else {
                setError("Failed to send reset link. Please try again.");
            }
        } catch (err) {
            setError(
                "An error occurred while sending the reset link. Please try again."
            );
        } finally {
            setIsLoading(false); // Stop loading after the request completes
            setIsDisabled(false); // Enable button again
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md ">
                <h2 className="text-2xl font-semibold text-center mb-6">
                    Forgot Password
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    {message && (
                        <p className="text-green-500 mb-4">{message}</p>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white font-bold py-2 rounded-md hover:bg-orange-600 transition-colors duration-200"
                        disabled={isDisabled} // Disable button during loading
                    >
                        {isLoading ? "Sending..." : "Send Reset Link"}{" "}
                        {/* Change button text based on loading state */}
                    </button>
                </form>
                <Link
                    to="/login"
                    className="text-orange-600 font-semibold hover:underline hover:text-orange-500 transition-colors"
                >
                    Go to login
                </Link>
            </div>
        </div>
    );
};

export default Forget_password;
