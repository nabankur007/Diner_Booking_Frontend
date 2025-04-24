import React, { useEffect, useState } from "react";
import {
    FiCalendar,
    FiClock,
    FiUsers,
    FiX,
    FiCheck,
    FiAlertCircle,
} from "react-icons/fi";
import Api from "../context/Api";
import { Link, useNavigate } from "react-router-dom";

const UserBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const user_data = JSON.parse(localStorage.getItem("user-data"));

    const navigate = useNavigate();
    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await Api.get(
                    `/api/bookings/user/${user_data.username}`,
                    {
                        headers: {
                            Authorization: `Bearer ${user_data.jwtToken}`,
                        },
                    }
                );
                setBookings(response.data);
            } catch (err) {
                console.error("Failed to fetch bookings:", err);
                setError("Unable to load your bookings.");
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    const handleCancel = async (bookingId) => {
        const confirmCancel = window.confirm(
            "Are you sure you want to cancel this booking?"
        );
        if (!confirmCancel) return;

        try {
            await Api.put(
                `/api/bookings/${bookingId}/cancel`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${user_data.jwtToken}`,
                    },
                }
            );
            setBookings((prev) =>
                prev.map((b) =>
                    b.bookingId === bookingId
                        ? { ...b, status: "CANCELLED" }
                        : b
                )
            );
        } catch (err) {
            console.error("Cancel error:", err);
            alert("Failed to cancel booking.");
        }
    };

    if (loading)
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
            </div>
        );

    if (error)
        return (
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <FiAlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm text-red-700">{error}</p>
                    </div>
                </div>
            </div>
        );

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                <FiCalendar className="mr-2 text-orange-500" />
                My Reservations
            </h1>

            {bookings.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                    <p className="text-gray-500 mb-4">
                        You don't have any bookings yet
                    </p>
                    <button
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition"
                        onClick={() => (window.location.href = "/restaurants")}
                    >
                        Browse Restaurants
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {bookings.map((booking) => (
                        <div
                            key={booking.bookingId}
                            className={`bg-white rounded-xl shadow-md overflow-hidden border-l-4 ${
                                booking.status === "CONFIRMED"
                                    ? "border-green-500"
                                    : booking.status === "CANCELLED"
                                    ? "border-gray-400"
                                    : "border-yellow-500"
                            }`}
                        >
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-bold text-gray-800 truncate">
                                        {booking.restaurantName}
                                    </h3>
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            booking.status === "CONFIRMED"
                                                ? "bg-green-100 text-green-800"
                                                : booking.status === "CANCELLED"
                                                ? "bg-gray-100 text-gray-800"
                                                : "bg-yellow-100 text-yellow-800"
                                        }`}
                                    >
                                        {booking.status}
                                    </span>
                                </div>

                                <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex items-center">
                                        <FiCalendar className="mr-2 text-orange-500" />
                                        <span>
                                            {new Date(
                                                booking.bookingDate
                                            ).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <FiClock className="mr-2 text-orange-500" />
                                        <span>{booking.bookingTime}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FiUsers className="mr-2 text-orange-500" />
                                        <span>
                                            {booking.guestCount}{" "}
                                            {booking.guestCount === 1
                                                ? "guest"
                                                : "guests"}
                                        </span>
                                    </div>
                                </div>

                                {booking.specialRequests && (
                                    <div className="mt-3 pt-3 border-t border-gray-100">
                                        <p className="text-sm text-gray-500">
                                            <span className="font-medium">
                                                Notes:
                                            </span>{" "}
                                            {booking.specialRequests}
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="bg-gray-50 px-5 py-3 flex justify-end gap-2">
                                {booking.status !== "CANCELLED" && (
                                    <button
                                        onClick={() =>
                                            handleCancel(booking.bookingId)
                                        }
                                        className="flex items-center px-3 py-1.5 bg-white border border-red-200 text-red-600 rounded-md text-sm font-medium hover:bg-red-50 transition"
                                    >
                                        <FiX className="mr-1" /> Cancel
                                    </button>
                                )}
                                <Link
                                    to={`/restaurant/${encodeURIComponent(
                                        booking.restaurantName
                                    )}`}
                                    className="flex items-center px-3 py-1.5 bg-orange-500 text-white rounded-md text-sm font-medium hover:bg-orange-600 transition"
                                >
                                    <FiCheck className="mr-1" /> View
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UserBookings;
