import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://ec2-54-91-3-52.compute-1.amazonaws.com:3000/reviews');
                setReviews(response.data);
            } catch (error) {
                console.error('Failed to fetch reviews:', error);
            }
        };
        fetchReviews();
    }, []);

    return (
        <div>
            <h1>Reviews</h1>
            {reviews.map(review => (
                <div key={review.id}>
                    <h2>{review.title}</h2>
                    <p>{review.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Reviews;
