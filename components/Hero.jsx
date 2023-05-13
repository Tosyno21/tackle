"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-[90vh] md:h-[90vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .6)), url('https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60')",
      }}
    >
      <div className="container mx-auto text-white text-center px-2 xs:max-w-[400px] sm:max-w-[600px] xl:max-w-[1000px]">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 5 }}
          className="text-[48px] font-bold mb-4 xs:text-[56px] xs:mb-6 xl:text-[61px]"
          style={{ lineHeight: "1.1" }}
        >
          Crafting Innovative Solutions
        </motion.h1>
        <motion.p
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 5 }}
          className="mb-12 text-[16px] text-gray-200 xs:text-[18px] xs:mb-16 xl:text-[20px] xl:max-w-[600px] mx-auto"
        >
          Welcome to Tackle, where creativity meets innovation to create
          extraordinary digital experiences.
        </motion.p>
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <a
            href="/"
            className="px-8 p-3 bg-white font-medium text-[#140e2f] text-[18px] rounded-md shadow-lg hover:bg-[#6246ea] hover:text-white"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Hero;
