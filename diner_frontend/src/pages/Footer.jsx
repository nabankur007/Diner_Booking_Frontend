import React from 'react';
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaShieldAlt,
  FaPlane,
  FaHeadphonesAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 text-sm m-0 p-0">
      {/* Top Strip */}
      <div className="bg-black text-white px-4 md:px-16 py-2 flex flex-col md:flex-row justify-between items-center text-xs">
        <div className="flex items-center gap-2 mb-1 md:mb-0">
          <FaShieldAlt className="text-green-400" />
          <span>100% Secure Checkout</span>
        </div>
        <div className="flex items-center gap-2 mb-1 md:mb-0 ">
          <FaPlane className="text-blue-400" />
          <span>Shipping to 70+ Countries</span>
        </div>
        <div className="flex items-center gap-2 mr-20">
          <FaHeadphonesAlt className="text-yellow-400" />
          <span>24/7 Support</span>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-4 md:px-16 py-6 grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
        {/* Logo & Social Media */}
        <div className="md:col-span-1">
          <h2 className="text-xl font-bold mb-2">

              <div className="text-3xl font-bold text-orange-500">
                               
                                    DineEasy
                                
              </div>



          </h2>
          <p className="font-medium mb-3">Follow us</p>
          <div className="flex gap-4 text-3xl mb-4">
              <a
                href="https://www.instagram.com/accounts/login/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
                aria-label="Instagram"
              >
                <FaInstagram className="text-pink-500" />
              </a>
              <a
                href="https://www.facebook.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
                aria-label="Facebook"
              >
                <FaFacebook className="text-blue-600" />
              </a>
              <a
                href="https://twitter.com/i/flow/login"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
                aria-label="Twitter"
              >
                <FaTwitter className="text-sky-500" />
              </a>
              
            </div>

            {/* Google Play Badge */}
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Play Store"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-32 hover:scale-105 transition"
              />
            </a>
          </div>

      

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-2">COMPANY</h3>
          <ul className="space-y-1">
            <li><a href="/about">About us</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/tos">Terms of Use</a></li>
            
          </ul>
        </div>

        {/* User */}
        <div>
          <h3 className="font-semibold mb-2">For Customer</h3>
          <ul className="space-y-1">
            <li><a href="/signup">Create Account</a></li>
            <li><a href="/login">Apps for You</a></li>
            
          </ul>
        </div>

          {/* Business Partners */}
          <div>
          <h3 className="font-semibold mb-2">For Business Partners</h3>
          <ul className="space-y-1">
            <li><a href="/res_registration">Add Your Restaurant</a></li>
            <li><a href="/">Apps for You</a></li>
            
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-1">
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <textarea
            rows="2"
            placeholder="Leave a comment..."
            className="w-full p-2 text-sm border rounded mb-2 resize-none focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-2 text-sm border rounded mb-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-sm">
            Send
          </button>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="text-center text-xs text-gray-500 py-2 border-t m-0">
        &copy; {new Date().getFullYear()} 
        
        <div className="container mx-auto text-center">
                                <p className="text-gray-400 text-sm">
                                    <span className="text-orange-500 font-semibold">DineEasy</span>. All rights reserved.
                                </p>
                                <p className="text-gray-500 text-xs mt-1">
                                    Crafted with 🍷 & ❤️ by passionate foodies.
                                </p>
                            
                            </div>
      </div>
    </footer>
  );
};

export default Footer;