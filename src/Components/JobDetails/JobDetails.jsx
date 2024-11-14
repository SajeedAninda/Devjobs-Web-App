import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const { id } = useParams();
    const [jobs, setJobs] = useState([]);
    const [matchedJob, setMatchedJob] = useState(null);

    useEffect(() => {
        fetch('./data.json')
            .then((response) => response.json())
            .then((json) => {
                setJobs(json);
                const job = json.find((job) => job.id === parseInt(id));
                setMatchedJob(job);
            });
    }, [id]);

    console.log(matchedJob)

    return (
        <div className='bg-[#e7e8e9] h-fit dark:bg-[#121721] relative py-24'>
            <div className="floatingBar bg-white dark:bg-[#19202d] w-[90%] lg:w-[60%] h-[23vh] mx-auto shadow-lg rounded-lg absolute -top-[40px] lg:-top-[80px] left-1/2 transform -translate-x-1/2 flex items-center">
                <div className='w-[30%] lg:w-[20%] h-full flex justify-center items-center rounded-l-lg' style={{ backgroundColor: matchedJob?.logoBackground }}>
                    <img

                        src={matchedJob?.logo}
                        alt=""
                        className="w-[50%]"
                    />
                </div>

                <div className='w-[70%] lg:w-[80%] py-4 lg:py-8 px-6 lg:px-12 flex justify-between items-center'>
                    <div>
                        <p className='text-[#192028] text-[24px] dark:text-white font-bold '>
                            {matchedJob?.company}
                        </p>
                        <p className='mt-2 text-[#6e8098]'>
                            {matchedJob?.website}
                        </p>
                    </div>

                    <div className='hidden md:block'>
                        <Link to={`${matchedJob?.website}`} className='px-5 py-4 rounded-md text-[#5964e0] dark:text-white text-[16px] font-bold bg-[#eeeffc] hover:bg-[#939bf4] dark:bg-[#303642] dark:hover:bg-[#696e76] transition duration-200 delay-75 ease-in-out'>
                            Company Site
                        </Link>
                    </div>
                </div>

            </div>

            <div className='detailsSection bg-white dark:bg-[#19202d] w-[90%] lg:w-[60%] mx-auto px-12 py-8 rounded-lg'>
                <div className='flex gap-4 items-center text-[#6e8098] text-[18px] font-medium'>
                    <p className='pb-2'>{matchedJob?.postedAt}</p>
                    <span>.</span>
                    <p className='pb-2'>{matchedJob?.contract}</p>
                </div>

                <div >
                    <div className='flex justify-between items-center'>
                        <h2 className='text-[28px] text-[#121721] dark:text-white font-bold'>
                            {matchedJob?.position}
                        </h2>
                        <Link to={`${matchedJob?.apply}`} className='px-8 py-3 rounded-md text-white text-[16px] font-semibold bg-[#5964e0] hover:bg-[#949beb] transition duration-200 delay-75 ease-in-out'>
                            Apply Now
                        </Link>
                    </div>
                    <p className='mt-2 text-[14px] text-[#5964e0] font-semibold'>
                        {matchedJob?.location}
                    </p>
                </div>

                <div>
                    <p className='mt-8 text-[16px] text-[#6e8098] font-medium leading-8'>
                        {matchedJob?.description}
                    </p>
                </div>

                <div className='mt-8'>
                    <h3 className='text-[20px] text-[#121721] dark:text-white font-bold'>
                        Requirements
                    </h3>
                    <p className='mt-4 text-[16px] text-[#6e8098] font-medium leading-8'>
                        {matchedJob?.requirements?.content}
                    </p>
                    <ul className='text-[16px] text-[#6e8098] font-medium  list-disc'>
                        {matchedJob?.requirements?.items.map((item, index) => (
                            <li key={index} className='text-[#6e8098] mt-4 ml-5 pl-5'>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='mt-8'>
                    <h3 className='text-[20px] text-[#121721] dark:text-white font-bold'>
                        What You Will Do
                    </h3>
                    <p className='mt-4 text-[16px] text-[#6e8098] font-medium leading-8'>
                        {matchedJob?.role?.content}
                    </p>
                    <ol className='text-[16px] text-[#6e8098] font-medium  list-decimal'>
                        {matchedJob?.role?.items.map((item, index) => (
                            <li key={index} className='text-[#6e8098] mt-4 ml-5 pl-5'>
                                {item}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;