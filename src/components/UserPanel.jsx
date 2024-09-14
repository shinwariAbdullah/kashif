import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserPanel = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-8">User Panel</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
        <button
          onClick={() => navigate('/attendance')}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Mark Attendance
        </button>
        <button
          onClick={() => navigate('/leave-request')}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
        >
          Mark Leave
        </button>
        <button
          onClick={() => navigate('/view-attendance')}
          className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition"
        >
          View Attendance
        </button>
      </div>
    </div>
  );
};

export default UserPanel;
