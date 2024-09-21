import React, { FC, useState } from "react";
import NavLink from "./NavLink";
import { HiMenu, HiX } from "react-icons/hi";
import { MdHome } from "react-icons/md";
import { useMenuAnimation } from "@/lib/customHooks";
import { useActiveLinkContext } from "@/Context/ActiveLinkContext";

type MobileMenuBarPropTypes = {
  links: ReadonlyArray<{
    path: string;
    title: "Home" | "Projects" | "Skills" | "Experience" | "Contact";
    icon?: React.ReactElement;
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
      <div ref={scope} className="flex justify-end h-5 md:hidden ">
        {isMobileMenuOpen ? (
          <>
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-lg dark:bg-background-dark/80 w-full min-h-screen"
              aria-hidden="true"
              onClick={toggleMobileMenu}
            ></div>

            <div className="h-screen fixed left-0 w-[300px] top-0 right-0 bg-white dark:bg-dark-background flex items-center justify-center">
              <div className="border-2 absolute top-4 right-4 border-primary text-primary text-2xl">
                <HiX onClick={toggleMobileMenu} />
              </div>
              <ul className="flex flex-col space-y-4 items-center py-20">
                {links.map((item) => (
                  <li key={item.title} className="py-2">
                    {" "}
                    {/* Add vertical padding to each li */}
                    <NavLink
                      href={item.path}
                      title={item.title}
                      toggleMobileMenu={toggleMobileMenu}
                      Icon={item.icon}
                    />
                  </li>
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
