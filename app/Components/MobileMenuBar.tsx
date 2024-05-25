import React, { FC, useEffect, useState } from "react";
import NavLink from "./NavLink";
import { stagger, useAnimate } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { useMenuAnimation } from "@/lib/customHooks";
import { useActiveLinkContext } from "@/Context/ActiveLinkContext";

type MobileMenuBarPropTypes = {
  links: ReadonlyArray<{
    path: string;
    title: "Home" | "Projects" | "Skills" | "Experience" | "Contact";
  }>;
};

const MobileMenuBar: FC<MobileMenuBarPropTypes> = ({ links }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setActiveSection, setTimeOfLastClick } = useActiveLinkContext();

  const scope = useMenuAnimation(isMobileMenuOpen);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div ref={scope} className=" flex justify-end h-5 md:hidden ">
        {isMobileMenuOpen ? (
          <>
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-md dark:bg-background-dark/80 w-full min-h-screen"
              aria-hidden="true"
              onClick={toggleMobileMenu}
            ></div>
            <div className="h-screen fixed left-0 w-[200px] top-0 right-0 bg-white dark:bg-black ">
              <HiX
                onClick={toggleMobileMenu}
                className=" absolute top-4 right-4 "
              />
              <ul className="flex flex-col px-10 py-20 space-y-4 items-center h-full">
                {links.map((item) => (
                  <NavLink
                    key={item.title}
                    href={item.path}
                    title={item.title}
                  />
                ))}
              </ul>
            </div>
          </>
        ) : (
          <HiMenu onClick={toggleMobileMenu} className="text-primary" />
        )}
      </div>
    </>
  );
};

export default MobileMenuBar;
