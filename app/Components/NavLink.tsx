import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";


const NavLink = (props) => {

    const {href, title} = props

    return (
        <motion.li
              className=""
            //   initial={{ y: -100, opacity: 0 }}
            //   animate={{ y: 0, opacity: 1 }}
        >
        <Link  
        href={href}
        className='hover:text-gray-500 text-light-Accent'
        >
            {title}
            </Link>
            </motion.li>
    )

}

export default NavLink