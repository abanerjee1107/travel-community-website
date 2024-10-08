import axios from 'axios';

const API_URL = 'http://localhost:5000/members';

const getMembers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Get members error:', error);
        return [];
    }
};

export default {
    getMembers,
};
