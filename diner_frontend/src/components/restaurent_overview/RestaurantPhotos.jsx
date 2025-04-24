const RestaurantPhotos = ({ allGalleryImages, handleImageClick }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {allGalleryImages.map((url, i) => (
                    <img
                        key={i}
                        src={url}
                        alt={`Gallery ${i + 1}`}
                        className="w-full h-48 object-cover rounded-lg cursor-pointer hover:scale-105 transition"
                        onClick={() => handleImageClick(allGalleryImages, i)}
                    />
                ))}
            </div>
        </div>
    );
};

export default RestaurantPhotos;
