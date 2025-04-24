import { useEffect,useState } from "react";
import {
    FiX,
    FiChevronLeft,
    FiChevronRight,
    FiDownload,
    FiShare2,
} from "react-icons/fi";

const ImageCarouselModal = ({
    isOpen,
    onRequestClose,
    images,
    initialIndex = 0,
    showDownload = true,
    showShare = true,
}) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

    // Reset to initial index when modal opens
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex);
            setIsZoomed(false);
        }
    }, [isOpen, initialIndex]);

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            switch (e.key) {
                case "ArrowLeft":
                    handlePrev();
                    break;
                case "ArrowRight":
                    handleNext();
                    break;
                case "Escape":
                    onRequestClose();
                    break;
                case "z":
                    setIsZoomed(!isZoomed);
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, currentIndex, isZoomed]);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
        setIsZoomed(false);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
        setIsZoomed(false);
    };

    const handleImageClick = (e) => {
        if (isZoomed) {
            const { left, top, width, height } =
                e.target.getBoundingClientRect();
            const x = ((e.clientX - left) / width) * 100;
            const y = ((e.clientY - top) / height) * 100;
            setZoomPosition({ x, y });
        }
        setIsZoomed(!isZoomed);
    };

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = images[currentIndex];
        link.download = `restaurant-image-${currentIndex + 1}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: "Restaurant Image",
                    url: images[currentIndex],
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                navigator.clipboard.writeText(images[currentIndex]);
                alert("Image link copied to clipboard!");
            }
        } catch (err) {
            console.error("Error sharing:", err);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            {/* Close Button */}
            <button
                onClick={onRequestClose}
                className="absolute top-4 right-4 text-white text-3xl z-50 hover:text-orange-400 transition-colors"
                aria-label="Close modal"
            >
                <FiX size={28} />
            </button>

            {/* Main Image Container */}
            <div className="relative w-full max-w-6xl h-full max-h-[90vh]">
                {/* Navigation Arrows */}
                <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
                    aria-label="Previous image"
                >
                    <FiChevronLeft size={28} />
                </button>

                <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all z-10"
                    aria-label="Next image"
                >
                    <FiChevronRight size={28} />
                </button>

                {/* Image with Zoom */}
                <div
                    className="relative w-full h-full flex items-center justify-center overflow-hidden"
                    onClick={handleImageClick}
                >
                    <img
                        src={images[currentIndex]}
                        alt={`Restaurant view ${currentIndex + 1}`}
                        className={`max-w-full max-h-full object-contain cursor-${
                            isZoomed ? "zoom-out" : "zoom-in"
                        } transition-transform duration-300`}
                        style={{
                            transform: isZoomed ? `scale(2)` : "scale(1)",
                            transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                        }}
                    />
                </div>

                {/* Action Buttons */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 z-10">
                    {showDownload && (
                        <button
                            onClick={handleDownload}
                            className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
                            aria-label="Download image"
                        >
                            <FiDownload size={20} />
                        </button>
                    )}
                    {showShare && (
                        <button
                            onClick={handleShare}
                            className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
                            aria-label="Share image"
                        >
                            <FiShare2 size={20} />
                        </button>
                    )}
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
                    {currentIndex + 1} / {images.length}
                </div>

                {/* Zoom Hint (only shown when not zoomed) */}
                {!isZoomed && (
                    <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
                        Click to zoom | Press Z
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageCarouselModal;
