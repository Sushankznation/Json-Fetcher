import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppContext } from '../context/AppContext';

const JsonInput: React.FC = () => {
    const { setJsonData } = useAppContext();
    const [url, setUrl] = useState<string>('https://api.adviceslip.com/advice');
    const [jsonInput, setJsonInput] = useState<string>('');

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setJsonData(response.data);
            toast.success("Data fetched successfully.");
        } catch (error) {
            toast.error("Error: Unable to fetch data from the endpoint.");
        }
    };

    const handleJsonInput = () => {
        try {
            const data = JSON.parse(jsonInput);
            setJsonData(data);
            toast.success("JSON data updated successfully.");
        } catch (error) {
            toast.error("Error: Invalid JSON format.");
        }
    };

    return (
        <div className="md:w-1/2 p-3 bg-gray-100 rounded-lg shadow-md">
            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="API Endpoint"
                className="w-full p-2 mb-3 border border-gray-300 rounded"
            />
            <button
                onClick={fetchData}
                className="bg-blue-500 text-white py-1 px-3 rounded mb-3 hover:bg-blue-600"
            >
                GET
            </button>
            <textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                placeholder="Enter or Edit JSON here"
                className="w-full h-40 p-2 border border-gray-300 rounded"
            />
            <button
                onClick={handleJsonInput}
                className="bg-green-500 text-white py-1 px-3 rounded mt-3 hover:bg-green-600"
            >
                Update JSON
            </button>

            {/* ToastContainer to render toast notifications */}
            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                pauseOnFocusLoss
            />
        </div>
    );
};

export default JsonInput;
