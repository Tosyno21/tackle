import React from "react";
import Link from "next/link";

const Button = ({ link, tittle }) => {
  return (
    <button className="bg-[#6246ea] px-4 py-2 md:px-6  text-white font-medium rounded-md hover:shadow-[4px_4px_0px_#140E2F] linear duration-300">
      <a href={link} className="text-[14px] md:text-[16px]">
        {tittle}
      </a>
    </button>
  );
};

export default Button;
