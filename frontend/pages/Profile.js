import React, { useState } from 'react';
import authService from '../services/authService';

function Profile() {
    const [profilePicture, setProfilePicture] = useState(null);

    const handlePictureUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('profilePicture', file);

        const response = await authService.uploadProfilePicture(formData);
        setProfilePicture(response.profilePicture);
    };

    return (
        <div>
            <h1>Profile</h1>
            <input type="file" onChange={handlePictureUpload} />
            {profilePicture && (
                <div>
                    <img src={`http://localhost:5000/${profilePicture}`} alt="Profile" />
                </div>
            )}
        </div>
    );
}

export default Profile;
