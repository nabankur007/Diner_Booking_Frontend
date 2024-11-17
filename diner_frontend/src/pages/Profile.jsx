import React from "react";

const Profile = () => {
    // Parse the user data from localStorage
    const user_data = JSON.parse(localStorage.getItem("user-data"));

    // Check if user_data exists to avoid rendering errors
    if (!user_data) {
        return <div>No user data found. Please log in.</div>;
    }

    return (
        <>
            <div>This is the profile page</div>
            <p>JWT Token: {user_data.jwtToken}</p>
            <p>Username: {user_data.username}</p>
            <p>Roles: {user_data.roles.join(", ")}</p> {/* Join array for display */}
        </>
    );
};

export default Profile;
