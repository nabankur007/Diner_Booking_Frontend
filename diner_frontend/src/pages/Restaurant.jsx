import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Api from "../context/Api";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await Api.get("/api/auth/public/restaurant/restaurants");
        setRestaurants(response.data);
      } catch (error) {
        console.error("Failed to fetch restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  // Filter restaurants based on the search criteria
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesName = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());
    // No location field in the provided data, so just check name matching for now
    const matchesLocation = location ? restaurant.locationId.toString().includes(location) : true;
    return matchesName && matchesLocation;
  });

  return (
    <div
      className="p-8 min-h-screen"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1435942/pexels-photo-1435942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black bg-opacity-70 p-8 rounded-lg min-h-screen">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-orange-500 drop-shadow-md">
            Find Your Favorite Restaurant
          </h1>
          <p className="text-gray-300 mt-2">
            Explore and reserve the best restaurants in your area.
          </p>
        </div>

        {/* Search Inputs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Search by Restaurant Name"
            className="w-full sm:w-1/3 p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location ID"
            className="w-full sm:w-1/3 p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button
            className="w-full sm:w-auto bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-all text-center"
            onClick={() => {}}
          >
            Search
          </button>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="p-6 bg-gray-800 text-white shadow-lg rounded-lg hover:shadow-xl hover:bg-gray-700 transition transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-orange-500 mb-2">
                  {restaurant.name}
                </h3>
                <p className="text-gray-400">
                  <span className="font-semibold">Description:</span> {restaurant.description}
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold">Phone:</span> {restaurant.phoneNumber}
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold">Email:</span> {restaurant.email}
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold">Opening Time:</span> {restaurant.openingTime}
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold">Closing Time:</span> {restaurant.closingTime}
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold">Cuisines:</span> {restaurant.cuisines.join(", ")}
                </p>
                
              </div>
            ))
          ) : (
            <p className="text-gray-300 col-span-full text-center">
              No restaurants found. Try adjusting your search filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
