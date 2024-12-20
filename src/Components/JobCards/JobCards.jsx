import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const JobCards = ({ title, location, isFullTime, handleSearch }) => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [visibleJobs, setVisibleJobs] = useState(9);

    useEffect(() => {
        fetch('./data.json')
            .then(response => response.json())
            .then(json => {
                setJobs(json);
                setFilteredJobs(json);
            });
    }, []);

    useEffect(() => {
        const filtered = jobs.filter(job => {
            const matchesTitle = title
                ? job.position.toLowerCase().includes(title.toLowerCase())
                : true;
            const matchesLocation = location
                ? job.location.toLowerCase().includes(location.toLowerCase())
                : true;
            const matchesFullTime = isFullTime
                ? job.contract === "Full Time"
                : true;

            return matchesTitle && matchesLocation && matchesFullTime;
        });

        setFilteredJobs(filtered);
    }, [title, location, isFullTime, jobs]);

    const loadMoreJobs = () => {
        setVisibleJobs(filteredJobs.length);
    };

    return (
        <div className='w-[80%] mx-auto py-28 md:py-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12'>
                {filteredJobs.length > 0 ? (
                    filteredJobs.slice(0, visibleJobs).map((job, index) => (
                        <div key={index} className="card bg-white dark:bg-[#19202d] px-8 py-12 shadow-sm rounded-md relative">
                            <img
                                style={{ backgroundColor: job?.logoBackground }}
                                src={job?.logo}
                                alt=""
                                className="w-12 h-12 rounded-2xl object-scale-down p-2 absolute left-8 -top-5"
                            />
                            <div className='flex gap-4 items-center text-[#6e8098] text-[16px] font-semibold'>
                                <p className='pb-2'>{job?.postedAt}</p>
                                <span>.</span>
                                <p className='pb-2'>{job?.contract}</p>
                            </div>

                            <div>
                                <Link to={`/${job?.id}`} className='text-[20px] text-[#192028] dark:text-white font-bold pb-3 cursor-pointer hover:opacity-50 transition duration-200 delay-75 ease-in-out'>
                                    {job?.position}
                                </Link>

                                <p className='text-[#6e8098] text-[16px] font-semibold'>
                                    {job?.company}
                                </p>
                            </div>

                            <div>
                                <p className='text-[#5964e0] pt-8 text-[16px] font-semibold'>
                                    {job?.location}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="w-full mx-auto text-[25px] font-bold text-center h-screen text-gray-500 dark:text-gray-400 text-lg">No Jobs Found</p>
                )}
            </div>

            {visibleJobs < filteredJobs.length && (
                <div className="flex justify-center mt-12">
                    <button
                        onClick={loadMoreJobs}
                        className='px-10 py-3 rounded-lg text-white text-[18px] font-semibold bg-[#5964e0] hover:bg-[#949beb] transition duration-200 delay-75 ease-in-out'
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default JobCards;
