import React, { useState } from 'react';

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleFileChange = (e) => {
    setProfilePicture(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4">Edit Profile</h1>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      {profilePicture && <img src={profilePicture} alt="Profile" className="w-32 h-32 rounded-full" />}
    </div>
  );
};

export default Profile;
