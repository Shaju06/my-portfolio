import Link from 'next/link'
import React from 'react'


const NavLink = (props) => {

    const {href, title} = props

    return (
        <Link  
        href={href}
        className='hover:text-gray-500'
        >
            {title}
            </Link>
    )

}

export default NavLink