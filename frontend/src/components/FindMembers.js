import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FindMembers = () => {
    const [members, setMembers] = useState([]);
    const [filters, setFilters] = useState({ destination: '', budget: '', currency: '', language: '' });

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await axios.get('http://ec2-54-91-3-52.compute-1.amazonaws.com:3000/users/members', { params: filters });
                setMembers(response.data);
            } catch (error) {
                console.error('Failed to fetch members:', error);
            }
        };
        fetchMembers();
    }, [filters]);

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h1>Find Members</h1>
            <input name="destination" placeholder="Destination" onChange={handleFilterChange} />
            <input name="budget" placeholder="Budget" onChange={handleFilterChange} />
            <input name="currency" placeholder="Currency" onChange={handleFilterChange} />
            <input name="language" placeholder="Language" onChange={handleFilterChange} />
            {members.map(member => (
                <div key={member.id}>
                    <h2>{member.name}</h2>
                    <p>{member.destination}</p>
                </div>
            ))}
        </div>
    );
};

export default FindMembers;
