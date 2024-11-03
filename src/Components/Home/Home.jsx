import React from 'react';
import searchIcon from "../../assets/desktop/icon-search.svg";
import locationIcon from "../../assets/desktop/icon-location.svg";

const Home = () => {
    return (
        <div className='bg-[#e7e8e9] h-[100vh] dark:bg-[#121721] relative'>
            <div className="bg-white dark:bg-[#19202d] w-[80%] h-[13vh] mx-auto shadow-lg rounded-lg absolute -top-[80px] left-1/2 transform -translate-x-1/2 flex justify-between items-center">

                <div className="flex-1 h-full pl-16 pr-4 flex items-center relative border-r border-[#787677] ">
                    <input className='bg-transparent w-full text-[#121721] dark:text-white font-medium placeholder:text-[#787677] placeholder:font-medium focus:outline-none' type="text" name='searchTitle' placeholder='Filter By Title' />
                    <img className='absolute left-7 top-7' src={searchIcon} alt="" />
                </div>

                <div className="flex-1 h-full pl-16 pr-4 flex items-center relative border-r border-[#787677] ">
                    <input className='bg-transparent w-full text-[#121721] dark:text-white font-medium placeholder:text-[#787677] placeholder:font-medium focus:outline-none' type="text" name='searchLocation' placeholder='Filter By Location' />
                    <img className='absolute left-7 top-7' src={locationIcon} alt="" />
                </div>

                <div className="flex-1 pl-8 flex gap-6 items-center">
                    <div className='gap-3 flex items-center'>
                        <label className="flex items-center cursor-pointer">
                            <input
                                className="w-[20px] h-[20px] appearance-none rounded-sm 
            bg-[#7c8392] 
            dark:bg-[#313743] 
            checked:bg-[#5964e0] 
            dark:checked:bg-[#5964e0] 
            checked:border-transparent 
            focus:outline-none 
            border border-gray-400 dark:border-gray-600 
            cursor-pointer"
                                type="checkbox"
                                name="checkBox"
                                id="customCheckBox"
                            />
                            <span className="ml-2 text-[18px] font-semibold text-[#121721] dark:text-white">Full Time</span>
                        </label>
                    </div>

                    <button className='px-10 py-3 rounded-lg text-white text-[18px] font-semibold bg-[#5964e0] hover:bg-[#949beb] trasnsition-color delay-75'>
                        Search
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Home;