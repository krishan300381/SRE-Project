import React from 'react';
import "../index.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="fixed top-0 left-0 w-full h-16 flex items-center px-6 bg-gradient-to-r from-blue-600 to-purple-500 shadow-md z-50">
        <a className="text-3xl font-extrabold text-white tracking-wide hover:text-yellow-300 transition duration-300" href="/">
            SarkariResulte.com
        </a>

        <nav className="ml-auto space-x-6">
            <a href="/" className="text-lg font-semibold text-white hover:text-yellow-300 transition duration-300">
            Home
            </a>
            
        </nav>
        </div>

    );
};

export default Navbar;
