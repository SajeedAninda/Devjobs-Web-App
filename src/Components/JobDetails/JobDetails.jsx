import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

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
        <div>
            Hi
        </div>
    );
};

export default JobDetails;