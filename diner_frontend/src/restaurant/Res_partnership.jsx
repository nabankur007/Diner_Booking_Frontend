import React from "react";
import { Link } from "react-router-dom";

const Res_partnership = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40 z-0"></div>

      {/* Frosted glass card */}
      <div className="relative z-10 backdrop-blur-md bg-white/10 border border-white/20 p-10 rounded-2xl text-center text-white max-w-2xl w-full shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Partner with <span className="text-orange-400">Us</span> <br />
          and grow your restaurant
        </h1>
        <p className="text-lg md:text-xl mb-6 font-light text-gray-100">
          Valid for new restaurant partners in select cities.
        </p>

        <Link to="/registration">
          <button className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
            Register your restaurant
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Res_partnership;
