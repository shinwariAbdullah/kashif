import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';
import Attendance from './components/Attendance';
import AttendanceReport from './components/AttendanceReport';
import LeaveRequest from './components/LeaveRequest';
import Profile from './components/Profile';
import UserPanel from './components/UserPanel';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
// import GenerateReports from './components/GenerateReports';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/attendance-report" element={<AttendanceReport />} />
        <Route path="/leave-request" element={<LeaveRequest />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user-panel" element={<UserPanel />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/generate-reports" element={<GenerateReports />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
