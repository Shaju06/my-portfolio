import React from "react";
import NavLink from "./NavLink";


const MobileMenuBar = ({links}) => {

    return (
        <ul className=" flex flex-col px-4 py-4 items-center">
            {
                links.map((item) => <NavLink key={item.title} href={item.path} title={item.title} />)
            }
        </ul>
    )
}

export default MobileMenuBar