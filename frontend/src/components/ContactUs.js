import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
    const [message, setMessage] = useState({ name: '', email: '', content: '' });

    const handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/contact', message);
            alert('Message sent!');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={message.name} onChange={handleChange} placeholder="Name" required />
            <input name="email" value={message.email} onChange={handleChange} placeholder="Email" required />
            <textarea name="content" value={message.content} onChange={handleChange} placeholder="Message" required />
            <button type="submit">Send</button>
        </form>
    );
};

export default ContactUs;
