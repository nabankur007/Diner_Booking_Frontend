import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRestaurant = () => {
  const [newRestaurant, setNewRestaurant] = useState({
    name: "",
    location: "",
    cuisine: "",
    tabledescription: "",
    details: "",
  });
  const navigate = useNavigate();

  const handleAddRestaurant = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.example.com/restaurants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRestaurant),
      });

      if (response.ok) {
        alert("Restaurant added successfully!");
        navigate("/restaurant"); // Redirect to the restaurant page
      } else {
        alert("Failed to add restaurant. Please try again.");
      }
    } catch (error) {
      console.error("Error adding restaurant:", error);
      alert("Error adding restaurant.");
    }
  };

  return (
    <div
      className="p-8 min-h-screen"
      style={{
        backgroundImage: `url('https://t4.ftcdn.net/jpg/02/92/20/37/360_F_292203735_CSsyqyS6A4Z9Czd4Msf7qZEhoxjpzZl1.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for readability */}
      <div className="bg-black bg-opacity-50 p-8 rounded-lg min-h-screen">
        <div className="max-w-3xl mx-auto bg-white bg-opacity-70 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-orange-600 mb-4 text-center">
            Register Your Restaurant
          </h2>
          <form onSubmit={handleAddRestaurant}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Restaurant Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
                value={newRestaurant.name}
                onChange={(e) => setNewRestaurant({ ...newRestaurant, name: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Location"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
                value={newRestaurant.location}
                onChange={(e) => setNewRestaurant({ ...newRestaurant, location: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Cuisine (e.g., Italian, Chinese)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
                value={newRestaurant.cuisine}
                onChange={(e) => setNewRestaurant({ ...newRestaurant, cuisine: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Table Description"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
                value={newRestaurant.tabledescription}
                onChange={(e) =>
                  setNewRestaurant({ ...newRestaurant, tabledescription: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Details (optional)"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
                value={newRestaurant.details}
                onChange={(e) => setNewRestaurant({ ...newRestaurant, details: e.target.value })}
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition shadow-md"
                onClick={() => navigate("/restaurant")} // Redirect to the restaurant page
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRestaurant;
