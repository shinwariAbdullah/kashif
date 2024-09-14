import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Admin Panel</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* View Records */}
          <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            <h2 className="text-xl font-semibold mb-4">View Records</h2>
            <p className="mb-4">Access and manage all student records efficiently.</p>
            <Link to="/view-records">
              <button className="bg-white text-blue-600 py-2 px-4 rounded-lg border border-blue-600 hover:bg-blue-50 transition duration-300">
                View Records
              </button>
            </Link>
          </div>
          
          {/* Edit Attendance */}
          <div className="bg-green-600 text-white p-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
            <h2 className="text-xl font-semibold mb-4">Edit Attendance</h2>
            <p className="mb-4">Update, add, or delete student attendance records.</p>
            <Link to="/edit-attendance">
              <button className="bg-white text-green-600 py-2 px-4 rounded-lg border border-green-600 hover:bg-green-50 transition duration-300">
                Edit Attendance
              </button>
            </Link>
          </div>
          
          {/* Generate Reports */}
          <div className="bg-purple-600 text-white p-6 rounded-lg shadow-md hover:bg-purple-700 transition duration-300">
            <h2 className="text-xl font-semibold mb-4">Generate Reports</h2>
            <p className="mb-4">Create detailed reports of student attendance within selected date ranges.</p>
            <Link to="/generate-reports">
              <button className="bg-white text-purple-600 py-2 px-4 rounded-lg border border-purple-600 hover:bg-purple-50 transition duration-300">
                Generate Reports
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
