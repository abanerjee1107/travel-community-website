import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RewardsList = () => {
    const [rewards, setRewards] = useState([]);

    useEffect(() => {
        const fetchRewards = async () => {
            try {
                const response = await axios.get('http://localhost:3000/rewards');
                setRewards(response.data);
            } catch (error) {
                console.error('Failed to fetch rewards:', error);
            }
        };
        fetchRewards();
    }, []);

    return (
        <div>
            <h1>Rewards</h1>
            {rewards.map(reward => (
                <div key={reward.id}>
                    <h2>{reward.title}</h2>
                    <p>{reward.description}</p>
                </div>
            ))}
        </div>
    );
};

export default RewardsList;
