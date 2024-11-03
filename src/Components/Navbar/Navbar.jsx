import React from 'react';
import "./navbar.css";
import logo from "../../assets/desktop/logo.svg"

const Navbar = () => {
    return (
        <nav className='px-32 pt-10 pb-24 w-full navbar'>
            <img src={logo} alt="" />
        </nav>
    );
};

export default Navbar;