"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public/assets";
import { Button } from "../components/index";
import { delay, motion } from "framer-motion";

const navItems = [
  { id: "about", tittle: "About", url: "/about" },
  { id: "portfolios", tittle: "Portfolios", url: "/" },
  { id: "services", tittle: "Services", url: "/services" },
  { id: "testimonials", tittle: "Testimonials", url: "/testimonials" },
  { id: "contact", tittle: "Contact", url: "/contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white py-6 shadow-sm border-b-2 px-2"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="logo" className="w-28 md:w-36"/>
        </Link>
        <ul className="hidden md:flex justify-between items-center gap-6">
          {navItems.map((nav, index) => (
            <li key={nav.id}>
              <Link href={nav.url} className="hover:text-[#6246ea]">
                {nav.tittle}
              </Link>
            </li>
          ))}
        </ul>
        <Button tittle="Start a Project"/>
      </div>
    </motion.nav>
  );
};

export default Navbar;
