"use client"
import React, {useState} from "react";
import { HiMenu, HiX } from 'react-icons/hi';


const Header = () => {
   
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

return (
   <header className="bg-white h-16">
    <nav className="flex justify-between h-full items-center w-5/6 mx-auto">
<div className="logodd">Logo</div>
<div className="menubar flex items-center">
<ul className="flex items-center gap-4">
    <li>Home</li>
    <li>About me</li>
    <li>Projects</li>
    <li>Contact</li>
</ul>
</div>
<div>
    <button className="bg-blue-600 text-white px-1 py-1 rounded-full">Download Resume</button>
</div>
    </nav>
   </header>
)
}

export default Header