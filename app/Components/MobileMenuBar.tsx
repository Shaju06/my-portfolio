import React, { FC } from "react";
import NavLink from "./NavLink";

type MobileMenuBarPropTypes = {
  links: ReadonlyArray<{
    path: string;
    title: "Home" | "About" | "Projects" | "Skills" | "Contact";
  }>;
};

const MobileMenuBar: FC<MobileMenuBarPropTypes> = ({ links }) => {
  return (
    <ul className=" flex flex-col px-4 py-4 items-center">
      {links.map((item) => (
        <NavLink key={item.title} href={item.path} title={item.title} />
      ))}
    </ul>
  );
};

export default MobileMenuBar;
