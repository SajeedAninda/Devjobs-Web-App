import React from 'react';
import "./navbar.css";
import logo from "../../assets/desktop/logo.svg"
import moonIcon from "../../assets/desktop/icon-moon.svg";
import sunIcon from "../../assets/desktop/icon-sun.svg";

const Navbar = () => {
    return (
        <nav className='px-32 pt-10 pb-24 w-full navbar flex justify-between items-center'>
            <div>
                <img src={logo} alt="" />
            </div>

            <div className='flex items-center gap-3'>
                <img className='w-[20px]' src={sunIcon} alt="" />
                <button className='bg-white rounded-[40px] w-[44px] h-[22px] flex items-center px-1 py-1 group'>
                    <div className='bg-[#5964e0] w-[15px] h-[15px] rounded-full group group-hover:opacity-55 transition-all delay-75 ease-in-out'>
                    </div>
                </button>
                <img className='w-[20px]' src={moonIcon} alt="" />
            </div>
        </nav>
    );
};

export default Navbar;