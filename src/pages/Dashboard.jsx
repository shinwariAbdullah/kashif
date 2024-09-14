import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-white">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Student Dashboard</h1>
        <div className="space-y-4">
          <button 
            onClick={() => navigate('/attendance')} 
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Mark Attendance
          </button>
          <button 
            onClick={() => navigate('/leave-request')} 
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            Mark Leave
          </button>
          <button 
            onClick={() => navigate('/attendance-report')} 
            className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
          >
            Attendance Report
          </button>
          <button 
            onClick={() => navigate('/profile')} 
            className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-orange-700 transition duration-300"
          >
            Edit Profile
          </button>
          {/* <button 
            onClick={() => navigate('/generate-reports')} 
            className="w-full bg-red-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
          >
            Generate Reports
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
