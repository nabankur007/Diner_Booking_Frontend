import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    // Function to handle user logout and clear local storage
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        // Optionally, you can redirect or give feedback after logout
        console.log("User logged out");
        navigate("/"); // Redirect to home after logout
    };

    return (
        <div className="bg-orange-600 text-white dark:bg-gray-900 dark:text-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link to="/" className="hover:text-orange-300 transition-colors">
                        Navbar
                    </Link>
                </div>
                <div className="space-x-4">
                    <Link to="/" className="hover:text-orange-300 transition-colors">
                        Home
                    </Link>
                    <Link to="/about" className="hover:text-orange-300 transition-colors">
                        About
                    </Link>

                    {
                        // Check if the user is logged in by looking for "user-data" in localStorage
                        localStorage.getItem("user-data") ? (
                            <>
                                <Link to="/profile" className="hover:text-orange-300 transition-colors">
                                    Profile
                                </Link>
                                <button
                                    type="button" // Use type "button" to prevent form submission behavior
                                    onClick={handleLogout} // Pass the function reference
                                    className="bg-red-500 px-4 py-2 rounded-md text-white hover:bg-red-600 transition-colors"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="hover:text-orange-300 transition-colors">
                                    Log in
                                </Link>
                                <Link to="/signup" className="hover:text-orange-300 transition-colors">
                                    Sign up
                                </Link>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
