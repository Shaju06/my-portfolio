"use client"
import Link from "next/link";
import React, {useState} from "react";
import { HiMenu, HiX } from 'react-icons/hi';


const Header = () => {
   
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

return (
   <header className="bg-white h-16 sticky top-0">
    <nav className="flex justify-between h-full items-center w-5/6 mx-auto">
    <div className="w-16"><h1 className="font-bold">Portfolio</h1></div>
    <div className="md:static absolute md:min-h-fit bg-white min-h-[60vh] left-0 top-[9%] md:w-auto w-full flex items-center px-5">
    <ul className="flex md:gap-[4vw] gap-8 md:flex-row sm:flex-col">
    <li className="cursor-pointer hover:text-gray-500"><Link href="#home-section">Home</Link></li>
    <li className="cursor-pointer hover:text-gray-500">
        <Link href="#about-me-section">About me</Link>
        </li>
    <li className="cursor-pointer hover:text-gray-500"><Link href="#about-me-section">Projects</Link></li>
    <li className="cursor-pointer hover:text-gray-500"><Link href="#about-me-section">Contact</Link></li>
    </ul>
    </div>
    <div>
    <button className="bg-blue-600 text-white px-5 py-3">Download Resume</button>
    </div>
    </nav>
   </header>
)
}

export default Header