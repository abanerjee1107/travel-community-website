import React, { useState } from 'react';
import axios from 'axios';

const SocialLinks = () => {
    const [links, setLinks] = useState({ facebook: '', twitter: '', linkedin: '' });

    const handleChange = (e) => {
        setLinks({ ...links, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://ec2-54-91-3-52.compute-1.amazonaws.com:3000/users/update-social-links', links);
            // Handle success
        } catch (error) {
            console.error('Update failed:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="facebook" value={links.facebook} onChange={handleChange} placeholder="Facebook URL" />
            <input name="twitter" value={links.twitter} onChange={handleChange} placeholder="Twitter URL" />
            <input name="linkedin" value={links.linkedin} onChange={handleChange} placeholder="LinkedIn URL" />
            <button type="submit">Update</button>
        </form>
    );
};

export default SocialLinks;
