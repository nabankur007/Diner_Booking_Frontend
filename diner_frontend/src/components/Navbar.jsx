import React from "react";
import { Link,useNavigate } from "react-router-dom";

const Navbar = () => {
    // Function to handle user logout and clear local storage
    const naviagte = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        // Optionally, you can redirect or give feedback after logout
        console.log("User logged out");
        naviagte("/");
    };

    return (
        <div>
            <div>Navbar</div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                {
                    // Check if the user is logged in by looking for "user-data" in localStorage
                    localStorage.getItem("user-data") ? (
                        <>
                            <Link to="/profile">Profile</Link>
                            <button
                                type="button" // Use type "button" to prevent form submission behavior
                                onClick={handleLogout} // Pass the function reference
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">Log in</Link>
                            <Link to="/signup">Sign up</Link>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;
