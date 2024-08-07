import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VirtualTourList = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await axios.get('http://ec2-54-91-3-52.compute-1.amazonaws.com:3000/virtual-tours');
                setTours(response.data);
            } catch (error) {
                console.error('Failed to fetch virtual tours:', error);
            }
        };
        fetchTours();
    }, []);

    return (
        <div>
            <h1>Virtual Tours</h1>
            {tours.map(tour => (
                <div key={tour.id}>
                    <h2>{tour.title}</h2>
                    <p>{tour.description}</p>
                </div>
            ))}
        </div>
    );
};

export default VirtualTourList;
