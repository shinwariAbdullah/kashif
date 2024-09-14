import React, { useState } from 'react';
import axios from 'axios';

const LeaveRequest = () => {
  const [leaveRequest, setLeaveRequest] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!leaveRequest.trim()) {
      setStatusMessage('Please enter a leave request.');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage('');

    try {
      // Replace with your actual API endpoint
      await axios.post('/api/leave-requests', { request: leaveRequest });

      setLeaveRequest('');
      setStatusMessage('Leave request sent successfully!');
    } catch (error) {
      setStatusMessage('Failed to send leave request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Leave Request</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={leaveRequest}
          onChange={(e) => setLeaveRequest(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          placeholder="Enter your leave request here"
          rows="6"
        />
        <button
          type="submit"
          className={`w-full bg-blue-600 text-white py-3 rounded-lg font-medium ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700 transition duration-300'}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Request'}
        </button>
      </form>
      {statusMessage && (
        <p className={`mt-4 text-center text-lg font-medium ${statusMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
          {statusMessage}
        </p>
      )}
    </div>
  );
};

export default LeaveRequest;
