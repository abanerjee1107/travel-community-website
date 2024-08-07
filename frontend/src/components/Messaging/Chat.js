import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
    const [message, setMessage] = useState('');

    const handleSendMessage = async () => {
        try {
            await axios.post('http://ec2-54-91-3-52.compute-1.amazonaws.com:3000/messages', { content: message });
            setMessage('');
        } catch (error) {
            console.error('Failed to send message:', error);
        }
    };

    return (
        <div>
            <h1>Chat</h1>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default Chat;
