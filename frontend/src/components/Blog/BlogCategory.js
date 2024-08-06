import React, { useState } from 'react';
import axios from 'axios';

const BlogCategory = () => {
    const [category, setCategory] = useState('');
    const [blogs, setBlogs] = useState([]);

    const handleCategoryChange = async (e) => {
        setCategory(e.target.value);
        try {
            const response = await axios.get(`http://localhost:3000/blogs/category/${e.target.value}`);
            setBlogs(response.data);
        } catch (error) {
            console.error('Failed to fetch blogs by category:', error);
        }
    };

    return (
        <div>
            <select onChange={handleCategoryChange}>
                <option value="">Select Category</option>
                <option value="Travel">Travel</option>
                <option value="Food">Food</option>
                <option value="Adventure">Adventure</option>
            </select>
            {blogs.map(blog => (
                <div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogCategory;
