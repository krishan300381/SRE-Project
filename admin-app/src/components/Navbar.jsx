import React from 'react';
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    return (
        // bg-slate-50
        <div className=" h-16 px-5 flex items-center bg-black bg-opacity-5 p-6">
            <a className="text-3xl font-serif text-blue-600" href="/">sarkariresulte.com</a>
            <div className="ml-auto space-x-4">
                {/* Add Job Button */}
                <button 
                onClick={() => navigate('/AddJob')} 
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Add Job
               </button>
            {/* <div className="text-right mb-4"> */}
                {/* <a className="text-yellow-400 hover:text-blue-400" href="/">Home</a> */}
                {/* <a className="hover:text-blue-400" href="/profile">Profile</a> */}
                {/* <a className="hover:text-blue-400" href="/logout">Logout</a> */}
            </div>
        </div>
    );
};

export default Navbar;
