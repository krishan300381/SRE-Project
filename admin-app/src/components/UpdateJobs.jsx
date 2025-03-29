import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import JobService from "../service/JobService";

const UpdateJob = () => {
  const { id } = useParams();
  const jobId = Number(id); // Ensure jobId is a valid number
  const navigate = useNavigate();

  // Job state
  const [job, setJob] = useState({
    department: "",
    vac_num: 0,
    newstag: "",
    postKey: [],
    posts: [],
    linkKey: [],
    links: [],
    dateKey: [],
    dates: [],
  });

  // Fetch job data when component mounts
  useEffect(() => {
    if (!jobId) return; // Prevent fetching if jobId is NaN

    JobService.getJobById(jobId)
      .then((response) => {
        console.log("Fetched Job Data:", response.data);
        setJob(response.data);
      })
      .catch((error) => console.error("Error fetching job:", error));
  }, [jobId]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle array inputs correctly
    if (["postKey", "posts", "linkKey", "links", "dateKey", "dates"].includes(name)) {
      setJob((prevJob) => ({
        ...prevJob,
        [name]: value.split(",").map((item) => item.trim()), // Convert comma-separated input to an array
      }));
    } else {
      setJob((prevJob) => ({
        ...prevJob,
        [name]: value,
      }));
    }
  };

  // Update job function
  const updateJob = (e) => {
    e.preventDefault();

    JobService.updateJob(jobId, job)
      .then(() => {
        console.log("Job updated successfully:", job);
        navigate("/");
      })
      .catch((error) => console.error("Error updating job:", error));
  };

  return (
    <div className="max-w-xl mx-auto bg-slate-800 my-20 rounded shadow py-6 px-8">
      <h2 className="text-4xl font-bold text-center py-4 text-white">Update Job</h2>

      {/* Department */}
      <input
        type="text"
        name="department"
        value={job.department}
        onChange={handleChange}
        placeholder="Department"
        className="w-full py-2 my-2 text-slate-800"
      />

      {/* Vacancy Number */}
      <input
        type="number"
        name="vac_num"
        value={job.vac_num}
        onChange={handleChange}
        placeholder="Vacancy Number"
        className="w-full py-2 my-2 text-slate-800"
      />

      {/* News Tag */}
      <input
        type="text"
        name="newstag"
        value={job.newstag}
        onChange={handleChange}
        placeholder="News Tag"
        className="w-full py-2 my-2 text-slate-800"
      />

      {/* Array Fields */}
      <input
        type="text"
        name="postKey"
        value={job.postKey.join(",")}
        onChange={handleChange}
        placeholder="Post Keys (comma-separated)"
        className="w-full py-2 my-2 text-slate-800"
      />

      <input
        type="text"
        name="posts"
        value={job.posts.join(",")}
        onChange={handleChange}
        placeholder="Posts (comma-separated)"
        className="w-full py-2 my-2 text-slate-800"
      />

      <input
        type="text"
        name="linkKey"
        value={job.linkKey.join(",")}
        onChange={handleChange}
        placeholder="Link Keys (comma-separated)"
        className="w-full py-2 my-2 text-slate-800"
      />

      <input
        type="text"
        name="links"
        value={job.links.join(",")}
        onChange={handleChange}
        placeholder="Links (comma-separated)"
        className="w-full py-2 my-2 text-slate-800"
      />

      <input
        type="text"
        name="dateKey"
        value={job.dateKey.join(",")}
        onChange={handleChange}
        placeholder="Date Keys (comma-separated)"
        className="w-full py-2 my-2 text-slate-800"
      />

      <input
        type="text"
        name="dates"
        value={job.dates.join(",")}
        onChange={handleChange}
        placeholder="Dates (comma-separated)"
        className="w-full py-2 my-2 text-slate-800"
      />

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={updateJob}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
        >
          Update
        </button>

        <button
          onClick={() => navigate("/")}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UpdateJob;
