import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Res_menu_operationDetails = () => {
    const navigate = useNavigate();
    const [selectedCuisines, setSelectedCuisines] = useState([]);
    const [openTime, setOpenTime] = useState("");
    const [closeTime, setCloseTime] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);
    const [restaurantImages, setRestaurantImages] = useState([]);
    const [foodImages, setFoodImages] = useState([]);
    const [menuImages, setMenuImages] = useState([]);

    const cuisines = [
        "North Indian", "South Indian", "Chinese", "Italian", "Mexican",
        "Thai", "Japanese", "Korean", "Continental", "American",
        "Greek", "Spanish", "French", "Lebanese", "Vietnamese",
        "Turkish", "Bengali", "Gujarati", "Rajasthani", "Mughlai",
        "Tibetan", "Seafood", "Street Food", "Desserts", "Biryani",
        "Pizza", "Burgers", "Pasta", "Healthy Food", "Vegan",
        "BBQ", "Cafe", "Bakery",
    ];

    const daysOfWeek = [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
    ];

    const timeOptions = [
        "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
        "12:00 PM", "01:00 PM", "02:00 PM", "08:00 PM",
        "09:00 PM", "10:00 PM", "11:00 PM", "12:00 AM", "01:00 AM",
    ];

    const handleCuisineClick = (cuisine) => {
        setSelectedCuisines(prev =>
            prev.includes(cuisine)
                ? prev.filter(item => item !== cuisine)
                : [...prev, cuisine]
        );
    };

    const handleDayClick = (day) => {
        setSelectedDays(prev =>
            prev.includes(day)
                ? prev.filter(item => item !== day)
                : [...prev, day]
        );
    };

    const handleImageUpload = (e, setImages) => {
        const files = Array.from(e.target.files);
        const imageUrls = files.map(file => URL.createObjectURL(file));
        setImages(prev => [...prev, ...imageUrls]);
    };

    const removeImage = (index, images, setImages) => {
        const newImages = [...images];
        URL.revokeObjectURL(newImages[index]); // Free memory
        newImages.splice(index, 1);
        setImages(newImages);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedCuisines.length || !openTime || !closeTime || !selectedDays.length) {
            alert("Please fill all required fields before proceeding.");
            return;
        }

        const formData = {
            selectedCuisines,
            openTime,
            closeTime,
            selectedDays,
            restaurantImages,
            foodImages,
            menuImages,
        };

        console.log("Form Data:", formData);
        localStorage.setItem("restaurantMenuDetails", JSON.stringify(formData));
        navigate("/restaurant-documents");
    };

    const ImageUploadSection = ({ label, text, images, setImages }) => (
        <div className="mb-6">
            <label className="block text-lg font-semibold mb-2 text-gray-700">
                {label}
            </label>
            <p className="text-gray-400 text-sm pb-2">{text}</p>
            <div className="border border-collapse border-blue-300 rounded-lg p-6 text-center cursor-pointer bg-blue-100 transition">
                <label className="text-blue-500 cursor-pointer flex flex-col justify-center items-center gap-2">
                    <img src="/public/image.png" alt="" className="h-12 w-12" />
                    <p className="font-bold">Upload images</p>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => handleImageUpload(e, setImages)}
                        className="hidden"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                        .jpeg, .png, .jpg formats up to 5MB
                    </p>
                </label>
            </div>
            <div className="flex gap-3 mt-2 overflow-x-auto">
                {images.map((src, i) => (
                    <div key={i} className="relative">
                        <img
                            src={src}
                            alt="preview"
                            className="w-20 h-20 object-cover rounded-lg shadow"
                        />
                        <button
                            type="button"
                            onClick={() => removeImage(i, images, setImages)}
                            className="absolute -top-2 -right-2 bg-gray-200  text-red-900 rounded-full w-3 h-5 flex items-center border-e-slate-950 justify-center text-lg"
                            aria-label="Remove image"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg flex flex-col lg:flex-row overflow-hidden">
                <Sidebar />

                <div className="w-full lg:w-2/3 p-8 space-y-8">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800">
                        Menu & Operational Details
                    </h2>

                    <ImageUploadSection
                        label="Add restaurant images"
                        text="Upload at least one entrance image of your restaurant, along with interior images, for your page."
                        images={restaurantImages}
                        setImages={setRestaurantImages}
                    />

                    <ImageUploadSection
                        label="Add food images (optional)"
                        text="These images will be shown on your restaurant's dining page."
                        images={foodImages}
                        setImages={setFoodImages}
                    />

                    <ImageUploadSection
                        label="Add dining menu images"
                        text="These images will be shown as your restaurant's menu on your dining page"
                        images={menuImages}
                        setImages={setMenuImages}
                    />

                    {/* Cuisine selection */}
                    <div className="mb-8">
                        <p className="text-lg font-semibold mb-3 text-gray-700">
                            Select cuisines offered
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-64 overflow-y-auto pr-2">
                            {cuisines.map((cuisine) => (
                                <button
                                    key={cuisine}
                                    type="button"
                                    className={`border rounded-xl px-4 py-2 text-sm font-medium transition ${
                                        selectedCuisines.includes(cuisine)
                                            ? "bg-orange-500 text-white border-orange-600"
                                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                    }`}
                                    onClick={() => handleCuisineClick(cuisine)}
                                >
                                    {cuisine}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Dining timings */}
                    <div className="mb-8">
                        <p className="text-lg font-semibold mb-3 text-gray-700">
                            Restaurant dining timings
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-4">
                            <select
                                value={openTime}
                                onChange={(e) => setOpenTime(e.target.value)}
                                className="border rounded-lg p-2 flex-1 bg-white"
                                required
                            >
                                <option value="">Open time</option>
                                {timeOptions.slice(0, 7).map(time => (
                                    <option key={time} value={time}>{time}</option>
                                ))}
                            </select>
                            <select
                                value={closeTime}
                                onChange={(e) => setCloseTime(e.target.value)}
                                className="border rounded-lg p-2 flex-1 bg-white"
                                required
                            >
                                <option value="">Close time</option>
                                {timeOptions.slice(7).map(time => (
                                    <option key={time} value={time}>{time}</option>
                                ))}
                            </select>
                        </div>

                        {/* Available Days */}
                        <p className="text-lg font-semibold mb-3 text-gray-700">
                            Available Days
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {daysOfWeek.map((day) => (
                                <button
                                    key={day}
                                    type="button"
                                    className={`border rounded-lg px-4 py-2 text-sm font-medium transition ${
                                        selectedDays.includes(day)
                                            ? "bg-orange-500 text-white border-orange-600"
                                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                    }`}
                                    onClick={() => handleDayClick(day)}
                                >
                                    {day}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl text-lg font-semibold transition"
                    >
                        Submit & Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Res_menu_operationDetails;