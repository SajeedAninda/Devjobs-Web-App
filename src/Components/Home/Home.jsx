import React, { useState } from 'react';
import searchIcon from "../../assets/desktop/icon-search.svg";
import locationIcon from "../../assets/desktop/icon-location.svg";
import JobCards from '../JobCards/JobCards';

const Home = () => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [isFullTime, setIsFullTime] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();

        const searchTitle = e.target.searchTitle.value;
        const searchLocation = e.target.searchLocation.value;

        setTitle(searchTitle);
        setLocation(searchLocation);
    };

    const handleCheckboxChange = (e) => {
        setIsFullTime(e.target.checked);
    };

    return (
        <div className='bg-[#e7e8e9] h-fit dark:bg-[#121721] relative'>
            <form onSubmit={handleSearch} className="floatingBar bg-white dark:bg-[#19202d] w-[90%] lg:w-[80%] h-[20vh] md:h-[15vh] lg:h-[13vh] mx-auto shadow-lg rounded-lg absolute -top-[30px] lg:-top-[80px] left-1/2 transform -translate-x-1/2 grid grid-cols-2 lg:grid-cols-3 justify-between items-center">

                <div className="h-full pl-5 lg:pl-16 pr-4 flex items-center relative border-r border-[#787677]">
                    <input
                        className='bg-transparent w-full text-[#121721] dark:text-white font-medium placeholder:text-[#787677] placeholder:font-medium focus:outline-none'
                        type="text"
                        name='searchTitle'
                        placeholder='Filter By Title'
                    />
                    <img className='hidden lg:block absolute left-7 top-7' src={searchIcon} alt="Search Icon" />
                </div>

                <div className="h-full pl-5 lg:pl-16 pr-4 flex items-center relative lg:border-r border-[#787677]">
                    <input
                        className='bg-transparent w-full text-[#121721] dark:text-white font-medium placeholder:text-[#787677] placeholder:font-medium focus:outline-none'
                        type="text"
                        name='searchLocation'
                        placeholder='Filter By Location'
                    />
                    <img className='hidden lg:block absolute left-7 top-7' src={locationIcon} alt="Location Icon" />
                </div>

                <div className="col-span-2 lg:col-span-1 justify-center lg:justify-start pl-8 flex gap-6 items-center">
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
                                checked={isFullTime}
                                onChange={handleCheckboxChange}
                            />
                            <span className="ml-2 text-[14px] lg:text-[18px] font-semibold text-[#121721] dark:text-white">Full Time</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className='px-6 lg:px-10 py-2 lg:py-3 rounded-lg text-white text-[18px] font-semibold bg-[#5964e0] hover:bg-[#949beb] transition duration-200 delay-75 ease-in-out'
                    >
                        Search
                    </button>
                </div>
            </form>

            <JobCards title={title} location={location} isFullTime={isFullTime} handleSearch={handleSearch} />
        </div>
    );
};

export default Home;
