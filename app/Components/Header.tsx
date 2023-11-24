"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import NavLink from "./NavLink";
import MobileMenuBar from "./MobileMenuBar";

const navLinks = [
  {
    title: 'Home',
    path: '#home-section'
  },
  {
    title: 'About',
    path: '#about-me-section'
  },
  {
    title: 'Projects',
    path: '#project-section'
  },
  {
    title: 'Skills',
    path: '#my-skills-section'
  },
  {
    title: 'Contact',
    path: '#my-skills-section'
  }
]

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    // <header className="">
      <nav className="fixed mx-auto  top-0 left-0 right-0 z-10 bg-white bg-opacity-100">
      <div className="flex container lg:py-2 items-center justify-between mx-auto px-4 py-2">
      <h1 className="font-bold text-2xl">Portfolio</h1>
    <div className="md:hidden">
{
  !isMobileMenuOpen ? (

  <div 
  className="w-5 h-5"
  onClick={() => setIsMobileMenuOpen(true)}
  >
    <HiMenu /> 
    </div> 
  ): (
    <div
    onClick={() => setIsMobileMenuOpen(false)}
    >
 <HiX />
      </div>
  )
 
}
    </div>
    <div className="bg-white hidden md:flex justify-center items-center left-0   w-full  px-8">
      <ul className="flex md:gap-[4vw] gap-8 md:flex-row sm:flex-col px-10">
      {
        navLinks.map((item)=> (
          <NavLink key={item.title} title={item.title} href={item.path} />
        ))
      }
      </ul>
      <div>
      <button className="bg-blue-600 text-white px-5 py-3">
        Download Resume
      </button>
    </div>
    </div>

      </div>
        {
          isMobileMenuOpen ? <MobileMenuBar links={navLinks} /> : null
        }
      </nav>
    // </header>
  );
};

export default Header;
