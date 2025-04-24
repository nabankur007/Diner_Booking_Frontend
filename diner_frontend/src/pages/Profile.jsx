import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEdit, FiLogOut, FiLock, FiStar, FiClock, FiCalendar } from "react-icons/fi";
import { TbToolsKitchen2 } from "react-icons/tb";
import Api from "../context/Api";

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const user_data = JSON.parse(localStorage.getItem("user-data"));

    useEffect(() => {
        const fetchUserProfile = async () => {
            if (!user_data) {
                navigate("/login");
                return;
            }
            try {
                const response = await Api.get("/api/auth/user", {
                    headers: {
                        Authorization: `Bearer ${user_data.jwtToken}`,
                    },
                });
                setUserData(response.data);
            } catch (error) {
                console.error("Error fetching profile:", error);
                setError("Failed to load profile data");
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [navigate, user_data]);

    const handleChangePassword = () => {
        navigate("/change-password");
    };

    const handleEditProfile = () => {
        navigate("/edit-profile");
    };

    const handleLogout = () => {
        localStorage.removeItem("user-data");
        navigate("/login");
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-white">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen bg-white">
                <div className="text-red-500 text-lg font-medium">{error}</div>
            </div>
        );
    }

    if (!userData) {
        return (
            <div className="flex justify-center items-center h-screen bg-white">
                <div className="text-gray-600">No user data found</div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Profile Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <img
                                    src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
                                    alt="Profile"
                                    className="w-16 h-16 rounded-full border-2 border-orange-100"
                                />
                                <button 
                                    onClick={handleEditProfile}
                                    className="absolute -bottom-1 -right-1 bg-orange-500 text-white p-1 rounded-full hover:bg-orange-600 transition"
                                >
                                    <FiEdit size={14} />
                                </button>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">{userData.username}</h1>
                                <p className="text-gray-600">{userData.email}</p>
                            </div>
                        </div>
                        <button 
                            onClick={handleLogout}
                            className="flex items-center space-x-1 text-gray-600 hover:text-orange-500 transition"
                        >
                            <FiLogOut size={18} />
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left Column - Personal Info */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
                                <button 
                                    onClick={handleEditProfile}
                                    className="text-orange-500 hover:text-orange-600 flex items-center"
                                >
                                    <FiEdit className="mr-1" size={14} />
                                    Edit
                                </button>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="w-1/3 text-gray-500">Full Name</div>
                                    <div className="w-2/3 font-medium">{userData.username}</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-1/3 text-gray-500">Email</div>
                                    <div className="w-2/3 font-medium">{userData.email}</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-1/3 text-gray-500">Phone</div>
                                    <div className="w-2/3 font-medium">
                                        {userData.phone || "Not provided"}
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-1/3 text-gray-500">Account Type</div>
                                    <div className="w-2/3 font-medium">
                                        {userData.roles?.includes("ROLE_RESTAURANT") 
                                            ? "Restaurant Owner" 
                                            : "Food Enthusiast"}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Activity Section */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Activity</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-orange-50 rounded-lg p-4">
                                    <div className="flex items-center space-x-2 text-orange-600">
                                        <FiStar size={18} />
                                        <span className="font-medium">Reviews</span>
                                    </div>
                                    <p className="text-2xl font-bold mt-2">24</p>
                                </div>
                                <div className="bg-orange-50 rounded-lg p-4">
                                    <div className="flex items-center space-x-2 text-orange-600">
                                        <TbToolsKitchen2 size={18} />
                                        <span className="font-medium">Bookings</span>
                                    </div>
                                    <p className="text-2xl font-bold mt-2">12</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Quick Actions */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
                            <div className="space-y-3">
                                <button
                                    onClick={handleChangePassword}
                                    className="w-full flex items-center space-x-2 p-3 text-left hover:bg-gray-50 rounded transition"
                                >
                                    <FiLock className="text-orange-500" size={18} />
                                    <span>Change Password</span>
                                </button>
                                <button 
                                className="w-full flex items-center space-x-2 p-3 text-left hover:bg-gray-50 rounded transition" 
                                onClick={()=>navigate("/user_bookings")}>
                                    <FiClock className="text-orange-500" size={18} />
                                    <span>Booking History</span>
                                </button>
                                <button className="w-full flex items-center space-x-2 p-3 text-left hover:bg-gray-50 rounded transition">
                                    <FiCalendar className="text-orange-500" size={18} />
                                    <span>Upcoming Reservations</span>
                                </button>
                            </div>
                        </div>

                        {/* Membership Status */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Membership</h2>
                            <p className="text-gray-600 mb-4">DineEasy Pro Member</p>
                            <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-lg p-4">
                                <p className="font-medium">Premium Benefits Active</p>
                                <p className="text-sm mt-1">15% off on all partner restaurants</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;