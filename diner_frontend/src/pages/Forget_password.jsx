import React, { useState } from "react";
import Api from "../context/Api";
import { Link } from "react-router-dom";

const Forget_password = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");
        setIsLoading(true);
        setIsDisabled(true);

        if (!emailRegex.test(email)) {
            setIsLoading(false);
            setIsDisabled(false);
            setError("Please enter a valid email address.");
            return;
        }

        try {
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
            setError("An error occurred while sending the reset link. Please try again.");
        } finally {
            setIsLoading(false);
            setIsDisabled(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
                    Forgot Password
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block mb-2 text-gray-300">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-600 rounded-md focus:ring-2 focus:ring-orange-500 outline-none bg-gray-700 text-gray-200"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {error && <p className="mb-4 text-red-500 text-sm">{error}</p>}
                    {message && <p className="mb-4 text-green-500 text-sm">{message}</p>}
                    <button
                        type="submit"
                        disabled={isDisabled}
                        className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition duration-300 disabled:opacity-50"
                    >
                        {isLoading ? "Sending..." : "Send Reset Link"}
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <Link
                        to="/login"
                        className="text-orange-500 font-semibold hover:underline hover:text-orange-600 transition-colors"
                    >
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Forget_password;
