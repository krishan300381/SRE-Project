import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JobService from '../service/JobService';

const AddJob = () => {
    const navigate = useNavigate();
    const [job, setJob] = useState({
        department: "",
        vac_num: 0,
        newstag: "",
        ac_date: "Null",
        re_date: "Null",
        postPairs: [{ key: "", value: "" }],
        linkPairs: [{ key: "", value: "" }],
        datePairs: [{ key: "", value: "" }]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJob({ ...job, [name]: value });
    };

    const handlePairChange = (index, field, type, value) => {
        setJob(prevJob => {
            const updatedPairs = [...prevJob[field]];
            updatedPairs[index][type] = value;
            return { ...prevJob, [field]: updatedPairs };
        });
    };

    const addPair = (field) => {
        setJob(prevJob => ({
            ...prevJob,
            [field]: [...prevJob[field], { key: "", value: "" }]
        }));
    };

    const getCurrentDate = () => {
        const date = new Date();
        return `${date.getFullYear().toString().slice(2)}${(date.getMonth() + 1).toString().padStart(2, "0")}${date.getDate().toString().padStart(2, "0")}`;
    };

    const toggleDate = (field) => {
        setJob(prevJob => ({
            ...prevJob,
            [field]: prevJob[field] === "Null" ? getCurrentDate() : "Null"
        }));
    };

    const saveJob = (e) => {
        e.preventDefault();

        const formattedJob = {
            department: job.department,
            vac_num: job.vac_num,
            newstag: job.newstag,
            ac_date: job.ac_date,
            re_date: job.re_date,
            postKey: job.postPairs.map(p => p.key),
            posts: job.postPairs.map(p => p.value),
            linkKey: job.linkPairs.map(p => p.key),
            links: job.linkPairs.map(p => p.value),
            dateKey: job.datePairs.map(p => p.key),
            dates: job.datePairs.map(p => p.value)
        };

        JobService.createJob(formattedJob)
            .then(() => navigate("/"))
            .catch(error => console.error("Error saving job:", error));
    };

    return (
        <div className='max-w-xl mx-auto bg-gradient-to-r from-slate-600 to-blue-900 text-blue-700 my-20 rounded shadow py-4 px-8'>
            <h2 className='text-4xl font-bold text-center py-4 text-white'>Add Job</h2>

            <input type='text' name="department" value={job.department} onChange={handleChange} placeholder='Department' className="w-full py-2 my-2 text-slate-800" />
            <input type='number' name="vac_num" value={job.vac_num} onChange={handleChange} placeholder='Vacancy Number' className="w-full py-2 my-2 text-slate-800" />
            <input type='text' name="newstag" value={job.newstag} onChange={handleChange} placeholder='News Tag' className="w-full py-2 my-2 text-slate-800" />

            {/* Toggle Buttons */}
            {[{ label: "Admit Card Date", field: "ac_date" }, { label: "Result Date", field: "re_date" }].map(({ label, field }) => (
                <div key={field} className="flex items-center my-4">
                    <span className="text-white mr-4">{label}:</span>
                    <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="hidden" checked={job[field] !== "Null"} onChange={() => toggleDate(field)} />
                        <div className={`w-12 h-6 rounded-full p-1 transition duration-300 ${job[field] !== "Null" ? "bg-green-500" : "bg-gray-400"}`}>
                            <div className={`w-4 h-4 bg-white rounded-full transition duration-300 transform ${job[field] !== "Null" ? "translate-x-6" : ""}`}></div>
                        </div>
                    </label>
                    <span className="ml-2 text-white">{job[field]}</span>
                </div>
            ))}

            {/* Pair Fields */}
            {[{ title: "Post", field: "postPairs" }, { title: "Link", field: "linkPairs" }, { title: "Date", field: "datePairs" }].map(({ title, field }) => (
                <div key={field} className="my-4">
                    <h3 className='text-lg font-semibold text-white'>{title} Pairs</h3>
                    {job[field].map((pair, index) => (
                        <div key={index} className="flex space-x-2">
                            <input type="text" value={pair.key} onChange={(e) => handlePairChange(index, field, "key", e.target.value)} placeholder={`${title} Key`} className="w-1/2 py-2 my-2 text-slate-800" />
                            <input type="text" value={pair.value} onChange={(e) => handlePairChange(index, field, "value", e.target.value)} placeholder={`${title}`} className="w-1/2 py-2 my-2 text-slate-800" />
                        </div>
                    ))}
                    <button onClick={() => addPair(field)} className="bg-blue-400 hover:bg-blue-700 py-1 px-4 rounded">+ Add {title}</button>
                </div>
            ))}

            <div className="flex justify-center space-x-4 mt-6">
                <button onClick={saveJob} className='bg-green-400 hover:bg-green-700 py-2 px-6 rounded'>Save</button>
                <button onClick={() => navigate("/")} className='bg-red-400 hover:bg-red-700 py-2 px-6 rounded'>Cancel</button>
            </div>
        </div>
    );
};

export default AddJob;
