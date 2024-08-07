import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Messages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get('http://ec2-54-91-3-52.compute-1.amazonaws.com:3000/messages');
                setMessages(response.data);
            } catch (error) {
                console.error('Failed to fetch messages:', error);
            }
        };
        fetchMessages();
    }, []);

    return (
        <div>
            <h1>Messages</h1>
            {messages.map(message => (
                <div key={message.id}>
                    <p>{message.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Messages;
