import React, { useEffect, useState } from "react";
import Api from "../context/Api";

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    const user_data = JSON.parse(localStorage.getItem("user-data"));

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await Api.get("/api/auth/user", {
                    headers: {
                        Authorization: `Bearer ${user_data.jwtToken}`,
                    },
                });
                setUserData(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/"; // Redirect to home page after logout
    };

    const handleChangePassword = () => {
        alert("Change Password feature coming soon!");
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <div className="text-orange-500 text-lg font-bold">
                    Loading...
                </div>
            </div>
        );
    }

    if (!userData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center max-w-md w-full">
                    <h2 className="text-2xl font-semibold text-orange-600 mb-4">
                        No user data found
                    </h2>
                    <p className="text-gray-400">
                        Please log in to view your profile.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md max-w-4xl w-full">
                <h1 className="text-3xl font-semibold text-orange-500 mb-6 text-center">
                    Welcome, {userData.username}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* User Info */}
                    <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                            User Information
                        </h2>
                        <div className="text-gray-300">
                            <p className="mb-2">
                                <span className="font-semibold">Name:</span>{" "}
                                {userData.username}
                            </p>
                            <p className="mb-2">
                                <span className="font-semibold">Email:</span>{" "}
                                {userData.email}
                            </p>
                            <p className="mb-2">
                                <span className="font-semibold">Phone:</span>{" "}
                                {userData.phone}
                            </p>
                            <p className="mb-2">
                                <span className="font-semibold">Roles:</span>{" "}
                                {userData.roles.join(", ")}
                            </p>
                        </div>
                    </div>
                    {/* Profile Actions */}
                    <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                            Actions
                        </h2>
                        <p className="text-gray-400 mb-4">
                            Manage your account settings below:
                        </p>
                        <button
                            className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition-colors mb-4"
                            onClick={handleChangePassword}
                        >
                            Change Password
                        </button>
                        <button
                            className="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition-colors"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
