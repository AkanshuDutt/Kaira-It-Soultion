import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
        Terms and Conditions
      </h1>
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800">1. Introduction</h2>
        <p className="text-gray-600 mt-2">
          Welcome to Kaira IT Solution. By accessing our website and services, you agree to abide by the following terms and conditions.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-4">2. Services</h2>
        <p className="text-gray-600 mt-2">
          We provide IT solutions, including web development, software solutions, and digital marketing services. The details of our services are subject to updates and changes.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-4">3. User Responsibilities</h2>
        <p className="text-gray-600 mt-2">
          Users must ensure that they provide accurate information when interacting with our platform and must comply with legal regulations.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-4">4. Payments & Refunds</h2>
        <p className="text-gray-600 mt-2">
          All payments made to Kaira IT Solution are non-refundable unless specified otherwise in a contract or agreement.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-4">5. Limitation of Liability</h2>
        <p className="text-gray-600 mt-2">
          We shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-4">6. Governing Law</h2>
        <p className="text-gray-600 mt-2">
          These terms and conditions are governed by the laws of India. Any disputes shall be resolved in the courts of Delhi court.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-4">7. Changes to Terms</h2>
        <p className="text-gray-600 mt-2">
          Kaira IT Solution reserves the right to update these terms at any time. Users are encouraged to review this page periodically.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
