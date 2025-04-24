import React from "react";
import { FaArrowLeft, FaTools, FaHardHat } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const WorkInProgress = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle "Go Back" button click
  const handleGoBack = () => {
    navigate(-1); // This will go back to the previous page
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden p-8 text-center">
        {/* Header with icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <FaHardHat className="text-yellow-500 text-5xl" />
            <FaTools className="text-blue-500 text-3xl absolute -bottom-2 -right-2" />
          </div>
        </div>

        {/* Title and message */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Work in Progress</h1>
        <p className="text-gray-600 mb-6">
          We're currently working hard to bring you this feature. 
          Please check back soon!
        </p>

        {/* Progress bar for visual effect */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
          <div 
            className="bg-blue-600 h-2.5 rounded-full animate-pulse" 
            style={{ width: '65%' }}
          ></div>
        </div>

        {/* Go back button */}
        <button 
          onClick={handleGoBack} // Call handleGoBack function
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Go Back
        </button>

        {/* Optional: Contact support link */}
        <div className="mt-6 text-sm">
          <p className="text-gray-500">
            Need immediate help?{' '}
            <a 
              href="mailto:support@dineeasy.com" 
              className="text-blue-600 hover:underline"
            >
              Contact support
            </a>
          </p>
        </div>
      </div>

      {/* Optional: Footer */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        <p>DineEasy &copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default WorkInProgress;
