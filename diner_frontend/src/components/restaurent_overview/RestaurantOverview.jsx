import { FiClock, FiMapPin, FiPhone } from "react-icons/fi";
import { TbToolsKitchen2 } from "react-icons/tb";

const RestaurantOverview = ({ restaurantDetails }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
                About {restaurantDetails.restaurantName}
            </h2>
            <p className="text-gray-600 mb-6">
                {restaurantDetails.description}
            </p>
            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Quick Info</h3>
                    <div className="flex items-center gap-2">
                        <FiClock className="text-gray-500" />
                        <span>Average Cost: ₹800 for two</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <TbToolsKitchen2 className="text-gray-500" />
                        <span>
                            Cuisines: {restaurantDetails.cuisines.join(", ")}
                        </span>
                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Contact</h3>
                    <div className="flex items-center gap-2">
                        <FiPhone className="text-gray-500" />
                        <span>{restaurantDetails.phoneNumber}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FiMapPin className="text-gray-500" />
                        <span>{`${restaurantDetails.area}, ${restaurantDetails.landmark}, ${restaurantDetails.city}`}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantOverview;
