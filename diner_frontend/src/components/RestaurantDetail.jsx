import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../context/Api";
import RestaurantHeader from "./restaurent_overview/RestaurantHeader";
import RestaurantTabs from "./restaurent_overview/RestaurantTabs";
import RestaurantOverview from "./restaurent_overview/RestaurantOverview";
import RestaurantMenu from "./restaurent_overview/RestaurantMenu";
import RestaurantPhotos from "./restaurent_overview/RestaurantPhotos";
import RestaurantBooking from "./restaurent_overview/RestaurantBooking";
import RestaurantSidebar from "./restaurent_overview/RestaurantSidebar";
import ImageCarouselModal from "./restaurent_overview/ImageCarouselModal";


const RestaurantDetail = () => {
    const { restaurantName } = useParams();
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState("overview");
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [currentImages, setCurrentImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const fetchRestaurantDetails = async () => {
            try {
                const cleanedName = decodeURIComponent(restaurantName).trim();
                const response = await Api.get(
                    `/api/auth/public/restaurant/by-name`,
                    {
                        params: { name: cleanedName },
                    }
                );
                setRestaurantDetails(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.response?.data || err.message);
                setLoading(false);
            }
        };
        fetchRestaurantDetails();
    }, [restaurantName]);

    const handleImageClick = (images, index) => {
        setCurrentImages(images);
        setCurrentImageIndex(index);
        setIsImageModalOpen(true);
    };

    if (loading)
        return <div className="flex justify-center p-8">Loading...</div>;
    if (error)
        return (
            <div className="text-center p-8 text-red-500">Error: {error}</div>
        );
    if (!restaurantDetails)
        return (
            <div className="text-center p-8 text-gray-500">
                No restaurant found
            </div>
        );

    const allGalleryImages = [
        ...(restaurantDetails.foodImageUrls || []),
        ...(restaurantDetails.diningImageUrls || []),
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RestaurantHeader restaurantDetails={restaurantDetails} />

            <div className="bg-white rounded-lg shadow-sm mb-6">
                <div className="grid grid-cols-4 grid-rows-2 gap-2 h-96 rounded-t-lg overflow-hidden">
                    {restaurantDetails.diningImageUrls
                        ?.slice(0, 5)
                        .map((url, index) => (
                            <div
                                key={index}
                                className={
                                    index === 0
                                        ? "col-span-2 row-span-2"
                                        : "col-span-1"
                                }
                            >
                                <img
                                    src={url}
                                    alt={`Restaurant ${index + 1}`}
                                    className="w-full h-full object-cover cursor-pointer hover:scale-105 transition"
                                    onClick={() =>
                                        handleImageClick(
                                            restaurantDetails.diningImageUrls,
                                            index
                                        )
                                    }
                                />
                            </div>
                        ))}
                </div>

                <RestaurantTabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    {activeTab === "overview" && (
                        <RestaurantOverview
                            restaurantDetails={restaurantDetails}
                        />
                    )}
                    {activeTab === "menu" && (
                        <RestaurantMenu
                            menuImageUrls={restaurantDetails.menuImageUrls}
                            handleImageClick={handleImageClick}
                        />
                    )}
                    {activeTab === "photos" && (
                        <RestaurantPhotos
                            allGalleryImages={allGalleryImages}
                            handleImageClick={handleImageClick}
                        />
                    )}
                    {activeTab === "book" && (
                        <RestaurantBooking
                            openingTime={restaurantDetails.openingTime}
                            closingTime={restaurantDetails.closingTime}
                            restaurantName={restaurantName}
                        />
                    )}
                    {activeTab === "reviews" && (
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                            <p>Coming soon...</p>
                        </div>
                    )}
                </div>

                <RestaurantSidebar restaurantDetails={restaurantDetails} />
            </div>

            <ImageCarouselModal
                isOpen={isImageModalOpen}
                onRequestClose={() => setIsImageModalOpen(false)}
                images={currentImages}
                initialIndex={currentImageIndex}
            />
        </div>
    );
};

export default RestaurantDetail;
