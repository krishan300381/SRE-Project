import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import JobService from "../service/JobService";

const UpdateJob = () => {
  const { id } = useParams();
  const jobId = Number(id);
  const navigate = useNavigate();

  const [job, setJob] = useState({
    department: "",
    vac_num: 0,
    newstag: "",
    ac_date: "Null",
    re_date: "Null",
    postKey: [],
    posts: [],
    linkKey: [],
    links: [],
    dateKey: [],
    dates: [],
  });

  useEffect(() => {
    if (!jobId) return;

    JobService.getJobById(jobId)
      .then((response) => {
        console.log("Fetched Job Data:", response.data);
        setJob(response.data);
      })
      .catch((error) => console.error("Error fetching job:", error));
  }, [jobId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setJob((prevJob) => ({
        ...prevJob,
        [name]: name.includes("Key") || name === "posts" || name === "links" || name === "dates"
            ? value.split(",").map((v) => v.trim()) // Convert comma-separated values into an array
            : value
    }));

    console.log(`Updated ${name}:`, value);  // Debugging
};




const updateJob = async (e) => {
  e.preventDefault();

  console.log("Final Job Data Before API Call:", job); // Debugging

  try {
      await JobService.updateJob(jobId, job);
      console.log("Job updated successfully:", job);
      navigate("/");
  } catch (error) {
      console.error("Error updating job:", error);
  }
};


  return (
    <div className="max-w-xl mx-auto bg-gradient-to-r from-slate-600 to-blue-900 my-20 rounded shadow py-6 px-8">
      <h2 className="text-4xl font-bold text-center py-4 text-white">Update Job</h2>
      <lable className="text-white">Department:</lable>
      <input
        type="text"
        name="department"
        value={job.department}
        onChange={handleChange}
        placeholder="Department"
        className="w-full py-2 my-2 text-slate-800"
      />
      <lable className="text-white">Total Vacancy:</lable>
      <input
        type="number"
        name="vac_num"
        value={job.vac_num}
        onChange={handleChange}
        placeholder="Vacancy Number"
        className="w-full py-2 my-2 text-slate-800"
      />
      <lable className="text-white">News_Tag:</lable>
      <input
        type="text"
        name="newstag"
        value={job.newstag}
        onChange={handleChange}
        placeholder="News Tag"
        className="w-full py-2 my-2 text-slate-800"
      />
      <lable className="text-white">Admit-card Date yyyymmdd:</lable>
      <input
        type="text"
        name="ac_date"
        value={job.ac_date || ""}
        onChange={handleChange}
        placeholder="admit card date"
        className="w-full py-2 my-2 text-slate-800"
      />

      <lable className="text-white">Result Date yyyymmdd:</lable>
      <input
          type="text"
          name="re_date"
          value={job.re_date || ""}
          onChange={handleChange}
          placeholder="Result Date"
          className="w-full py-2 my-2 text-slate-800"
      />

      <lable className="text-white">Post Details:key array</lable>
      <input
        type="text"
        name="postKey"
        value={job.postKey.join(",")}
        onChange={handleChange}
        placeholder="Post Keys (comma-separated)"
        className="w-full py-2 my-2 text-slate-800"
      />
      <lable className="text-white">:post num array:</lable>
      <input
        type="text"
        name="posts"
        value={job.posts.join(",")}
        onChange={handleChange}
        placeholder="Posts (comma-separated)"
        className="w-full py-2 my-2 text-slate-800"
      />
      <lable className="text-white">link :key array</lable>
      <input
        type="text"
        name="linkKey"
        value={job.linkKey.join(",")}
        onChange={handleChange}
        placeholder="Link Keys (comma-separated)"
        className="w-full py-2 my-2 text-slate-800"
      />
      <lable className="text-white">link text :links array</lable>
      <input
        type="text"
        name="links"
        value={job.links.join(",")}
        onChange={handleChange}
        placeholder="Links (comma-separated)"
        className="w-full py-2 my-2 text-slate-800"
      />
      <lable className="text-white">Extra dates:key array</lable>
      <input
        type="text"
        name="dateKey"
        value={job.dateKey.join(",")}
        onChange={handleChange}
        placeholder="Date Keys (comma-separated)"
        className="w-full py-2 my-2 text-slate-800"
      />
      <lable className="text-white">extra dates: array</lable>
      <input
        type="text"
        name="dates"
        value={job.dates.join(",")}
        onChange={handleChange}
        placeholder="Dates (comma-separated)"
        className="w-full py-2 my-2 text-slate-800"
      />

      

      {/* Snippet Button */}
      

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
