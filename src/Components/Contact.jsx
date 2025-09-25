import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  // {
  // const Contact = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 1000 });
  // }, []);

  const leftVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const rightVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 mt-5 ">
      {/* Section Title */}
      <div className="container mx-auto text-center mb-5">
        <h2 className="text-3xl font-bold text-blue-700">Contact Us</h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 bg-gray-100">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="grid grid-cols-2 gap-6 ">
            {[
              {
                icon: "bi-geo-alt",
                title: "Address",
                lines: [
                  "9th floor Galaxy Blue Sapphire Plaza, Sector 4, Greater Noida, Uttar Pradesh 201309"
                ],
                variant: leftVariant
              },
              {
                icon: "bi-telephone",
                title: "Call Us",
                lines: ["+91-9205803705"],
                variant: rightVariant
              },
              {
                icon: "bi-envelope",
                title: "Email Us",
                lines: [
                  "info@kairaitsolution.com",
                  "contact@kairaitsolution.com"
                ],
                variant: leftVariant
              },
              {
                icon: "bi-clock",
                title: "Open Hours",
                lines: ["Monday - Saturday", "10:00AM - 06:00PM"],
                variant: rightVariant
              }
            ].map((info, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 shadow-lg rounded-lg text-center break-words"
                variants={info.variant}
                initial="hidden"
                animate="visible"
              >
                <i className={`bi ${info.icon} text-3xl text-blue-600`}></i>
                <h3 className="text-lg mt-2 pb-6 font-semibold">{info.title}</h3>
                {info.lines.map((line, i) => {
                  const isEmail = line.includes("@");
                  const isPhone = /^\+?[0-9\s\-()]+$/.test(line);
                  let href = "#";
                  if (isEmail) href = `mailto:${line}`;
                  else if (isPhone) href = `tel:${line}`;

                  return (
                    <p key={i} className="text-gray-600 text-sm break-words overflow-hidden">
                      {(isEmail || isPhone) ? (
                        <a href={href} className="text-blue-600 underline hover:text-blue-800 transition">
                          {line}
                        </a>
                      ) : (
                        line
                      )}
                    </p>
                  );
                })}
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.form
            className="bg-white p-6 shadow-lg rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border p-2 rounded w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="border p-2 rounded w-full"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="border p-2 rounded w-full mt-4"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              className="border p-2 rounded w-full mt-4"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
   export default Contact
