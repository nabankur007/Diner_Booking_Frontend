import React, { useEffect, useState } from "react";
import { Pencil } from "lucide-react";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call for demo
    setTimeout(() => {
      setUserData({
        username: "JohnDoe",
        email: "johndoe@example.com",
        phone: "+91 9876543210",
        roles: ["User", "Admin"],
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-orange-500 text-lg font-bold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-6">User Profile</h2>

        {/* User Info Section - Left and Right Split */}
        <div className="flex flex-col sm:flex-row gap-6 mb-8">
          {/* Left Side: Avatar + Name */}
          <div className="flex flex-col items-center sm:items-start sm:w-1/3">
            <div className="relative mb-3">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="User avatar"
                className="w-24 h-24 rounded-full border-4 border-blue-500"
              />
              <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow">
                <Pencil className="w-4 h-4 text-blue-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800">{userData.username}</h3>
          </div>

          {/* Right Side: Personal Info */}
          <div className="flex-1 text-gray-800 space-y-2">
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
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
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

        {/* Activities */}
        <div>
          <h4 className="text-lg font-semibold text-gray-700 mb-4">Recent Activities</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-md shadow-sm">
              <p className="text-gray-800 font-medium mb-1">Completed a project</p>
              <p className="text-gray-500 text-sm mb-2">2 hours ago</p>
              <button className="text-blue-600 text-sm hover:underline">View Details</button>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-sm">
              <p className="text-gray-800 font-medium mb-1">Submitted a pull request</p>
              <p className="text-gray-500 text-sm mb-2">1 day ago</p>
              <button className="text-blue-600 text-sm hover:underline">View Details</button>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-sm">
              <p className="text-gray-800 font-medium mb-1">Attended a meeting</p>
              <p className="text-gray-500 text-sm mb-2">3 days ago</p>
              <button className="text-blue-600 text-sm hover:underline">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;