import Link from "next/link";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { useActiveLinkContext } from "@/Context/ActiveLinkContext";

type NavLinkPropsTypes = {
  href: string;
  title: "Home" | "About" | "Projects" | "Skills" | "Contact";
};

const NavLink: FC<NavLinkPropsTypes> = (props) => {
  const { href, title } = props;
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveLinkContext();

  return (
    <motion.li
      className=""
      //   initial={{ y: -100, opacity: 0 }}
      //   animate={{ y: 0, opacity: 1 }}
    >
      <Link
        href={href}
        className={`hover:text-gray-500 text-light-Accent
            dark:text-dark-Accent
            `}
        onClick={() => {
          setActiveSection(title);
          setTimeOfLastClick(Date.now());
        }}
      >
        {title}
        {/* {
            title === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )
                } */}
      </Link>
    </motion.li>
  );
};

export default NavLink;
