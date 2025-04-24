const RestaurantTabs = ({ activeTab, setActiveTab }) => {
    return (
        <div className="flex border-b">
            {["Overview", "Menu", "Photos", "Reviews", "Book"].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`px-6 py-4 font-medium ${
                        activeTab === tab.toLowerCase()
                            ? "border-b-2 border-orange-500 text-orange-500"
                            : "text-gray-600 hover:text-orange-500"
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default RestaurantTabs;
