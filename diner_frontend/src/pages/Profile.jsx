import React from "react";

const Profile = () => {
    // Parse the user data from localStorage
    const user_data = JSON.parse(localStorage.getItem("user-data"));

    // Check if user_data exists to avoid rendering errors
    if (!user_data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-md w-full">
                    <h2 className="text-2xl font-semibold text-orange-600 mb-4">
                        No user data found
                    </h2>
                    <p className="text-gray-700">Please log in to view your profile.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl w-full">
                <h1 className="text-3xl font-semibold text-orange-600 mb-6 text-center">
                    Welcome to Your Profile
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Profile Info Section */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            User Information
                        </h2>
                        <div className="text-gray-700">
                            <p className="mb-2">
                                <span className="font-semibold">Username:</span> {user_data.username}
                            </p>
                            {/* JWT Token */}
                            <p className="mb-2">
                                <span className="font-semibold">JWT Token:</span>
                                <span className="block text-sm text-gray-600 break-words overflow-x-auto">
                                    {user_data.jwtToken}
                                </span>
                            </p>
                            <p className="mb-2">
                                <span className="font-semibold">Roles:</span> {user_data.roles.join(", ")}
                            </p>
                        </div>
                    </div>
                    {/* Profile Actions Section */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Actions
                        </h2>
                        <div className="text-gray-700">
                            <p className="mb-4">You can update your profile or log out from here:</p>
                            <button
                                className="w-full bg-orange-600 text-white font-semibold py-2 rounded-md hover:bg-orange-700 transition-colors mb-4"
                                onClick={() => alert("Feature to update profile coming soon!")}
                            >
                                Update Profile
                            </button>
                            <button
                                className="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition-colors"
                                onClick={() => {
                                    localStorage.clear();
                                    window.location.href = "/"; // Redirect to home after logout
                                }}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
