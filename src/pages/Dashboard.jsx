import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-8">Student Dashboard</h1>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mb-4">
        Mark Attendance
      </button>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mb-4">
        Mark Leave
      </button>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mb-4">
        View Attendance
      </button>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">
        Edit Profile
      </button>
    </div>
  );
};

export default Dashboard;
