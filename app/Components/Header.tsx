"use client";

import React from "react";

import NavLink from "./NavLink";
import { navLinks } from "@/lib/data";
import MobileMenuBar from "./MobileMenuBar";

const Header = () => {
  return (
    <header className="relative z-[999]">
      <nav className="fixed mx-auto text-light-Accent dark:text-dark-Accent  flex justify-center  top-0 left-0 right-0 z-10 backdrop-blur  ">
        <div className="flex container lg:py-2 items-center md:h-16 h-10 justify-between mx-auto px-4 py-2">
          <div className="md:hidden bg-red-50 w-full absolute z-0"></div>
          <MobileMenuBar links={navLinks} />
          <div className="hidden md:flex justify-center items-center left-0  w-full  px-8">
            <ul className="flex md:gap-[4vw] gap-8 md:flex-row sm:flex-col px-10">
              {navLinks.map((item) => (
                <NavLink key={item.title} title={item.title} href={item.path} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
