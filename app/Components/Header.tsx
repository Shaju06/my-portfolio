"use client";

import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import NavLink from "./NavLink";
import MobileMenuBar from "./MobileMenuBar";
import { navLinks } from "@/lib/data";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed mx-auto text-light-Accent dark:text-dark-Accent  top-0 left-0 right-0">
      <div className="flex container lg:py-2 items-center justify-between mx-auto px-4 py-2">
        <h1 className="font-bold text-2xl">Portfolio</h1>
        <div className="w-5 h-5 md:hidden">
          {!isMobileMenuOpen ? <HiMenu /> : <HiX />}
        </div>
        <div className="hidden md:flex justify-center items-center left-0  w-full  px-8">
          <ul className="flex md:gap-[4vw] gap-8 md:flex-row sm:flex-col px-10">
            {navLinks.map((item) => (
              <NavLink key={item.title} title={item.title} href={item.path} />
            ))}
          </ul>
          <div className="text-2xl">
            {/* <button className="bg-light-Primary text-light-Accent text- px-5 py-3">
        Download Resume
      </button> */}
          </div>
        </div>
      </div>
      {isMobileMenuOpen ? <MobileMenuBar links={navLinks} /> : null}
    </nav>
  );
};

export default Header;
