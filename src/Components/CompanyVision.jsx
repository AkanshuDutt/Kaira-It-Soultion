import React from 'react';

const OurVision = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      {/* Our Vision Section */}
      <div className="  bg-white rounded-lg ">

         <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Our Vision
        </h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          At <span className="font-semibold text-blue-800">Kaira IT Solutions</span>, we envision a future where technology empowers businesses to achieve their fullest potential. We strive to be a global leader in delivering <span className="font-semibold">innovative, scalable, and sustainable IT solutions</span> that transform challenges into opportunities. Our vision is to create a world where seamless digital experiences drive growth, efficiency, and success for organizations of all sizes.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          We are committed to fostering a culture of <span className="font-semibold">excellence, creativity, and collaboration</span>, ensuring that our clients stay ahead in an ever-evolving technological landscape. By leveraging <span className="font-semibold">cutting-edge technologies</span> and a <span className="font-semibold">customer-centric approach</span>, we aim to build long-lasting partnerships that inspire trust and deliver measurable value.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6 ">
          Our ultimate goal is to be the <span className="font-semibold">driving force behind the digital revolution</span>, enabling businesses to thrive in a connected world.
        </p>

        {/* Services Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Services
          </h2>
           {/* <h3 className="text-xl font-semibold text-blue-800 mb-3 ">
                Software Development 
              </h3> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Web Services */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:scale-108">
              <h3 className="text-xl font-semibold text-blue-800 mb-3 ">
                Website Development Services
              </h3>
              <p className="text-gray-600 ">
                Crafting responsive, user-friendly, and high-performance websites tailored to your business needs.
              </p>
            </div>

            {/* App Development Services */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:scale-108">
              <h3 className="text-xl font-semibold text-blue-800 mb-3 ">
                App Development Services
              </h3>
              <p className="text-gray-600 ">
                Building cutting-edge mobile and web applications that enhance user engagement and productivity.
              </p>
            </div>

            {/* Digital Marketing Services */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:scale-108">
              <h3 className="text-xl font-semibold text-blue-800 mb-3 ">
                Digital Marketing Services
              </h3>
              <p className="text-gray-600 ">
                Driving brand visibility and growth through SEO, social media marketing, and data-driven strategies.
              </p>
            </div>

            {/* Software Services */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:scale-108">
              <h3 className="text-xl font-semibold text-blue-800 mb-3 ">
                Software Development 
              </h3>
              <p className="text-gray-600 ">
                Developing custom software solutions to streamline operations and improve business outcomes.
              </p>
            </div>

            {/* Technology Maintenance Services */}

               <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:scale-108">
              <h3 className="text-xl font-semibold text-blue-800 mb-3 ">
              Maintenance Services
              </h3>

                <p className="text-gray-600 ">
                Offering comprehensive Technology maintenance and support to ensure your systems run smoothly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
