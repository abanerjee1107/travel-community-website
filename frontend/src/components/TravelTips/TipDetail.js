import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TipDetail = ({ match }) => {
    const [tip, setTip] = useState({});

    useEffect(() => {
        const fetchTip = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/tips/${match.params.id}`);
                setTip(response.data);
            } catch (error) {
                console.error('Failed to fetch tip:', error);
            }
        };
        fetchTip();
    }, [match.params.id]);

    return (
        <div>
            <h1>{tip.title}</h1>
            <p>{tip.content}</p>
        </div>
    );
};

export default TipDetail;
