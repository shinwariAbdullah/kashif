import React, { useState } from 'react';

const LeaveRequest = () => {
  const [leaveRequest, setLeaveRequest] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle leave request submission
    alert('Leave request sent');
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Leave Request</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={leaveRequest}
          onChange={(e) => setLeaveRequest(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
          placeholder="Enter leave request"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Send Request
        </button>
      </form>
    </div>
  );
};

export default LeaveRequest;
