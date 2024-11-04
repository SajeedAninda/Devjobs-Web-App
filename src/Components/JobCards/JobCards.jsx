import React, { useEffect, useState } from 'react';

const JobCards = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(response => response.json())
            .then(json => setJobs(json));
    }, []);

    return (
        <div className='w-[80%] mx-auto pt-24 pb-12'>
            <div className='grid grid-cols-3 gap-6'>
                {
                    jobs?.map((job, index) => (
                        <div key={index} className="card bg-white dark:bg-[#19202d] px-8 py-12 shadow-sm rounded-md">
                            <div className='flex gap-4 items-center text-[#6e8098] text-[16px] font-semibold'>
                                <p className='pb-2'>{job?.postedAt}</p>
                                <span>.</span>
                                <p className='pb-2'>{job?.contract}</p>
                            </div>

                            <div>
                                <p className='text-[20px] text-[#192028] dark:text-white font-bold pb-3'>
                                    {job?.position}
                                </p>

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
                }
            </div>
        </div>
    );
};

export default JobCards;
