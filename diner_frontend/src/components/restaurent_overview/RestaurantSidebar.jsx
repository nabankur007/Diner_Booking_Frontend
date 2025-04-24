const RestaurantSidebar = ({ restaurantDetails }) => {
    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
                <div className="space-y-2">
                    {restaurantDetails.openingDays?.map((day, index) => (
                        <div key={index} className="flex justify-between">
                            <span>{day}</span>
                            <span>
                                {restaurantDetails.openingTime} -{" "}
                                {restaurantDetails.closingTime}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Location</h3>
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden border p-4">
                    <p className="text-sm text-gray-700 font-medium mb-2">
                        {restaurantDetails.area}, {restaurantDetails.landmark},{" "}
                        {restaurantDetails.city}
                    </p>
                    <div className="w-full h-full rounded-md overflow-hidden">
                        <iframe
                            title="restaurant-location"
                            className="w-full h-full"
                            src={`https://maps.google.com/maps?q=${restaurantDetails.latitude},${restaurantDetails.longitude}&z=15&output=embed`}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="text-lg font-semibold mb-4">FAQs</h3>
                        <div className="space-y-3 text-gray-700">
                            <div>
                                <strong>
                                    Do I need to reserve in advance?
                                </strong>
                                <p>
                                    It's recommended, especially on weekends or
                                    holidays.
                                </p>
                            </div>
                            <div>
                                <strong>Is there parking available?</strong>
                                <p>
                                    Yes, valet and self-parking options are
                                    available.
                                </p>
                            </div>
                            <div>
                                <strong>
                                    Do you accommodate dietary restrictions?
                                </strong>
                                <p>
                                    Absolutely! Let the staff know your
                                    preferences.
                                </p>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default RestaurantSidebar;
