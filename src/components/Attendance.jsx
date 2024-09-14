import React, { useState } from 'react';

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([
    { id: 1, name: 'John Doe', date: '2024-09-10', status: 'Present' },
    { id: 2, name: 'Jane Smith', date: '2024-09-10', status: 'Absent' },
    // More records
  ]);

  const [userAttendance, setUserAttendance] = useState(''); // Track user attendance input

  // Function to handle marking attendance
  const handleMarkAttendance = () => {
    // Logic to mark attendance
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Attendance Records</h2>
      
      {/* Mark Attendance */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-4">Mark Attendance</h3>
        <button
          onClick={handleMarkAttendance}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Mark My Attendance
        </button>
      </div>
      
      {/* View Attendance */}
      {attendanceData.length > 0 ? (
        <div className="space-y-4">
          {attendanceData.map(item => (
            <div key={item.id} className="p-4 bg-white border border-gray-300 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-700">{item.name}</h3>
                <span
                  className={`px-2 py-1 text-sm font-medium rounded-full ${
                    item.status === 'Present' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <p className="text-gray-600"><strong>Date:</strong> {item.date}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No attendance records available.</p>
      )}

      {/* Leave Request Form */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Leave Request</h3>
        <form className="bg-white p-6 rounded shadow-md">
          <label className="block mb-2">
            <span className="text-gray-700">Leave Reason:</span>
            <textarea
              className="w-full mt-1 p-2 border rounded"
              rows="4"
              placeholder="Enter reason for leave"
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Send Leave Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Attendance;
