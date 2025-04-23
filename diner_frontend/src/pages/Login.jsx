import React, { useState } from "react";
import Api from "../context/Api";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import axios from 'axios';
import { useEffect } from 'react';


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();




    useEffect(() => {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: 'YOUR_FACEBOOK_APP_ID',
                cookie: true,
                xfbml: true,
                version: 'v18.0'
            });
        };
    }, []);
    






  




    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError("Username and password are required.");
            return;
        }

        try {
            const response = await Api.post("/api/auth/public/signin", {
                username,
                password,
            });

            if (response && response.data) {
                localStorage.setItem("user-data", JSON.stringify(response.data));
                console.log("Login successful:", response.data);
                setError("");
                navigate("/");
            }
        } catch (error) {
            setError("Login failed. Please check your credentials and try again.");
            console.error("Login failed:", error.message);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setError("");
        name === "username" ? setUsername(value) : setPassword(value);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (

        <div
        className="flex items-center justify-center min-h-screen bg-no-repeat bg-cover bg-center"
        style={{
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEG8IHVADhqh2rBuP-hBnheRMbKVfouCCo7g&s')`,
        }}
    >

       


        
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
                    Welcome Back to Diner
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* Username Field */}
                    <div className="mb-6">
                        <label className="block mb-2 text-gray-300">Username or Email</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter username or email"
                            className="w-full px-4 py-3 border border-gray-600 rounded-md focus:ring-2 focus:ring-orange-500 outline-none bg-gray-700 text-gray-200"
                            value={username}
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-6 relative">
                        <label className="block mb-2 text-gray-300">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter password"
                            className="w-full px-4 py-3 border border-gray-600 rounded-md focus:ring-2 focus:ring-orange-500 outline-none bg-gray-700 text-gray-200"
                            value={password}
                            onChange={handleInputChange}
                        />
                        <button
                            type="button"
                            onClick={toggleShowPassword}
                            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </button>
                    </div>

                    {/* Validation Error */}
                    {error && <p className="mb-4 text-red-500 text-sm">{error}</p>}

                    {/* Forgot Password */}
                    <div className="flex justify-end items-center">
                        <Link
                            to="/forget_password"
                            className="text-orange-500 text-sm hover:text-orange-600"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        disabled={!username || !password}
                        className="mt-4 w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition duration-300 disabled:opacity-50"
                    >
                        Login
                    </button>
                </form>


                 {/* Social Login Divider */}
                        <div className="flex items-center justify-center my-6">
                            <hr className="border-gray-600 flex-grow" />
                            <span className="mx-4 text-gray-400">Or</span>
                            <hr className="border-gray-600 flex-grow" />
                        </div>

                        {/* Social Login Icons */}
                        <div className="flex justify-center gap-6">

                        {/* Google (Gmail) */}
                             <button
                               
                                className="p-3 bg-white rounded-full shadow hover:scale-110 transition-transform duration-200"
                            >
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                                    alt="Google Mail"
                                    className="w-6 h-6"
                                />
                            </button>

                        {/* Facebook */}

                        <button
                           
                            className="p-3 bg-white rounded-full shadow hover:scale-110 transition-transform duration-200">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                                alt="Facebook"
                                className="w-6 h-6"
                            />
                        </button>

                        
                        {/* Instagram */}
                        <button className="p-3 bg-white rounded-full shadow hover:scale-110 transition-transform duration-200">
                            <img
                            src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
                            alt="Instagram"
                            className="w-6 h-6"
                            />
                        </button>

                        {/* Twitter */}
                        <button className="p-3 bg-white rounded-full shadow hover:scale-110 transition-transform duration-200">
                            <img
                            src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                            alt="Twitter"
                            className="w-6 h-6"
                            />
                        </button>
                        </div>








                {/* Signup Redirect */}
                <p className="mt-6 text-center text-gray-400">
                    Don&apos;t have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-orange-500 font-semibold hover:underline hover:text-orange-600 transition-colors"
                    >
                        Sign up
                    </Link>
                </p>
            </div>





           





        </div>
    );
};

export default Login;
