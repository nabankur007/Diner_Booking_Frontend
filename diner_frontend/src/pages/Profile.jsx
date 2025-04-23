import React, { useEffect, useState } from "react";
import { Pencil } from "lucide-react";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call for demo
    setTimeout(() => {
      setUserData({
        username: "Mr. JaneDoe",
        email: "janedoe@example.com",
        phone: "+91 9876543210",
        roles: ["User"],
      });
      setLoading(false);
    }, 1000);
  }, []);

  const handleLogout = () => {
    alert("Logout clicked (demo)");
  };

  const handleChangePassword = () => {
    alert("Change Password clicked (demo)");
  };

  const getAvatarImage = () => {
    if (!userData) return "";
    const name = userData.username.toLowerCase();
    if (name.includes("mrs.") || name.includes("ms.")) {
      return "https://img.freepik.com/premium-vector/business-woman-character-vector-illustration_1133257-2432.jpg?w=740";
    } else {
      return "https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-orange-500 text-lg font-bold">Loading...</div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEG8IHVADhqh2rBuP-hBnheRMbKVfouCCo7g&s")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
         
      }}
    >
      <div className="bg-gray-800 rounded-xl shadow-lg max-w-md w-full p-4">
        <h2 className="text-2xl font-semibold text-white mb-4">User Profile</h2>

        {/* User Info Section - Left and Right Split */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {/* Left Side: Avatar + Name */}
          <div className="flex flex-col items-center sm:items-start sm:w-1/3">
            <div className="relative mb-3">
              <img
                src={getAvatarImage()}
                alt="User avatar"
                className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-gray-900 rounded-full p-1 shadow">
                <Pencil className="w-4 h-4 text-blue-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white">{userData.username}</h3>
          </div>

          {/* Right Side: Personal Info */}
          <div className="flex-1 text-white space-y-2">
            <p className="text-sm">
              <span className="font-semibold">Email:</span> {userData.email}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Phone:</span> {userData.phone}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Roles:</span> {userData.roles.join(", ")}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button
            className="flex-1 bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition"
            onClick={handleChangePassword}
          >
            Change Password
          </button>
          <button
            className="flex-1 bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600 transition"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

        
      </div>
    </div>
  );
};

export default Profile;
