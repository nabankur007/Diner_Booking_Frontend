import React, { useState } from "react";
import { Link } from "react-router-dom";

const Res_Profile = () => {
  // Demo data (you can fetch actual data from an API in a real app)
  const restaurantData = {
    name: "Babylon",
    // cuisines:
    //   "Italian, Continental, North Indian, Pizza, Pasta, Desserts",
    address:
      "AE 370, AE Block, Bidhannagar, Sector 1, Salt Lake, Kolkata",
    openingHours: "12:00 PM - 11:00 PM",
    phoneNumber: "+91 1234567890",
    costForTwo: "₹1,200 for two",
    diningRating: 4.2,
    diningRatingCount: 1293,
        images: [
      "https://images.unsplash.com/photo-1551782450-17144c3fa84f",
      "https://images.unsplash.com/photo-1556742521-9713bf2720b5",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "https://images.unsplash.com/photo-1543332164-6e72fce6e3f0",
    ],
    description: `Babylon is a fine-dining restaurant offering an exquisite blend of flavors
      from around the world...`,
  };

  const [activeTab, setActiveTab] = useState("overview");

  const {
    name,
    cuisines,
    address,
    openingHours,
    phoneNumber,
    costForTwo,
    diningRating,
    diningRatingCount,
    images,
    description,
  } = restaurantData;

  return (
    <div
      className="relative w-screen h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1583891345913-45cadbdf1c2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')`,
      }}
    >
      {/* Overlay + Scrollable Content */}
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4">
        {/* Main Container */}
        <div className="w-full h-full bg-white flex flex-col items-center justify-center text-center p-8 rounded-none shadow-none overflow-auto">
                  {/* Top Section: Restaurant Info & Ratings */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6">
            {/* Left: Basic Info */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">
                {name}
              </h1>
              <p className="text-gray-700">{cuisines}</p>
              <p className="text-gray-500 mt-1">
                {address} | <span className="font-semibold m-4">{openingHours}</span>
              </p>
              <p className="text-gray-500">
                <span className="font-semibold">Phone:</span> {phoneNumber}
              </p>
              <p className="text-gray-500">
                <span className="font-semibold">Cost for Two:</span> {costForTwo}
              </p>
            </div>

            {/* Right: Ratings */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 lg:mt-0">
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold text-green-600">
                  {diningRating}
                </span>
                <span className="text-gray-600 text-sm">Dining Rating</span>
                <span className="text-gray-500 text-xs">
                  {diningRatingCount} Reviews
                </span>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 mb-4">
            {["overview", "photos", "reviews", "menu"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm sm:text-base font-semibold ${
                  activeTab === tab
                    ? "text-orange-600 border-b-2 border-orange-600"
                    : "text-gray-500"
                } focus:outline-none mr-4`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-orange-600">
                About {name}
              </h2>
              <p className="text-gray-700">{description}</p>

              {/* Dining Offers & Table Reservation Section */}
              <div className="flex flex-col md:flex-row gap-4 mt-6">
                {/* Left: Dining Offers */}
                <div className="bg-gray-50 p-4 rounded-md shadow-sm w-full md:w-2/3">
                  <h3 className="text-lg font-semibold text-orange-600 mb-3">
                    Dining Offers
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded shadow">
                      <h4 className="font-semibold text-blue-600">
                        PRE-BOOK OFFER
                      </h4>
                      <p className="text-gray-700 mt-1">
                        Get 15% OFF on total bill
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded shadow">
                      <h4 className="font-semibold text-green-600">
                        SURPRISE
                      </h4>
                      <p className="text-gray-700 mt-1">
                        Get a scratch card on your next visit
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded shadow">
                      <h4 className="font-semibold text-pink-600">
                        EXCLUSIVE OFFER
                      </h4>
                      <p className="text-gray-700 mt-1">
                        Extra 10% OFF for new users
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded shadow">
                      <h4 className="font-semibold text-yellow-600">
                        BANK OFFER
                      </h4>
                      <p className="text-gray-700 mt-1">
                        Get up to ₹1200 on Credit Cards
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Table Reservation */}
                <div className="bg-gray-50 p-4 rounded-md shadow-sm w-full md:w-1/3">
                  <h3 className="text-lg font-semibold text-orange-600 mb-3">
                    Table Reservation
                  </h3>
                  
                  <div className="flex flex-col gap-2">
                    {/* Link to the separate booking page */}
                    <Link
                      to="/book-table"
                      className="bg-orange-600 text-white text-center px-4 py-2 rounded hover:bg-orange-700 transition"
                    >
                      Book a Table
                    </Link>
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition">
                      View Directions
                    </button>
                  </div>
                </div>
              </div>

          </div>
          )}

          {activeTab === "photos" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-orange-600">
                Photo Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((imgUrl, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg shadow-md"
                  >
                    <img
                      src={imgUrl}
                      alt={`Restaurant ${index}`}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "reviews" &&  (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-orange-600">
                Reviews
              </h2>
              <div className="text-gray-700">
                <p>
                  <strong>User1</strong>: Had a wonderful experience. The pasta
                  was amazing!
                </p>
                <p className="mt-2">
                  <strong>User2</strong>: Loved the ambience, great service, and
                  tasty desserts.
                </p>
                <p className="mt-2">
                  <strong>User3</strong>: Pizza was a bit cold, but the staff
                  was very friendly.
                </p>
              </div>
               <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition mb-4">
                Write a Review
              </button>
             </div>
          )}

          {activeTab === "menu" && (
            <div className="space-y-4">
      
              <p className="text-gray-700 mb-4">
                Italian, Continental, North Indian, Pizza, Pasta, Desserts.              
                Please visit the dedicated menu page for full details.
              </p>
              
              <Link
                to="/menu"
                className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition m-4">
                Go to Menu
              </Link>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Res_Profile;
