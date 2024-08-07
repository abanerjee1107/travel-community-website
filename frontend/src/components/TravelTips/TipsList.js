import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TipsList = () => {
    const [tips, setTips] = useState([]);

    useEffect(() => {
        const fetchTips = async () => {
            try {
                const response = await axios.get('http://ec2-54-91-3-52.compute-1.amazonaws.com:3000/tips');
                setTips(response.data);
            } catch (error) {
                console.error('Failed to fetch tips:', error);
            }
        };
        fetchTips();
    }, []);

    return (
        <div>
            <h1>Travel Tips</h1>
            {tips.map(tip => (
                <div key={tip.id}>
                    <h2>{tip.title}</h2>
                    <p>{tip.content}</p>
                </div>
            ))}
        </div>
    );
};

export default TipsList;
