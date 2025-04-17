import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../assets/HeroImage.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero" className="py-20 bg-gray-800 text-white mt-15">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        <div className="text-center md:text-left md:w-1/2 flex flex-col justify-center">
          
          <motion.h1
            className="text-4xl font-bold leading-tight drop-shadow-lg"
            initial={{ y: -20, color: "#3B82F6" }}
            animate={{ y: [0, -30, 15, -10, 5, 0], color: [ "#EF4444", "#3B82F6"] }}
            transition={{ duration: 1.2, ease: "easeInOut", repeat: 3 }}
            whileHover={{ y: [0, -20, 10, -5, 0], color: ["#EF4444", "#10B981", "#F59E0B", "#3B82F6"] }}
          >
            We create innovative and creative designs manually as per demand
          </motion.h1>

          
          <p className="mt-6 text-2xl font-semibold tracking-wide text-gray-300 drop-shadow-lg">
            Kaira IT Soultion is here to help you.
          </p>

          <div className="flex flex-col md:flex-row mt-6 md:mt-8 items-center gap-4">
            <motion.a
              href="#about"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg flex items-center justify-center shadow-md hover:bg-blue-700 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
              <Link to="Contact"> Get Started</Link>  
              </motion.span>
              <i className="bi bi-arrow-right ml-2"></i>
            </motion.a>
            
            
          </div>
        </div>

       
        <motion.div
          className="md:w-1/2 flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, scale: 1.3 }}
          animate={{ opacity: 1.2, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={HeroImage} className="w-full max-w-lg drop-shadow-xl" alt="Hero" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;