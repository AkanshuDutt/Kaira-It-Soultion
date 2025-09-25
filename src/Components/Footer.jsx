import React from 'react';
import { Link } from "react-router-dom"; 
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin, BsImage } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
        {/* <footer className="bg-gray-900 text-white py-10"> */}

      {/* Footer Content */}
      <div className="container mx-auto px-6 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div>
            <h4 className="text-xl font-semibold">Kaira IT Solution</h4>
            <p className="mt-3">
              <strong>Address: </strong>
              <a
                href="https://www.google.com/maps/place/Galaxy+Blue+Sapphire+Plaza,+Greater+Noida"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                Galaxy Blue Sapphire Plaza Shopping mall in Ghaziabad, Uttar Pradesh
           
            </a>
            </p>
            <p className="mt-3">
              <strong>Phone: </strong>
              <a href="tel:+919205803705" className="text-blue-400 hover:text-blue-600">
                +91-9205803705
              </a>
            </p>

            <p>
              <strong>Email: </strong>
              <a href="mailto:info@kairaitsolution.com" className="text-blue-400 hover:text-blue-600">
                info@kairaitsolution.com
              </a>
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold">Useful Links</h4>
            <ul className="mt-2 space-y-2">
              <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link to="AboutPage" className="hover:text-blue-600">About us</Link></li>
              <li><Link to="services" className="hover:text-blue-600">Services</Link></li>
              <li><Link to="TermsAnd-Conditions" className="hover:text-blue-600">Terms of Conditions</Link></li>
              <li><Link to="Privacy-policy" className="hover:text-blue-600">Privacy policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="mt-2 space-y-2">
              <li><Link to="WebservicesPage" className="hover:text-blue-600">Web Development services</Link></li>
              <li><Link to="SoftwareServicespage" className="hover:text-blue-600">Software Development Services</Link></li>
              <li><Link to="AppServicesPage" className="hover:text-blue-600">Application Development Services</Link></li>
              <li><Link to="DigitalMarketingPage" className="hover:text-blue-600">Digital Marketing</Link></li>
            </ul>
          </div>
          {/* <div>
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="mt-2 space-y-2">
              <li><Link to="WebservicesPage" className="hover:text-blue-600">Web Development services</Link></li>
              <li><Link to="SoftwareServicespage" className="hover:text-blue-600">Software Development Services</Link></li>
              <li><Link to="AppServicesPage" className="hover:text-blue-600">Application Development Services</Link></li>
              <li><Link to="DigitalMarketingPage" className="hover:text-blue-600">Digital Marketing</Link></li>
            </ul>
          </div> */}

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <p className="text-gray-400">Stay updated with our latest news and updates.</p>
            <div className="flex space-x-4 mt-4">
              <Link to="#" className="text-white hover:text-blue-600 text-2xl">
                <BsImage />
              </Link>
              <Link to="https://www.facebook.com/people/Kaira-IT-Solution/61574036631898/" className="text-white hover:text-blue-600 text-2xl">
                <BsFacebook />
              </Link>
              <Link to="#" className="text-white hover:text-blue-600 text-2xl">
                <BsInstagram />
              </Link>
              <Link to="#" className="text-white hover:text-blue-600 text-2xl">
                <BsLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-white-400">
        <p>© Copyright <strong>KAIRA IT SOLUTION</strong>. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
