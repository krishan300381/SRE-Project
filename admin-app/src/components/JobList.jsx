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
      <div className="flex justify-center my-4 ">
      <div className="w-full max-w-5xl mx-3">
        <h2 className="text-3xl font-bold text-center my-4">Job List</h2>
    
        <table className="w-full max-w-5xl border-collapse bg-white shadow-lg rounded-lg overflow-hidden text-center -mx-20">
          <thead className="text-xl">
            <tr className="bg-gradient-to-r from-slate-500 to-blue-500 text-white">
              <th className="border-gray-400 p-2">Department</th>
              <th className="border-gray-400 p-2">Vacancies</th>
              <th className="border-gray-400 p-2">News Tag</th>
              <th className="w-full text-center border-gray-400 p-5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => {
              const jobId = job?.id;
    
              return (
                <tr key={jobId || `job-${index}`} className="bg-gradient-to-r from-slate-600 to-blue-900 text-white border-b border-gray-400 text-center">
                  <td className="w-1 border-gray-400 p-2 whitespace-nowrap overflow-hidden">
                    <div className="inline-block">{job.department}</div>
                  </td>
                  <td className="border-gray-400 p-2">{job.vac_num}</td>
                  <td className="w-1 border-gray-400 p-2 whitespace-nowrap overflow-hidden">
                    <div className="inline-block">{job.newstag}</div>
                  </td>
                  <td className="w-full border-gray-400 p-2">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => navigate(`/editJob/${jobId}`)}
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                      >
                        Update
                      </button>
    
                      <button
                        onClick={() =>
                          JobService.deleteJob(jobId).then(() =>
                            setJobs(jobs.filter((j) => j.id !== jobId))
                          )
                        }
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Delete!
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    
        
    );
};

export default JobList;
