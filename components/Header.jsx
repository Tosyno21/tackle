"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-r from-violet-500 to-red-500 px-2 py-4"
    >
      <div className="container mx-auto flex justify-between items-center gap-8 md:justify-center">
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white hidden sm:block"
        >
          🎉 We just launched our design bootcamp masterclass
        </motion.p>
        <motion.a
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          href="/"
          className="flex justify-between items-center text-white gap-2 hover:text-[#efedfd]"
        >
          Visit Course
          <span>
            <BsArrowRight />
          </span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Header;
