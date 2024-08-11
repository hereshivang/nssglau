import React from 'react';
import { FaHome, FaCalendarAlt, FaQuestionCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../../assets/nsslogo.png'; 

const Navbar = () => {
  return (
    <div className="relative bg-black ">
      <motion.div 
        className="absolute top-[1.5rem] left-1/2  z-10" 
        whileHover={{ scale: 1.2 }}
      >
        <img src={logo} alt="NSS Logo" className="h-24 w-24" /> 
      </motion.div>

      <nav className="bg-black text-white w-full py-4 shadow-md z-0 relative">
        <div className="max-w-7xl mx-auto px-4 ml-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <motion.a 
              whileHover={{ scale: 1.1 }} 
              className="flex items-center text-white-700 font-gupter hover:text-blue-600 cursor-pointer"
            >
              <FaHome className="mr-2" /> Home
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.1 }} 
              className="flex items-center text-white-700 hover:text-blue-600 cursor-pointer"
            >
              <FaCalendarAlt className="mr-2" /> Events
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.1 }} 
              className="flex items-center text-white-700 hover:text-blue-600 cursor-pointer"
            >
              <FaQuestionCircle className="mr-2" /> FAQs
            </motion.a>
          </div>

          <motion.button 
            whileHover={{ scale: 1.1 }} 
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-2 px-6 rounded-full hover:from-red-500 hover:to-purple-400 transition-all duration-300"
          >
            Join Us
          </motion.button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
