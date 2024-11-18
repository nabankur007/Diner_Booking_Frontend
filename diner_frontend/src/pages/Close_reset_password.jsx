import React from 'react';

const Close_reset_password = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-6 bg-white border border-gray-300 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          Password Reset Successful!
        </h2>
        <p className="text-gray-700 mb-4">
          You can now close this page and use your new password to log in.
        </p>
        <p className="text-gray-500 italic">
          Need further assistance? Feel free to contact our support team.
        </p>
      </div>
    </div>
  );
};

export default Close_reset_password;
