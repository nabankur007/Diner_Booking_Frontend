import React from "react";
import {
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaShieldAlt,
    FaPlane,
    FaHeadphonesAlt,
    FaApple,
    FaCcVisa,
    FaCcMastercard,
    FaCcPaypal,
    FaCcAmex
} from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-700">
            {/* Trust Badges */}
            <div className="bg-gray-100 px-4 md:px-16 py-4 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-xs border-b">
                <div className="flex items-center gap-2">
                    <FaShieldAlt className="text-green-500 text-lg" />
                    <div>
                        <p className="font-medium">100% Secure Checkout</p>
                        <p className="text-gray-500">PCI compliant payment processing</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <FaPlane className="text-blue-500 text-lg" />
                    <div>
                        <p className="font-medium">Worldwide Shipping</p>
                        <p className="text-gray-500">Fast delivery to 70+ countries</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <FaHeadphonesAlt className="text-yellow-500 text-lg" />
                    <div>
                        <p className="font-medium">24/7 Support</p>
                        <p className="text-gray-500">Dedicated customer service</p>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="px-4 md:px-16 py-8 grid grid-cols-2 md:grid-cols-5 gap-8 items-start">
                {/* Brand & Social */}
                <div className="col-span-2 md:col-span-1">
                    <div className="text-3xl font-bold text-orange-500 mb-3">DineEasy</div>
                    <p className="text-gray-500 mb-4">Discover the best dining experiences near you.</p>
                    
                    <div className="mb-6">
                        <p className="font-medium mb-2">Follow us</p>
                        <div className="flex gap-3 text-xl">
                            <a href="https://instagram.com" target="_blank" rel="noopener" className="text-pink-500 hover:text-pink-600 transition">
                                <FaInstagram />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-700 transition">
                                <FaFacebook />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener" className="text-sky-400 hover:text-sky-500 transition">
                                <FaTwitter />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener" className="text-blue-700 hover:text-blue-800 transition">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    <div>
                        <p className="font-medium mb-2">Get the app</p>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="hover:opacity-90 transition">
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                                    alt="Google Play" 
                                    className="h-10"
                                />
                            </a>
                            <a href="#" className="hover:opacity-90 transition">
                                <div className="flex items-center justify-center bg-black text-white rounded h-10 px-3 gap-2">
                                    <FaApple className="text-lg" />
                                    <div className="text-xs text-left">
                                        <div>Download on the</div>
                                        <div className="font-semibold text-sm">App Store</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Company Links */}
                <div>
                    <h3 className="font-semibold text-gray-800 mb-4 uppercase text-sm">Company</h3>
                    <ul className="space-y-3">
                        <li><a href="/about" className="text-gray-600 hover:text-orange-500 transition">About Us</a></li>
                        <li><a href="/careers" className="text-gray-600 hover:text-orange-500 transition">Careers</a></li>
                        <li><a href="/work_in_progress" className="text-gray-600 hover:text-orange-500 transition">Blog</a></li>
                        <li><a href="/work_in_progress" className="text-gray-600 hover:text-orange-500 transition">Press</a></li>
                        <li><a href="/privacy" className="text-gray-600 hover:text-orange-500 transition">Privacy Policy</a></li>
                        <li><a href="/tos" className="text-gray-600 hover:text-orange-500 transition">Terms of Service</a></li>
                    </ul>
                </div>

                {/* For Customers */}
                <div>
                    <h3 className="font-semibold text-gray-800 mb-4 uppercase text-sm">For Customers</h3>
                    <ul className="space-y-3">
                        <li><a href="/signup" className="text-gray-600 hover:text-orange-500 transition">Create Account</a></li>
                        <li><a href="/login" className="text-gray-600 hover:text-orange-500 transition">Sign In</a></li>
                        <li><a href="/work_in_progress" className="text-gray-600 hover:text-orange-500 transition">Gift Cards</a></li>
                        <li><a href="/work_in_progress" className="text-gray-600 hover:text-orange-500 transition">Help Center</a></li>
                        <li><a href="/work_in_progress" className="text-gray-600 hover:text-orange-500 transition">FAQs</a></li>
                        <li><a href="/work_in_progress" className="text-gray-600 hover:text-orange-500 transition">Contact Us</a></li>
                    </ul>
                </div>

                {/* For Partners */}
                <div>
                    <h3 className="font-semibold text-gray-800 mb-4 uppercase text-sm">For Partners</h3>
                    <ul className="space-y-3">
                        <li><a href="/res_partnership" className="text-gray-600 hover:text-orange-500 transition">Partner With Us</a></li>
                        {/* <li><a href="/restaurants" className="text-gray-600 hover:text-orange-500 transition">Add Your Restaurant</a></li> */}
                        {/* <li><a href="/driver" className="text-gray-600 hover:text-orange-500 transition">Become a Driver</a></li> */}
                        <li><a href="/work_in_progress" className="text-gray-600 hover:text-orange-500 transition">Business Solutions</a></li>
                        <li><a href="/work_in_progress" className="text-gray-600 hover:text-orange-500 transition">Merchant Center</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="col-span-2 md:col-span-1">
                    <h3 className="font-semibold text-gray-800 mb-4 uppercase text-sm">Stay Updated</h3>
                    <p className="text-gray-500 mb-4 text-sm">Subscribe to our newsletter for the latest updates and offers.</p>
                    
                    <form className="space-y-3">
                        <div>
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition font-medium"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Payment Methods & Copyright */}
            <div className="bg-gray-50 px-4 md:px-16 py-6 border-t">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Payment Methods */}
                    <div className="flex flex-wrap justify-center gap-3 text-2xl text-gray-400">
                        <FaCcVisa className="hover:text-gray-600 transition" />
                        <FaCcMastercard className="hover:text-gray-600 transition" />
                        <FaCcPaypal className="hover:text-gray-600 transition" />
                        <FaCcAmex className="hover:text-gray-600 transition" />
                        <SiAmericanexpress className="hover:text-gray-600 transition" />
                    </div>
                    
                    {/* Copyright */}
                    <div className="text-center md:text-right">
                        <p className="text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} DineEasy. All rights reserved.
                        </p>
                        <p className="text-gray-400 text-xs mt-1">
                            Made with ❤️ by food lovers around the world.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;