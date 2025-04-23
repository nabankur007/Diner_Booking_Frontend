import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from "../context/Api";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();

    const validateForm = () => {
        if (!username || !email || !phone || !password || !confirmPassword) {
            setError("All fields are required.");
            return false;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return false;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return false;
        }
        if (!/^[\d\+\-\.\(\)\/\s]*$/.test(phone)) {
            setError("Please enter a valid phone number.");
            return false;
        }
        setError("");
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await Api.post("/api/auth/public/signup", {
                    username,
                    email,
                    phone,
                    password,
                    role: ["user"],
                });

                if (response && response.data) {
                    localStorage.setItem("user-data", JSON.stringify(response.data));
                    console.log("Sign up successful:", response.data);
                    setError("");
                    navigate("/");
                }
            } catch (error) {
                setError("Sign up failed. Please check your credentials and try again.");
                console.error("Signup failed:", error.message);
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (

        <div
        className="flex items-center justify-center min-h-screen bg-no-repeat bg-cover bg-center"
        style={{
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEG8IHVADhqh2rBuP-hBnheRMbKVfouCCo7g&s')`,
        }}
    >
    


        
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-xl mt-8">
                <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
                    Create an Account
                </h2>
                {error && <p className="mb-4 text-red-500 text-center">{error}</p>}
                {success && (
                    <p className="mb-4 text-green-500 text-center">{success}</p>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-1">
                        <label className="block mb-2 text-gray-300">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-700 text-gray-200"
                        />
                    </div>
                    <div className="mb-1">
                        <label className="block mb-2 text-gray-300">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-700 text-gray-200"
                        />
                    </div>
                    <div className="mb-1">
                        <label className="block mb-2 text-gray-300">Phone</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="w-full px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-700 text-gray-200"
                        />
                    </div>
                    <div className="mb-1">
                        <label className="block mb-2 text-gray-300">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-700 text-gray-200"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </button>
                        </div>
                    </div>
                    <div className="mb-1">
                        <label className="block mb-2 text-gray-300">Confirm Password</label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="w-full px-4 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-700 text-gray-200"
                            />
                            <button
                                type="button"
                                onClick={toggleConfirmPasswordVisibility}
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
                            >
                                {showConfirmPassword ? "🙈" : "👁️"}
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-3 bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition duration-300"
                    >
                        Sign Up
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
                        <button className="p-3 bg-white rounded-full shadow hover:scale-110 transition-transform duration-200">
                            <img
                            src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                            alt="Google Mail"
                            className="w-6 h-6"
                            />
                        </button>

                        {/* Facebook */}
                        <button className="p-3 bg-white rounded-full shadow hover:scale-110 transition-transform duration-200">
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









                <p className="mt-2 text-center text-gray-400">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-orange-500 font-semibold hover:underline hover:text-orange-400 transition-colors"
                    >
                        Login
                    </Link>
                </p>
            </div>
        
        </div>
    );
};

export default Signup;