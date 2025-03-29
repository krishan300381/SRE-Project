import React, { useEffect, useState } from 'react';
import JobService from '../service/JobService';
import { useNavigate } from 'react-router-dom';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        JobService.getAllJobs()
            .then(response => {
                console.log("API Response:", response.data);
                setJobs(response.data);
            })
            .catch(error => console.error("Error fetching jobs:", error));
    }, []);

    return (
        <div className='max-w-4xl mx-auto my-1'>
            <h2 className='text-4xl font-bold text-center my-4'>Job List</h2>

            {/* <button
                onClick={() => navigate('/AddJob')}
                className='bg-green-500 text-white px-4 py-2 rounded'
            > Add Job </button> */}

            <table className=" w-full border-collapse w-1\/2 text-center bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className=' text-blue-600'>
                    <tr className='bg-gray-200'>
                        <th className=' border-gray-400 p-2'>Department</th>
                        <th className=' border-gray-400 p-2'>Vacancies</th>
                        <th className=' border-gray-400 p-2'>News Tag</th>
                        <th className=' border-gray-400 p-2'>Actions</th><br />
                    </tr>
                </thead>
                <tbody>
  {/* Debugging log to check the structure of jobs */}
  {console.log("Jobs data:", jobs)}

  {jobs.map((job, index) => {
    // Ensure job ID is correctly retrieved
    const jobId = job?.id; // Using optional chaining to avoid errors if job is undefined

    return (
      <tr key={jobId || `job-${index}`} className='border-b border-gray-400 text-center'>
        <td class=" border-gray-400 p-2">{job.department}</td>
        <td class=" border-gray-400 p-2">{job.vac_num}</td>
        <td class=" border-gray-400 p-2">{job.newstag}</td>
        <td class=" border-gray-400 p-2">
          <button
            onClick={() => {
              console.log("Navigating to:", `/editJob/${jobId}`); // Debugging log
              navigate(`/editJob/${jobId}`);
            }}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            Edit
          </button>

          <button
            onClick={() =>
              JobService.deleteJob(jobId).then(() =>
                setJobs(jobs.filter((j) => j.id !== jobId))
              )
            }
            className="bg-red-500 text-white px-2 py-1 rounded ml-2"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  })}
</tbody>

            </table>
        </div>
        
    );
};

export default JobList;
