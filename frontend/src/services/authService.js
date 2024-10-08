import axios from 'axios';

const API_URL = 'http://localhost:5000/auth';

const signup = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, userData);
        return response.data;
    } catch (error) {
        console.error('Signup error:', error);
        return false;
    }
};

const login = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        localStorage.setItem('token', response.data.token);
        return true;
    } catch (error) {
        console.error('Login error:', error);
        return false;
    }
};

const getProfile = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        console.error('Get profile error:', error);
        return {};
    }
};

const updateProfile = async (profileData) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.put(`${API_URL}/profile`, profileData, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    } catch (error) {
        console.error('Update profile error:', error);
        return false;
    }
};

export default {
    signup,
    login,
    getProfile,
    updateProfile,
};
