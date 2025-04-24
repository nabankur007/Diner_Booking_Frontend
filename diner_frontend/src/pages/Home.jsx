import React from "react";
import { Link } from "react-router-dom";
import { FiClock, FiStar, FiMapPin, FiPhone, FiMail, FiHeart } from "react-icons/fi";

const Home = () => {
    // Local dining experiences with orange theme
    const diningExperiences = [
        {
            id: 1,
            name: "Citrus & Spice",
            type: "Modern Fusion",
            description: "Zesty flavor combinations with seasonal ingredients",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            perfectFor: "Date nights • Adventurous eaters"
        },
        {
            id: 2,
            name: "Golden Hour Lounge",
            type: "Cocktail Bar",
            description: "Sunset views with craft cocktails and small plates",
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            perfectFor: "Happy hour • Social gatherings"
        },
        {
            id: 3,
            name: "Harvest Table",
            type: "Farm-to-Table",
            description: "Rustic dishes highlighting local producers",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            perfectFor: "Foodies • Sustainable dining"
        }
    ];

    // Seasonal offerings
    const seasonalFeatures = [
        {
            title: "Autumn Tasting Menus",
            description: "Chef's seasonal creations with wine pairings",
            icon: "🍂"
        },
        {
            title: "Outdoor Firepit Dining",
            description: "Cozy evenings with mulled drinks",
            icon: "🔥"
        },
        {
            title: "Truffle Specials",
            description: "Limited-time dishes featuring fresh truffles",
            icon: "🍄"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-orange-50 to-white py-20 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Savor the <span className="text-orange-500">Flavors</span> of the Season
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Discover handpicked dining experiences tailored to your taste
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link 
                            to="/explore_restaurant" 
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition shadow-md hover:shadow-lg"
                        >
                            Explore Local Favorites
                        </Link>
                        <Link 
                            to="/" 
                            className="bg-white hover:bg-orange-50 border border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-medium transition shadow-sm"
                        >
                            View Seasonal Specials
                        </Link>
                    </div>
                </div>
            </section>

            {/* Dining Experiences */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
                        Curated Dining Experiences
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {diningExperiences.map(experience => (
                            <div key={experience.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1 border border-orange-100">
                                <div className="relative h-48 overflow-hidden">
                                    <img 
                                        src={experience.image} 
                                        alt={experience.name} 
                                        className="w-full h-full object-cover transition duration-500 hover:scale-105"
                                    />
                                    <div className="absolute bottom-0 left-0 bg-orange-500/90 text-white text-xs font-semibold px-2 py-1 m-2 rounded">
                                        {experience.type}
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{experience.name}</h3>
                                    <p className="text-gray-600 mb-4">{experience.description}</p>
                                    <div className="flex items-center text-sm text-orange-600">
                                        <FiHeart className="mr-2" />
                                        <span>{experience.perfectFor}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Seasonal Highlights */}
            <section className="py-16 px-6 bg-orange-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
                        This Season's Highlights
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {seasonalFeatures.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border-l-4 border-orange-400">
                                <div className="text-3xl mb-4 text-orange-500">{feature.icon}</div>
                                <h3 className="text-xl font-medium text-gray-800 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Personalized CTA */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl p-8 text-center text-white shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Need Dining Inspiration?</h2>
                    <p className="mb-6 text-orange-100">Our concierge service will match you with perfect restaurants based on your preferences</p>
                    <Link 
                        to="/" 
                        className="inline-block bg-white text-orange-600 hover:bg-orange-100 px-6 py-3 rounded-lg font-medium transition shadow-md hover:shadow-lg"
                    >
                        Get Personalized Recommendations
                    </Link>
                </div>
            </section>

            {/* Local Insights */}
            <section className="py-16 px-6 bg-orange-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
                        Local Dining Insights
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-orange-400">
                            <h3 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                                <FiClock className="mr-2 text-orange-500" />
                                Reservation Tips
                            </h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <span className="bg-orange-100 text-orange-600 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                                    <span>Book weekend dinners 2-3 weeks in advance for popular spots</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-orange-100 text-orange-600 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                                    <span>Late lunch (1:30-2:30pm) often has immediate availability</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-orange-400">
                            <h3 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                                <FiStar className="mr-2 text-orange-500" />
                                Hidden Gems
                            </h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <span className="bg-orange-100 text-orange-600 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                                    <span>Many chefs offer tasting menus only on weekdays</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-orange-100 text-orange-600 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                                    <span>Bar seating often provides the best chef interactions</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;