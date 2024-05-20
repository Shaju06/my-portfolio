import Link from "next/link";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { useActiveLinkContext } from "@/Context/ActiveLinkContext";
import clsx from "clsx";

type NavLinkPropsTypes = {
  href: string;
  title: "Home" | "Projects" | "Skills" | "Experience" | "Contact";
};

const NavLink: FC<NavLinkPropsTypes> = (props) => {
  const { href, title } = props;
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveLinkContext();

  return (
    <motion.li
      className="flex relative md:h-full items-center justify-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Link
        href={href}
        className={clsx(
          `flex w-full items-center justify-center px-3 py-3 hover:text-light-accent  dark:text-dark-Accent/90 dark:hover:text-dark-Accent transition-all hover:scale-110`,
          {
            "text-light-accent dark:text-dark-accent": activeSection === title,
          }
        )}
        onClick={() => {
          setActiveSection(title);
          setTimeOfLastClick(Date.now());
        }}
      >
        {title}
        {title === activeSection && (
          <motion.span
            className="bg-primary opacity-1 backdrop-blur rounded-3xl  absolute  inset-0 -z-10 "
            layoutId="activeSection"
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          />
        )}
      </Link>
    </motion.li>
  );
};

export default NavLink;
