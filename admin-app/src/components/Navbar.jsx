import React from 'react';
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    return (
        // bg-slate-50
        <div className="fixed top-0 left-0 w-full h-16 flex items-center px-6 bg-gradient-to-r from-blue-700 to-purple-700 shadow-md z-50">
            <a className="text-3xl font-extrabold text-white tracking-wide hover:text-yellow-200 transition duration-300" href="/">sarkariresulte.com</a>
            <div className="ml-auto space-x-4">
                {/* Add Job Button */}
                <button 
                onClick={() => navigate('/AddJob')} 
                className="font-mono font-bold text-xl px-4 py-2 rounded bg-gradient-to-r from-purple-400 to-green-500 text-white hover:from-green-500 hover:to-purple-400 hover:text-yellow-400 transition duration-300 "
            >
                Add-Job
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
