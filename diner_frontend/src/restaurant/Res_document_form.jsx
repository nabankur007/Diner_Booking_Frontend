import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Res_document_form = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        pan: "",
        gst: "",
        fssai: "",
        bank: "",
        foodProfileImg: null,
    });
    const [previewImage, setPreviewImage] = useState(null);

    // Memoized handler for form input changes
    const handleChange = useCallback((e) => {
        const { name, value, files } = e.target;
        
        if (name === "foodProfileImg" && files?.[0]) {
            const file = files[0];
            setFormData(prev => ({ ...prev, [name]: file }));
            
            const reader = new FileReader();
            reader.onloadend = () => setPreviewImage(reader.result);
            reader.readAsDataURL(file);
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    }, []);

    const handleRemoveImage = useCallback(() => {
        setFormData(prev => ({ ...prev, foodProfileImg: null }));
        setPreviewImage(null);
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        console.log("Submitted Documents:", formData);
        navigate("/");
    }, [formData, navigate]);

    // Reusable input field component
    const InputField = ({ name, label, placeholder, required = false }) => (
        <div className="mb-6">
            <label className="block font-medium mb-2 text-gray-700">
                {label}
            </label>
            <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required={required}
            />
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg flex flex-col lg:flex-row overflow-hidden">
                <Sidebar />
                
                <div className="w-full lg:w-2/3 p-8 space-y-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        Upload Required Documents
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <InputField 
                            name="pan" 
                            label="PAN Card Number" 
                            placeholder="ABCDE1234F" 
                            required 
                        />
                        <InputField 
                            name="gst" 
                            label="GST Number" 
                            placeholder="22AAAAA0000A1Z5" 
                        />
                        <InputField 
                            name="fssai" 
                            label="FSSAI License Number" 
                            placeholder="12345678901234" 
                            required 
                        />
                        <InputField 
                            name="bank" 
                            label="Bank Account Details" 
                            placeholder="Account Number & IFSC" 
                            required 
                        />

                        <div className="mb-6">
                            <label className="block mb-2 text-gray-700 font-bold">
                                Upload Food Profile Image
                            </label>
                            
                            {previewImage ? (
                                <div className="relative group">
                                    <img 
                                        src={previewImage} 
                                        alt="Preview" 
                                        className="w-full h-64 object-cover rounded-lg border border-gray-300"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleRemoveImage}
                                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition opacity-0 group-hover:opacity-100"
                                        aria-label="Remove image"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            ) : (
                                <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 text-center cursor-pointer bg-blue-50 hover:bg-blue-100 transition">
                                    <label className="text-blue-500 cursor-pointer flex flex-col justify-center items-center gap-2">
                                        <div className="h-12 w-12 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <p className="font-bold">Upload images</p>
                                        <input
                                            type="file"
                                            name="foodProfileImg"
                                            accept="image/*"
                                            onChange={handleChange}
                                            className="hidden"
                                        />
                                        <p className="text-sm text-gray-500">
                                            .jpeg, .png, .jpg formats up to 5MB
                                        </p>
                                    </label>
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl text-lg font-semibold transition"
                        >
                            Finish Registration
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Res_document_form;