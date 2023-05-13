"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public/assets";
import { Button } from "../components/index";
import { delay, motion } from "framer-motion";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const navItems = [
  { id: "home", tittle: "Home", url: "/" },
  { id: "about", tittle: "About", url: "/about" },
  { id: "portfolios", tittle: "Portfolios", url: "/" },
  { id: "services", tittle: "Services", url: "/services" },
  { id: "contact", tittle: "Contact", url: "/contact" },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white py-6 shadow-sm border-b-2 px-3 xl:px-12"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="logo" className="w-32 md:w-36" />
        </Link>
        <button className="md:hidden" onClick={() => setNavbar(!navbar)}>
          {navbar ? (
            <IoMdClose
              size={30}
              className="absolute z-50 top-0 right-0 text-white mt-8 mr-8"
            />
          ) : (
            <HiOutlineMenuAlt3 size={30} />
          )}
        </button>
        <ul className="hidden md:flex justify-between items-center">
          {navItems.map((nav, index) => (
            <li
              key={nav.id}
              className={`cursor-pointer text-[16px] font-normal ${
                active === nav.tittle
                  ? "text-[#6246ea] font-semibold"
                  : "text-gray-700 font-medium"
              } ${index === navItems.length - 1 ? "mr-0" : "mr-8"}`}
              onClick={() => setActive(nav.tittle)}
            >
              <Link
                href={nav.url}
                className="text-[16px] ease-in duration-500 hover:text-[#6246ea]">
                {nav.tittle}
              </Link>
            </li>
          ))}
        </ul>
        <button className="hidden md:block bg-[#6246ea] px-4 py-2 shadow-md md:px-6 text-white font-medium rounded-md hover:shadow-[4px_4px_0px_#140E2F] linear duration-300">
          <a href="/" className="text-[14px] md:text-[16px]">
            Start a Project
          </a>
        </button>
      </div>
      <div
        className={`md:hidden h-[80vh] w-screen ${
          navbar ? "fixed" : "hidden"
        } top-0 left-0 bg-[#140e2f] z-20 text-white grid place-items-center`}
      >
        <ul className="md:hidden flex flex-col justify-between items-center gap-8 w-full px-16 mt-8">
          {navItems.map((nav, index) => (
            <li key={nav.id}>
              <Link
                href={nav.url}
                className="ease-in duration-500 text-[16px] text-white font-normal"
                onClick={() => setNavbar(!navbar)}
              >
                {nav.tittle}
              </Link>
            </li>
          ))}
          <Link
            href="/"
            className="py-3 font-medium bg-[#6246ea] rounded-md w-full text-center mt-4"
          >
            Start a Project
          </Link>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
