"use client";

import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import NavLink from "./NavLink";
import { navLinks } from "@/lib/data";
import dynamic from "next/dynamic";

const MobileMenuBar = dynamic(() => import("./MobileMenuBar"), {
  loading: () => <p>Loading...</p>,
});

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky mx-auto text-light-Accent dark:text-dark-Accent  flex justify-center  top-0 left-0 right-0 z-10 backdrop-blur border-b border-slate-900/10 dark:border-white/10">
      <div className="flex container lg:py-2 items-center h-16 justify-between mx-auto px-4 py-2">
        <div className="w-5 h-5 md:hidden">
          {isMobileMenuOpen ? (
            <HiX onClick={toggleMobileMenu} />
          ) : (
            <HiMenu onClick={toggleMobileMenu} />
          )}
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
