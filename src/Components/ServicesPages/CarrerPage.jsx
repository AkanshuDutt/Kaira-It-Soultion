import React, { useState } from "react";

const CareerPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    skills: "",
    resume: null,
  });
  
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-6 relative">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
        Join Our Team
      </h1>
      <p className="text-gray-700 text-center mb-8">
        Fill out the form below to apply for a position at Kaira IT Solution.
      </p>
      
      {showPopup && (
        <div className="absolute top-30 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-3 rounded shadow-md">
          Successfully Registered! Our team will contact you shortly!
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="experience"
            placeholder="Years of Experience"
            value={formData.experience}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="skills"
            placeholder="Skills (comma separated)"
            value={formData.skills}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default CareerPage;
