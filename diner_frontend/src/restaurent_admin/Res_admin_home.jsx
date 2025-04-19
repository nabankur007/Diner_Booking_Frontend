import React from "react";
import { useNavigate } from "react-router-dom";

const Res_admin_home = () => {
    const navigate = useNavigate();
    
    const handleRegisterClick = () => {
        navigate("/res_Registration");
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            {/* Hero section */}
            <section className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Partner with <span className="text-blue-600">DineEasy</span> and grow your business
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    Join our network of restaurants and reach thousands of hungry customers
                </p>
                <button
                    type="button"
                    className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-8 py-3 transition duration-300 transform hover:scale-105"
                    onClick={handleRegisterClick}
                >
                    Register your restaurant
                </button>
            </section>

            {/* Document section */}
            <section className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Get Started - It only takes 10 minutes
                </h2>
                <p className="text-gray-600 mb-8">
                    Please keep these documents and details ready for a smooth sign-up
                </p>
                
                <ul className="space-y-4">
                    {[
                        "PAN card",
                        "GST number",
                        "FSSAI license",
                        "Menu & profile food image",
                        "Bank account details"
                    ].map((item, index) => (
                        <li key={index} className="flex items-start">
                            <svg
                                className="w-5 h-5 mt-1 mr-3 text-green-500 shrink-0"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="text-lg text-gray-700">{item}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 mb-4">Have questions about the registration process?</p>
                    <button 
                        className="text-blue-600 font-medium hover:text-blue-800 hover:underline"
                        onClick={() => navigate("/contact")}
                    >
                        Contact our support team
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Res_admin_home;