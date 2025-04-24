import React, { useState, useEffect } from 'react';
import { FiSearch, FiClock } from 'react-icons/fi';
import { FaStar, FaRegHeart, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for routing
import Api from '../context/Api';

const ExploreRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisines, setSelectedCuisines] = useState(new Set());
  const [ratingFilter, setRatingFilter] = useState(0);
  const [selectedCity, setSelectedCity] = useState('All');

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await Api.get('/api/auth/public/restaurant/cards');
        setRestaurants(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, []);

  // Filter functions
  const uniqueCities = ['All', ...new Set(restaurants.map(r => r.city))];
  const uniqueCuisines = [...new Set(restaurants.flatMap(r => r.cuisines || []))];

  const filteredRestaurants = restaurants.filter(restaurant => {
    return (
      restaurant.restaurantName?.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCity === 'All' || restaurant.city === selectedCity) &&
      (selectedCuisines.size === 0 || restaurant.cuisines?.some(c => selectedCuisines.has(c))) &&
      restaurant.avgRating >= ratingFilter
    );
  });

  const toggleCuisine = (cuisine) => {
    const newCuisines = new Set(selectedCuisines);
    newCuisines.has(cuisine) ? newCuisines.delete(cuisine) : newCuisines.add(cuisine);
    setSelectedCuisines(newCuisines);
  };

  if (loading) return <div className="flex justify-center p-8"><FaSpinner className="animate-spin text-4xl text-orange-500" /></div>;
  if (error) return <div className="text-center p-8 text-red-500">Error: {error}</div>;

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Left Filter Panel */}
      <div className="w-64 bg-white shadow-lg p-4 fixed h-full overflow-y-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Filters</h2>

        {/* City Filter */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Select City</h3>
          <select
            className="w-full p-2 border rounded-md text-sm"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {uniqueCities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Cuisine Filter */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Cuisines</h3>
          <div className="space-y-1">
            {uniqueCuisines.map(cuisine => (
              <label key={cuisine} className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  checked={selectedCuisines.has(cuisine)}
                  onChange={() => toggleCuisine(cuisine)}
                  className="form-checkbox text-orange-500"
                />
                <span>{cuisine.split('_').join(' ')}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Rating Filter */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Rating</h3>
          <div className="flex space-x-1">
            {[4, 3, 2, 1].map(star => (
              <button
                key={star}
                onClick={() => setRatingFilter(star === ratingFilter ? 0 : star)}
                className={`text-xl ${star <= ratingFilter ? 'text-orange-500' : 'text-gray-300'}`}
              >
                ★
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-8">
        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="relative">
            <FiSearch className="absolute left-3 top-3 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search for restaurants or cuisines..."
              className="w-full pl-10 pr-4 py-2 border-b-2 border-orange-500 focus:outline-none text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map(restaurant => (
            <div key={restaurant.restaurantName} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={restaurant.restaurantImageUrl}
                  alt={restaurant.restaurantName}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow">
                  <FaRegHeart className="text-gray-600 hover:text-red-500" />
                </button>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{restaurant.restaurantName}</h3>
                  <div className="flex items-center bg-orange-100 px-2 py-1 rounded">
                    <span className="text-orange-600 font-bold">{restaurant.avgRating.toFixed(1)}</span>
                    <FaStar className="text-orange-500 ml-1" />
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <FiClock className="mr-1" />
                  <span>{restaurant.openingTime}</span>
                  <span className="mx-2">•</span>
                  <span>{restaurant.city}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {restaurant.cuisines?.map(cuisine => (
                    <span key={cuisine} className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                      {cuisine.split('_').join(' ')}
                    </span>
                  ))}
                </div>

                {/* View Menu Button */}
                <Link to={`/restaurant/${restaurant.restaurantName}`} className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                  View Menu
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreRestaurant;
