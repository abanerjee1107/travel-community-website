import React, { useState, useEffect } from 'react';
import authService from '../services/authService';

function Profile() {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        const fetchProfile = async () => {
            const fetchedProfile = await authService.getProfile();
            setProfile(fetchedProfile);
        };
        fetchProfile();
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const success = await authService.updateProfile(profile);
        if (success) {
            alert('Profile updated successfully');
        } else {
            alert('Profile update failed');
        }
    };

    return (
        <div>
            <h1>Profile</h1>
            <form onSubmit={handleUpdate}>
                <label>Email:</label>
                <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    required
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default Profile;
