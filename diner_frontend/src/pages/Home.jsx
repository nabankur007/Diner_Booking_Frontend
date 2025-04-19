import React from "react";
import { Link } from "react-router-dom";
import Restaurant from "./Restaurant";

const Home = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')`,
            }}
        >
            <div className="bg-black bg-opacity-90 min-h-screen text-white">
                
                {/* Restaurants Section */}
                <section className="container mx-auto px-6 py-10 restaurant">
                    <h2 className="text-3xl font-semibold text-orange-500 mb-6 text-center">
                        Top Restaurants
                    </h2>
                    <Restaurant />
                </section>
                {/* Testimonials Section */}
                <section className="container mx-auto px-6 py-10 bg-gray-900 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold text-orange-500 mb-6 text-center">
                        What Our Users Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <p className="text-gray-300 italic mb-4">
                                "DineEasy makes booking a table so simple. I found amazing deals and
                                booked my favorite spot in seconds!"
                            </p>
                            <h3 className="text-orange-400 font-bold text-lg">- Emily R.</h3>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <p className="text-gray-300 italic mb-4">
                                "The curated dining experiences are top-notch. I recommend it to
                                anyone looking for a special evening out."
                            </p>
                            <h3 className="text-orange-400 font-bold text-lg">- John D.</h3>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-800 py-6 mt-10">
                    <div className="container mx-auto text-center">
                        <p className="text-gray-400 text-sm">
                            © 2024 DineEasy. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-xs">
                            Built with ❤️ by food lovers for food lovers.
                        </p>
                        <p>
                            <Link to="/about">
                            about us
                            </Link>
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Home;
