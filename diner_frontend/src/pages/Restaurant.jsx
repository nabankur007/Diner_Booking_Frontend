import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("https://api.example.com/restaurants");
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error("Failed to fetch restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      restaurant.location.toLowerCase().includes(location.toLowerCase())
  );

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
      <div className="bg-black bg-opacity-50 p-8 rounded-lg min-h-screen">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-orange-600 drop-shadow-md">
            Find Your Favorite Restaurant
          </h1>
          <p className="text-gray-200 mt-2 drop-shadow-sm">
            Search for the best restaurants by name or location.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Search by Restaurant Name"
            className="w-full sm:w-1/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full sm:w-1/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-sm"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Link
            to="/add"
            className="w-full sm:w-auto bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition shadow-md text-center"
          >
            Add Restaurant
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-orange-600 mb-2">
                  {restaurant.name}
                </h3>
                <p className="text-gray-700">
                  <span className="font-semibold">Location:</span> {restaurant.location}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Cuisine:</span> {restaurant.cuisine}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-200 col-span-full text-center">
              No restaurants found. Try adjusting your filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
