import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        {
            path: "/res_registration",
            icon: "🍽️",
            label: "Restaurant information",
        },
        {
            path: "/res_menu_operationDetails",
            icon: "📄",
            label: "Menu and operational details",
        },
        {
            path: "/res_document_form",
            icon: "📎",
            label: "Upload documents",
        },
    ];

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div className="w-full lg:w-1/3 bg-gray-50 border-r border-gray-200 p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Complete your registration
            </h2>

            <div className="space-y-3">
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className={`flex items-start gap-3 cursor-pointer p-3 rounded-md transition duration-150 ${
                            isActive(item.path)
                                ? "bg-orange-50 border border-orange-200"
                                : "hover:bg-gray-100 hover:shadow-sm hover:scale-[0.99]"
                        }`}
                        onClick={() => navigate(item.path)}
                    >
                        <div
                            className={`text-2xl mt-1 ${
                                isActive(item.path) ? "text-orange-500" : "text-gray-600"
                            }`}
                        >
                            {item.icon}
                        </div>
                        <div>
                            <p
                                className={`font-medium ${
                                    isActive(item.path) ? "text-orange-600" : "text-gray-800"
                                }`}
                            >
                                {item.label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;