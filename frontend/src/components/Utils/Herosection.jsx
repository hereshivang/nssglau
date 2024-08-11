import React from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/nsslogo.png'; 

const HeroSection = () => {
  return (
    <div className="relative bg-black text-white h-screen flex items-center justify-center overflow-hidden">
      {/* Logo with Scroll Effect */}
      <motion.div
        className="fixed bottom-0 right-0 mr-8 mb-8 z-20"
        whileHover={{ scale: 1.2 }}
      >
        <img src={logo} alt="NSS Logo" className="h-24 w-24" />
      </motion.div>

      {/* Hero Text */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-famil mb-4 ">
          National Service Scheme
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold">
          GLA University
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;
