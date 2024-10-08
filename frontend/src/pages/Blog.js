import React, { useEffect, useState } from 'react';
import blogService from '../services/blogService';

function Blog() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const fetchedBlogs = await blogService.getBlogs();
            setBlogs(fetchedBlogs);
        };
        fetchBlogs();
    }, []);

    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Blog;
