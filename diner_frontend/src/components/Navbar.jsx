import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isLoggedIn = !!localStorage.getItem("user-data");
    const showBackButton = location.pathname !== "/";

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <nav className="bg-black text-white shadow-lg">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Left Section (Back Button + Logo) */}
                    <div className="flex items-center">
                        {showBackButton && (
                            <button 
                                onClick={handleGoBack}
                                className="mr-4 text-gray-300 hover:text-orange-400 transition-colors duration-200"
                                aria-label="Go back"
                            >
                                <FiArrowLeft className="h-6 w-6" />
                            </button>
                        )}
                        <div className="text-3xl font-extrabold text-orange-500 tracking-wide">
                            <Link to="/" className="hover:text-orange-400 transition-colors duration-200">
                                DineEasy
                            </Link>
                        </div>
                    </div>

                    {/* Right Section (Navigation Links) */}
                    <div className="hidden md:flex space-x-8 items-center text-lg">
                        {isLoggedIn ? (
                            <>
                                <Link
                                    to="/user_bookings"
                                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                                >
                                    My Bookings
                                </Link>
                                <Link
                                    to="/profile"
                                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                                >
                                    Profile
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-200"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                                >
                                    Log in
                                </Link>
                                <Link
                                    to="/signup"
                                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                                >
                                    Sign up
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="text-gray-300 hover:text-orange-400 focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;