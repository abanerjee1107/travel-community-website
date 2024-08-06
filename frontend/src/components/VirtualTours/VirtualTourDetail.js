import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VirtualTourDetail = ({ match }) => {
    const [tour, setTour] = useState({});

    useEffect(() => {
        const fetchTour = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/virtual-tours/${match.params.id}`);
                setTour(response.data);
            } catch (error) {
                console.error('Failed to fetch virtual tour:', error);
            }
        };
        fetchTour();
    }, [match.params.id]);

    return (
        <div>
            <h1>{tour.title}</h1>
            <p>{tour.description}</p>
        </div>
    );
};

export default VirtualTourDetail;
