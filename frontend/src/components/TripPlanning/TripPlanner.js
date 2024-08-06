import React, { useState } from 'react';

const TripPlanner = () => {
    const [trip, setTrip] = useState({ destination: '', startDate: '', endDate: '' });

    const handleChange = (e) => {
        setTrip({ ...trip, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle trip planning logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="destination" value={trip.destination} onChange={handleChange} placeholder="Destination" />
            <input name="startDate" type="date" value={trip.startDate} onChange={handleChange} />
            <input name="endDate" type="date" value={trip.endDate} onChange={handleChange} />
            <button type="submit">Plan Trip</button>
        </form>
    );
};

export default TripPlanner;
