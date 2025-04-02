import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClientService from "../service/ClientService";  // Ensure this is the correct path

const JobView = () => {
    const { jobId } = useParams();  // ✅ Get jobId from URL
    const [jobData, setJobData] = useState(null);  // ✅ State to store job details

    useEffect(() => {
        if (jobId) {
            ClientService.getJobById(jobId)
                .then(response => {
                    console.log("✅ Job Data:", response.data); // Debugging log
                    setJobData(response.data);
                })
                .catch(error => console.error("Error fetching job:", error));
        }
    }, [jobId]);

    if (!jobData) {
        return <p>Loading job details...</p>;  // 
    }

    return (
        <div className="max-w-4xl mx-auto my-10 p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-center">{jobData.newstag}</h2>
            <p className="text-gray-700 text-center">{jobData.department}</p>

            <table className="w-full mt-4 border-collapse border border-gray-400">
                <thead>
                    <tr className="bg-gray-800 text-white">
                        <th className="p-2 border">Post Name</th>
                        <th className="p-2 border">Vacancies</th>
                    </tr>
                </thead>
                <tbody>
                    {jobData.postKey.map((post, index) => (
                        <tr key={index} className="border-b border-gray-400 text-center">
                            <td className="p-2 border">{post}</td>
                            <td className="p-2 border">{jobData.posts[index]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3 className="text-2xl font-semibold mt-6">Important Links</h3>
                <ul className="mt-2">
                    {jobData?.linkKey?.map((key, index) => {
                        const link = jobData?.links?.[index]; // Safely access link

                        if (link && link !== "null") { // Ensure link exists and is valid
                            // Ensure absolute URL
                            const absoluteLink = link.startsWith("http") ? link : `https://${link}`;

                            return (
                                <li key={index} className="text-blue-600 hover:underline cursor-pointer">
                                    <a href={absoluteLink} target="_blank" rel="noopener noreferrer">
                                        {key}
                                    </a>
                                </li>
                            );
                        }
                        return null; // Skip if link is "null"
                    })}
                </ul>

            <h3 className="text-xl font-semibold mt-6">Important Dates</h3>
            <ul className="mt-2">
                {jobData.dateKey.map((key, index) => (
                    jobData.dates[index] !== "null" && (
                        <li key={index}>
                            <span className="font-semibold">{key}:</span> {jobData.dates[index]}
                        </li>
                    )
                ))}
            </ul>
        </div>
    );
};

export default JobView;
