import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')`,
            }}
        >
            <div className="bg-black bg-opacity-90 min-h-screen text-white">
                {/* Hero Section */}
                <section className="container mx-auto px-6 py-20 text-center">
                    <h1 className="text-5xl font-bold mb-6">
                        Discover & Book <span className="text-orange-500">Amazing</span> Dining Experiences
                    </h1>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Find the perfect restaurant, make reservations, and enjoy exclusive deals - all in one place.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link 
                            to="/restaurants" 
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                        >
                            Explore Restaurants
                        </Link>
                        <Link 
                            to="/offers" 
                            className="bg-transparent hover:bg-gray-800 border border-orange-500 text-orange-500 font-bold py-3 px-6 rounded-lg transition duration-300"
                        >
                            View Special Offers
                        </Link>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="container mx-auto px-6 py-10 bg-gray-800 rounded-lg mb-10">
                    <h2 className="text-3xl font-semibold text-orange-500 mb-8 text-center">
                        How DineEasy Works
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-orange-500 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl font-bold">1</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Search</h3>
                            <p className="text-gray-300">Find restaurants by cuisine, location, or special features</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-orange-500 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl font-bold">2</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Book</h3>
                            <p className="text-gray-300">Reserve your table in just a few clicks</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-orange-500 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl font-bold">3</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Enjoy</h3>
                            <p className="text-gray-300">Dine at your favorite spots with exclusive perks</p>
                        </div>
                    </div>
                </section>

                {/* Restaurants Section */}
                <section className="container mx-auto px-6 py-10 restaurant">
                    <h2 className="text-3xl font-semibold text-orange-500 mb-6 text-center">
                        Top Restaurants
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((restaurant) => (
                            <div key={restaurant} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                                <img 
                                    src={`https://source.unsplash.com/random/400x300/?restaurant,food${restaurant}`} 
                                    alt="Restaurant" 
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold mb-2">Restaurant Name {restaurant}</h3>
                                    <div className="flex items-center mb-2">
                                        <span className="text-yellow-400">★★★★☆</span>
                                        <span className="text-gray-400 ml-2">(24{restaurant} reviews)</span>
                                    </div>
                                    <p className="text-gray-300 mb-4">Italian • $$$ • Downtown</p>
                                    <Link 
                                        to={`/restaurant/${restaurant}`} 
                                        className="text-orange-500 hover:text-orange-400 font-semibold"
                                    >
                                        View Details & Book
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link 
                            to="/restaurants" 
                            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                        >
                            View All Restaurants
                        </Link>
                    </div>
                </section>

                {/* Special Offers Section */}
                <section className="container mx-auto px-6 py-10 bg-gray-800 rounded-lg my-10">
                    <h2 className="text-3xl font-semibold text-orange-500 mb-6 text-center">
                        Special Offers
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-r from-orange-600 to-orange-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-2">Weekend Brunch Special</h3>
                            <p className="text-gray-100 mb-4">20% off all brunch items every Saturday & Sunday</p>
                            <span className="inline-block bg-black text-orange-400 px-3 py-1 rounded-full text-sm font-semibold">
                                Use code: BRUNCH20
                            </span>
                        </div>
                        <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-2">Date Night Package</h3>
                            <p className="text-gray-100 mb-4">3-course meal for two with complimentary wine</p>
                            <span className="inline-block bg-black text-orange-400 px-3 py-1 rounded-full text-sm font-semibold">
                                Only $99
                            </span>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="container mx-auto px-6 py-10 bg-gray-900 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold text-orange-500 mb-6 text-center">
                        What Our Users Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <img 
                                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                                    alt="Emily R." 
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="text-orange-400 font-bold text-lg">Emily R.</h3>
                                    <p className="text-gray-400 text-sm">Food Blogger</p>
                                </div>
                            </div>
                            <p className="text-gray-300 italic mb-4">
                                "DineEasy makes booking a table so simple. I found amazing deals and
                                booked my favorite spot in seconds! The app is a game-changer for food lovers."
                            </p>
                            <div className="text-yellow-400">★★★★★</div>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <img 
                                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                                    alt="John D." 
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="text-orange-400 font-bold text-lg">John D.</h3>
                                    <p className="text-gray-400 text-sm">Frequent Diner</p>
                                </div>
                            </div>
                            <p className="text-gray-300 italic mb-4">
                                "The curated dining experiences are top-notch. I've discovered hidden gems
                                through DineEasy that I never would have found on my own."
                            </p>
                            <div className="text-yellow-400">★★★★☆</div>
                        </div>
                    </div>
                </section>

                {/* Newsletter Signup */}
                <section className="container mx-auto px-6 py-10">
                    <div className="bg-gradient-to-r from-orange-700 to-orange-900 rounded-lg p-8 text-center">
                        <h2 className="text-2xl font-bold mb-2">Get Exclusive Dining Deals</h2>
                        <p className="mb-6 max-w-2xl mx-auto">Subscribe to our newsletter for special offers and new restaurant announcements</p>
                        <form className="flex flex-col sm:flex-row justify-center gap-2 max-w-md mx-auto">
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className="flex-grow px-4 py-2 rounded-lg text-gray-900"
                                required
                            />
                            <button 
                                type="submit" 
                                className="bg-black hover:bg-gray-900 text-white font-bold px-6 py-2 rounded-lg transition duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-800 py-10 mt-10">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-orange-500 mb-4">DineEasy</h3>
                                <p className="text-gray-400">
                                    Making dining reservations simple, fast, and rewarding.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Explore</h4>
                                <ul className="space-y-2">
                                    <li><Link to="/restaurants" className="text-gray-400 hover:text-orange-500">Restaurants</Link></li>
                                    <li><Link to="/cities" className="text-gray-400 hover:text-orange-500">Cities</Link></li>
                                    <li><Link to="/cuisines" className="text-gray-400 hover:text-orange-500">Cuisines</Link></li>
                                    <li><Link to="/deals" className="text-gray-400 hover:text-orange-500">Special Deals</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Company</h4>
                                <ul className="space-y-2">
                                    <li><Link to="/about" className="text-gray-400 hover:text-orange-500">About Us</Link></li>
                                    <li><Link to="/blog" className="text-gray-400 hover:text-orange-500">Blog</Link></li>
                                    <li><Link to="/careers" className="text-gray-400 hover:text-orange-500">Careers</Link></li>
                                    <li><Link to="/press" className="text-gray-400 hover:text-orange-500">Press</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Connect</h4>
                                <ul className="space-y-2">
                                    <li><Link to="/contact" className="text-gray-400 hover:text-orange-500">Contact Us</Link></li>
                                    <li><Link to="/help" className="text-gray-400 hover:text-orange-500">Help Center</Link></li>
                                    <li><Link to="/res_partnership" className="text-gray-400 hover:text-orange-500">Partner With Us</Link></li>
                                    <li className="flex space-x-4 mt-4">
                                        <a href="#" className="text-gray-400 hover:text-orange-500">FB</a>
                                        <a href="#" className="text-gray-400 hover:text-orange-500">IG</a>
                                        <a href="#" className="text-gray-400 hover:text-orange-500">TW</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                            <p className="text-gray-400 text-sm">
                                © 2024 DineEasy. All rights reserved.
                            </p>
                            <p className="text-gray-500 text-xs mt-2">
                                Built with ❤️ by food lovers for food lovers.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Home;