import axios from 'axios';

const API_URL = 'http://localhost:5000/blogs';

const getBlogs = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Get blogs error:', error);
        return [];
    }
};

export default {
    getBlogs,
};
