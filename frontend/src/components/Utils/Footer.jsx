import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaEnvelope, FaPhone } from 'react-icons/fa';
import logo from '../../assets/nsslogo.png'; 

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex justify-between items-start">
        <div className="text-center md:text-left">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={logo} alt="NSS GLA" className="mx-auto md:mx-0 w-32" />
            <h2 className="mt-2 text-lg font-semibold">NSS GLA University</h2>
            <p>©NSS, GLA University, 2024</p>
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row text-center md:text-left space-y-4 md:space-y-0 md:space-x-16">
          <div>
            <h3 className="font-semibold mb-2">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Home Page</Link></li>
              <li><Link to="/events" className="hover:underline">Events</Link></li>
              <li><Link to="/" className="hover:underline">Team</Link></li>
              <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
              <li><Link to="/" className="hover:underline">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">CONTACT</h3>
            <ul className="space-y-2">
              <li><FaHome className="inline mr-2" />GLA University, Mathura</li>
              <li><FaEnvelope className="inline mr-2" /><a href="mailto:hereshivang@gmail.com" className="hover:underline">hereshivang@gmail.com</a></li>
              <li><FaPhone className="inline mr-2" /><a href="tel:+917088492203" className="hover:underline">+91 7088492203</a></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
