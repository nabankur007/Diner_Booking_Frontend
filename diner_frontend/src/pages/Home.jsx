import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1350&q=80')`,
            }}
        >
            <div className="bg-black bg-opacity-80 min-h-screen text-white flex flex-col justify-between">
                <div>
                    {/* Restaurants Section */}
                    <section className="container mx-auto px-6 py-16">
                        <h2 className="text-4xl font-bold text-orange-400 mb-6 text-center drop-shadow-lg">
                            🍝 Great times and delicious bites await—reserve your spot!
                        </h2>
                        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
                        Discover your next favorite meal: book a table and let the flavor adventure begin.
                        </p>
                    </section>

                    {/* Testimonials Section */}
                    <section className="container mx-auto px-6 py-10">
                    <h2 className="text-4xl font-bold text-orange-500 mb-12 text-center drop-shadow-lg">
                    ❤️  What Our Guests Say  ❤️
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Testimonial Card */}
                        <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md p-6 rounded-xl shadow-lg border border-orange-400/30 hover:scale-105 transition-transform duration-300">
                        <div className="absolute -top-5 left-5 text-orange-400 text-4xl">“</div>
                        <p className="text-gray-200 italic text-lg mb-6">
                            DineEasy helped me find a romantic spot for our anniversary. The atmosphere and food were unforgettable!
                        </p>
                        <h3 className="text-orange-400 font-bold text-lg text-right">– Isabella M.</h3>
                        </div>

                        {/* Testimonial Card */}
                        <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md p-6 rounded-xl shadow-lg border border-orange-400/30 hover:scale-105 transition-transform duration-300">
                        <div className="absolute -top-5 left-5 text-orange-400 text-4xl">“</div>
                        <p className="text-gray-200 italic text-lg mb-6">
                            I never thought booking Italian fine dining could be this smooth. The recommendations were on point!
                        </p>
                        <h3 className="text-orange-400 font-bold text-lg text-right">– Marco L.</h3>
                        </div>
                    </div>
                    </section>
                </div>

               
            </div>
        </div>
    );
};

export default Home;
