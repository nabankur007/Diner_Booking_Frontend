import { FiClock, FiMapPin, FiStar, FiDollarSign } from "react-icons/fi";
import { TbToolsKitchen2 } from "react-icons/tb";

const RestaurantHeader = ({ restaurantDetails }) => {
    return (
        <div className="p-6 border-b">
            <h1 className="text-3xl font-bold mb-2">
                {restaurantDetails.restaurantName}
            </h1>
            <div className="flex items-center gap-4 text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                    <FiStar className="text-yellow-400" />
                    <span>{restaurantDetails.averageRating.toFixed(1)}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                    <TbToolsKitchen2 />
                    <span>{restaurantDetails.cuisines.join(", ")}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                    <FiDollarSign />
                    <span>₹₹ (Mid-range)</span>
                </div>
            </div>
            <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                    <FiClock />
                    <span>
                        {restaurantDetails.openingTime} -{" "}
                        {restaurantDetails.closingTime}
                    </span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                    <FiMapPin />
                    <span>
                        {restaurantDetails.area}, {restaurantDetails.landmark},{" "}
                        {restaurantDetails.city}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RestaurantHeader;
