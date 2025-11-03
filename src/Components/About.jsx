import React, { useState } from 'react';
import { motion } from 'framer-motion';
import about from '../assets/about.jpg';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="about section py-20 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="flex flex-col md:flex-row items-center py-6 gap-8"> 

           /* {/* <div className="flex flex-col md:flex-row items-center py-6 gap-8">  */}
          */
          
          {/* Left Side Content with Animation */}
          <motion.div 
            className="w-full md:w-1/2 flex flex-col justify-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="content text-center md:text-left">
              <h3 className="text-xl font-semibold text-blue-900">Who We Are</h3>
              <h2 className="text-3xl font-bold my-4 text-blue-400">
                At Kaira IT Solution, we specialize in delivering innovative IT solutions that drive business success.
              </h2>
              <ul className="list-disc pl-5 text-lg text-gray-600 mb-4">
                <li><strong>Integrity</strong>: Upholding honesty and transparency in all our dealings.</li>
                <li><strong>Innovation</strong>: Continuously seeking creative solutions to complex problems.</li>
                <li><strong>Customer-Centricity</strong>: Prioritizing our clients' needs and delivering exceptional service.</li>
                <li><strong>Excellence</strong>: Striving for superior quality in all our endeavors.</li>
              </ul>
              {showMore && (
                <div className="extra-content mt-4">
                  <h3 className="text-xl font-semibold text-blue-900">Our Mission</h3>
                  <p className="text-lg text-gray-600 mb-4">
                    Our mission is to empower businesses with cutting-edge IT solutions, ensuring seamless operations and sustainable growth. We believe in fostering long-term partnerships based on trust, innovation, and excellence.
                  </p>
                  <h3 className="text-xl font-semibold text-blue-900">Why Choose Us?</h3>
                  <ul className="list-disc pl-5 text-lg text-gray-600 mb-4">
                    <li><strong>Expert Team:</strong> Our professionals bring years of experience and technical expertise.</li>
                    <li><strong>Client-Focused Approach:</strong> We tailor solutions to meet unique business needs.</li>
                    <li><strong>Cutting-Edge Technology:</strong> Staying ahead with the latest advancements.</li>
                    <li><strong>Reliable Support:</strong> 24/7 customer support to ensure smooth operations.</li>
                  </ul>
                </div>
              )}
              <div className="text-center md:text-left">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="btn-read-more inline-flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300"
                >
                  <span>{showMore ? 'Read Less' : 'Read More'}</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Side Image with Animation */}
          <motion.div 
            className="w-full md:w-1/2 flex items-center justify-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={about} className="w-full max-w-lg object-cover rounded-lg shadow-lg" alt="About Us" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
