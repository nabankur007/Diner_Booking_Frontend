import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    // Handle user logout and clear local storage
    const handleLogout = () => {
        localStorage.clear();
        console.log("User logged out");
        navigate("/"); // Redirect to home after logout
    };

    return (
        <nav className="bg-black text-white shadow-lg">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo Section */}
                <div className="text-3xl font-bold text-orange-500">
                    <Link
                        to="/"
                        className="hover:text-orange-400 transition-colors"
                    >
                        DineEasy
                    </Link>
                </div>
             
                {/* search bar section */}
                <div >
                   
                </div>


                {/* Navigation Links */}
                <div className="hidden md:flex space-x-8 items-center text-xl ">

                    {localStorage.getItem("user-data") ? (
                        <>
                            <Link
                                to="/profile"
                                className="text-gray-300 hover:text-orange-400 transition-colors"
                            >
                                Profile
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="text-gray-300 hover:text-orange-400 transition-colors"
                            >
                                Log in
                            </Link>
                            <Link
                                to="/signup"
                                className="text-gray-300 hover:text-orange-400 transition-colors"
                            >
                                Sign up
                            </Link>
                            <Link
                                to="/res_registration"
                                className="text-gray-300 hover:text-orange-400 transition-colors"
                            >
                                Add Restaurant
                            </Link>
                        </>
                    )}
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden flex items-center">
                    <button
                        className="text-gray-300 focus:outline-none hover:text-orange-400"
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
        </nav>
    );
};

export default Navbar;
