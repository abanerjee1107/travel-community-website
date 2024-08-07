import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventDetail = ({ match }) => {
    const [event, setEvent] = useState({});

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`http://ec2-54-91-3-52.compute-1.amazonaws.com:3000/events/${match.params.id}`);
                setEvent(response.data);
            } catch (error) {
                console.error('Failed to fetch event:', error);
            }
        };
        fetchEvent();
    }, [match.params.id]);

    return (
        <div>
            <h1>{event.title}</h1>
            <p>{event.description}</p>
        </div>
    );
};

export default EventDetail;
