import React, { useState } from 'react';
import axios from 'axios';

const ProfilePictureUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.post('http://localhost:3000/users/upload-profile-picture', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            // Handle success
        } catch (error) {
            console.error('File upload failed:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Upload</button>
        </form>
    );
};

export default ProfilePictureUpload;
