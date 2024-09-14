import React, { useState } from 'react';
import axios from 'axios';

const AttendanceReport = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleGenerateReport = async () => {
    if (!startDate || !endDate) {
      setError('Please select both start and end dates.');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      // Mock API request - replace with your actual endpoint
      const response = await axios.get('/api/attendance-report', {
        params: { startDate, endDate }
      });
      setReportData(response.data);
    } catch (err) {
      setError('Failed to generate report. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Attendance Report</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="start-date" className="block text-sm font-medium mb-1">Start Date</label>
          <input
            type="date"
            id="start-date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="end-date" className="block text-sm font-medium mb-1">End Date</label>
          <input
            type="date"
            id="end-date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          onClick={handleGenerateReport}
          className={`bg-blue-500 text-white py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Report'}
        </button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {reportData.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Report Results</h2>
            <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Student Name</th>
                  <th className="p-3 text-left">Father's Name</th>
                  <th className="p-3 text-left">Roll Number</th>
                  <th className="p-3 text-left">Class</th>
                  <th className="p-3 text-left">Grade</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((record, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3">{record.date}</td>
                    <td className="p-3">{record.studentName}</td>
                    <td className="p-3">{record.fathersName}</td>
                    <td className="p-3">{record.rollNumber}</td>
                    <td className="p-3">{record.className}</td>
                    <td className="p-3">{record.grade}</td>
                    <td className="p-3">{record.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttendanceReport;
