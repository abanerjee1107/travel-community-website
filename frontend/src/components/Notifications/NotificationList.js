import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NotificationList = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await axios.get('http://localhost:3000/notifications');
                setNotifications(response.data);
            } catch (error) {
                console.error('Failed to fetch notifications:', error);
            }
        };
        fetchNotifications();
    }, []);

    return (
        <div>
            <h1>Notifications</h1>
            {notifications.map(notification => (
                <div key={notification.id}>
                    <p>{notification.message}</p>
                </div>
            ))}
        </div>
    );
};

export default NotificationList;
