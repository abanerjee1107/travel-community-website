import React, { useEffect, useState } from 'react';
import memberService from '../services/memberService';

function FindMembers() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchMembers = async () => {
            const fetchedMembers = await memberService.getMembers();
            setMembers(fetchedMembers);
        };
        fetchMembers();
    }, []);

    return (
        <div>
            <h1>Find Members</h1>
            <ul>
                {members.map((member) => (
                    <li key={member.id}>
                        <h2>{member.destination}</h2>
                        <p>Budget: {member.budget}</p>
                        <p>Currency: {member.currency}</p>
                        <p>Language: {member.language}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FindMembers;
