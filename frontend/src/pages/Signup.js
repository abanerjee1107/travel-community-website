import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import authService from '../services/authService';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await authService.signup({ email, password });
        if (success) {
            history.push('/login');
        } else {
            alert('Signup failed. Please try again.');
        }
    };

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;
