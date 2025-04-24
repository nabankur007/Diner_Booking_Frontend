import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar, FiClock, FiUsers } from "react-icons/fi";
import Api from "../../context/Api";

const user_data = JSON.parse(localStorage.getItem("user-data"));

const RestaurantBooking = ({ openingTime, closingTime, restaurantName }) => {
    const [formData, setFormData] = useState({
        username: user_data.username,
        restaurantName: restaurantName,
        bookingDate: null,
        bookingTime: "",
        guestCount: 1,
        specialRequests: "",
        status: "PENDING",
        createdAt: new Date().toISOString(),
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const generatebookingTimes = (start, end) => {
        const parseTime = (timeStr) => {
            const [hours, minutes] = timeStr.split(":").map(Number);
            return new Date(0, 0, 0, hours, minutes);
        };

        const formatTime = (date) =>
            date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

        const startTime = parseTime(start);
        const endTime = parseTime(end);
        const slots = [];

        while (startTime < endTime) {
            const slotStart = new Date(startTime);
            startTime.setHours(startTime.getHours() + 1);
            if (startTime <= endTime) {
                slots.push(
                    `${formatTime(slotStart)} - ${formatTime(startTime)}`
                );
            }
        }

        return slots;
    };

    const bookingTimes = generatebookingTimes(openingTime, closingTime);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "guestCount" ? Number(value) : value,
        }));
    };
    

    const handleDateChange = (date) => {
        setFormData((prev) => ({
            ...prev,
            bookingDate: date,
            bookingTime: "",
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.bookingDate)
            newErrors.bookingDate = "Please select a date";
        if (!formData.bookingTime)
            newErrors.bookingTime = "Please select a time slot";
        if (formData.guestCount < 1 || formData.guestCount > 16)
            newErrors.guestCount = "Please select 1–16 guests";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            try {
                const payload = {
                    ...formData,
                    bookingDate: formData.bookingDate.toISOString().split("T")[0], // only "YYYY-MM-DD"
                };
    
                const response = await Api.post(
                    "/api/bookings/create",
                    payload,
                    {
                        headers: {
                            Authorization: `Bearer ${user_data.jwtToken}`,
                        },
                    }
                );
                console.log(response.data);
                alert(
                    `Reservation confirmed for ${formData.bookingDate.toDateString()} at ${formData.bookingTime}`
                );
                navigate("/");
            } catch (error) {
                console.error("Booking error:", error);
                alert("There was a problem processing your reservation.");
            } finally {
                setIsSubmitting(false);
            }
        }
    };
    

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Make a Reservation
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Date Picker */}
                <div className="space-y-1">
                    <label className="flex items-center text-gray-700 font-medium">
                        <FiCalendar className="mr-2" /> Date
                    </label>
                    <DatePicker
                        selected={formData.bookingDate}
                        onChange={handleDateChange}
                        minDate={new Date()}
                        className={`w-full p-3 border rounded-lg ${
                            errors.bookingDate
                                ? "border-red-500"
                                : "border-gray-300"
                        }`}
                        dateFormat="MMMM d, yyyy"
                        placeholderText="Select a date"
                        popperPlacement="bottom"
                    />
                    {errors.bookingDate && (
                        <p className="text-red-500 text-sm">
                            {errors.bookingDate}
                        </p>
                    )}
                </div>

                {/* Time Slot */}
                <div className="space-y-1">
                    <label className="flex items-center text-gray-700 font-medium">
                        <FiClock className="mr-2" /> Time Slot
                    </label>
                    <select
                        name="bookingTime"
                        value={formData.bookingTime}
                        onChange={handleChange}
                        disabled={!formData.bookingDate}
                        className={`w-full p-3 border rounded-lg ${
                            errors.bookingTime
                                ? "border-red-500"
                                : "border-gray-300"
                        }`}
                    >
                        <option value="">Select a time</option>
                        {bookingTimes.map((slot, index) => (
                            <option key={index} value={slot}>
                                {slot}
                            </option>
                        ))}
                    </select>
                    {errors.bookingTime && (
                        <p className="text-red-500 text-sm">
                            {errors.bookingTime}
                        </p>
                    )}
                </div>

                {/* Guests */}
                <div className="space-y-1">
                    <label className="flex items-center text-gray-700 font-medium">
                        <FiUsers className="mr-2" /> Number of Guests
                    </label>
                    <select
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className={`w-full p-3 border rounded-lg ${
                            errors.guestCount
                                ? "border-red-500"
                                : "border-gray-300"
                        }`}
                    >
                        {Array.from({ length: 16 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1} {i === 0 ? "guest" : "guests"}
                            </option>
                        ))}
                    </select>
                    {errors.guestCount && (
                        <p className="text-red-500 text-sm">
                            {errors.guestCount}
                        </p>
                    )}
                </div>

                {/* Special Requests */}
                <div className="space-y-1">
                    <label className="text-gray-700">
                        Special Requests (Optional)
                    </label>
                    <textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        rows={3}
                        placeholder="Dietary restrictions, allergies, celebrations, etc."
                    />
                </div>

                

                {/* Submit Button */}
                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 px-6 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors ${
                            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                    >
                        {isSubmitting ? "Processing..." : "Confirm Reservation"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RestaurantBooking;
