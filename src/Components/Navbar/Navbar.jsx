import React, { useState } from 'react';
import "./navbar.css";
import logo from "../../assets/desktop/logo.svg"
import moonIcon from "../../assets/desktop/icon-moon.svg";
import sunIcon from "../../assets/desktop/icon-sun.svg";

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark', !isDarkMode);
    };

    return (
        <nav className='h-[30vh] pt-12 pb-24 w-full navbar bg-[#e7e8e9] dark:bg-[#121721]'>
            <div className='w-[80%] mx-auto flex justify-between items-center'>
                <div>
                    <img src={logo} alt="" />
                </div>

                <div className='flex items-center gap-3'>
                    <img className='w-[20px]' src={sunIcon} alt="Sun Icon" />
                    <button
                        onClick={toggleDarkMode}
                        className={`bg-white rounded-[40px] w-[44px] h-[22px] flex items-center px-1 py-1 group`}
                    >
                        <div className={`transform transition-transform duration-300 ease-in-out ${isDarkMode ? 'translate-x-[22px]' : 'translate-x-0'} bg-[#5964e0] w-[15px] h-[15px] rounded-full group group-hover:opacity-55 transition duration-200 ease-in-out`}>
                        </div>
                    </button>
                    <img className='w-[20px]' src={moonIcon} alt="Moon Icon" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;