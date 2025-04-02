import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientService from "../service/ClientService";

const FrontPage = () => {
    const [listItems, setListItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        ClientService.getAllListItems()
            .then(response => {
                if (Array.isArray(response.data) && Array.isArray(response.data[0])) {
                    setListItems(response.data[0]); // ✅ Extracts the inner array
                } else {
                    console.error("⚠️ Unexpected API response format:", response.data);
                    setListItems([]); // Resets state if the response format is incorrect
                }
            })
            .catch(error => console.error("❌ Error fetching data:", error));
    }, []);

    return (
        <div className="max-w-6xl mx-auto my-10 px-4">
            <h2 className="text-4xl font-bold text-center my-6 text-gray-800">Latest Jobs</h2>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gradient-to-r from-green-600 to-blue-500 text-white">
                            <th className="text-xl p-4 border">Job Listings</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems.length > 0 ? (
                            listItems.map((listItem) => (
                                <tr
                                    key={listItem.id}
                                    className="border-b border-gray-400 text-center hover:bg-gray-100 transition"
                                >
                                    <td
                                        className="border-gray-400 p-3 cursor-pointer text-blue-600 hover:text-blue-800 underline"
                                        onClick={() => navigate(`/view/${listItem.id}`)}
                                    >
                                        {listItem.newstag || "No title available"}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="1" className="text-gray-500 p-6 text-center">
                                    No jobs available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FrontPage;
