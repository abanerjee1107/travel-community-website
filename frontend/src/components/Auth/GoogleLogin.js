import React from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

const GoogleLoginComponent = () => {
    const handleLoginSuccess = async (response) => {
        const { tokenId } = response;
        try {
            const res = await axios.post('http://localhost:3000/auth/google', { tokenId });
            localStorage.setItem('token', res.data.token);
            // Redirect to home or dashboard
        } catch (error) {
            console.error('Google login failed:', error);
        }
    };

    const handleLoginFailure = (response) => {
        console.error('Google login failed:', response);
    };

    return (
        <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID"
            buttonText="Login with Google"
            onSuccess={handleLoginSuccess}
            onFailure={handleLoginFailure}
        />
    );
};

export default GoogleLoginComponent;
