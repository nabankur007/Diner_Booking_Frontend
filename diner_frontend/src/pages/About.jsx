import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-5">
                {/* Features Section */}
                <section className="container mx-auto">
                    <h2 className="text-3xl font-semibold text-orange-500 mb-6 text-center">
                        Why Choose DineEasy?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <img
                                src="https://www.wallpaperflare.com/static/284/272/1013/restaurant-cafe-appliances-tables-wallpaper.jpg"
                                alt="Book a Table"
                                className="rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-bold text-orange-400 mb-2">
                                Hassle-Free Table Booking
                            </h3>
                            <p className="text-gray-300">
                                Reserve your table at top-rated restaurants in
                                just a few clicks.
                            </p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <img
                                src="https://www.eatthis.com/wp-content/uploads/sites/4/2022/11/fine-dining-table.jpg?quality=82&strip=1"
                                alt="Exclusive Deals"
                                className="rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-bold text-orange-400 mb-2">
                                Exclusive Deals
                            </h3>
                            <p className="text-gray-300">
                                Enjoy special discounts and offers on premium
                                dining experiences.
                            </p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <img
                                src="https://www.momondo.in/himg/6d/ae/f2/leonardo-2653517-169232261-438228.jpg"
                                alt="Curated Experiences"
                                className="rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-bold text-orange-400 mb-2">
                                Curated Experiences
                            </h3>
                            <p className="text-gray-300">
                                Discover handpicked restaurants and events for
                                every occasion.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Introduction */}
                <div className="mb-8 text-lg text-gray-700 dark:text-gray-300 py-5">
                    <p className="mb-4">
                        At <strong>DineEasy</strong>, we believe that dining
                        should be as simple and delightful as the meals
                        themselves. Our mission is to bring food lovers and
                        exceptional restaurants together by providing a seamless
                        platform for discovering, booking, and enjoying the
                        perfect dining experience.
                    </p>
                    <p className="mb-4">
                        Whether you're planning a romantic dinner, a family
                        outing, or a quick lunch with colleagues, DineEasy makes
                        it easy to find the right restaurant, explore menus, and
                        reserve your table in just a few clicks.
                    </p>
                </div>


                {/* Our Vision Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-orange-500">
                        Our Vision
                    </h2>
                    <p>
                        Our vision is to redefine how people dine out. By
                        combining technology with the joy of sharing meals, we
                        aim to create a dining experience that's personalized,
                        efficient, and accessible to everyone. At DineEasy,
                        we're not just connecting people to restaurants; we're
                        connecting them to memorable moments.
                    </p>
                </div>

                {/* Our Services Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-orange-500">
                        Our Services
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            Seamless restaurant reservations with instant
                            confirmation.
                        </li>
                        <li>
                            Explore menus and read reviews to make informed
                            decisions.
                        </li>
                        <li>
                            Personalized recommendations tailored to your
                            preferences.
                        </li>
                        <li>
                            Exclusive offers and discounts for loyal diners.
                        </li>
                        <li>
                            24/7 customer support to assist with all your dining
                            needs.
                        </li>
                    </ul>
                </div>

                {/* Call-to-Action */}
                <div className="text-center mt-12">
                    <h3 className="text-3xl font-bold mb-4 text-orange-500">
                        Ready to Experience the Best in Dining?
                    </h3>
                    <p className="mb-6">
                        Join thousands of food enthusiasts who trust DineEasy to
                        elevate their dining experiences. Reserve your next
                        table now and savor the difference!
                    </p>
                    <a
                        href="/signup"
                        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                        Sign Up Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
