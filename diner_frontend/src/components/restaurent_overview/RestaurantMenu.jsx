const RestaurantMenu = ({ menuImageUrls, handleImageClick }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {menuImageUrls?.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt={`Menu ${index + 1}`}
                        className="w-full h-64 object-cover rounded-lg border cursor-pointer hover:scale-105 transition"
                        onClick={() => handleImageClick(menuImageUrls, index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default RestaurantMenu;
