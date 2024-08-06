# Travel Community Website

## Overview
This project is a travel community website with features including user authentication, trip planning, blog posts, notifications, and messaging.

## Project Structure

- **backend/**: Contains the backend server with routes, controllers, models, and services.
- **frontend/**: Contains the frontend application with components, pages, and assets.
- **database/**: Contains the SQL schema for the database.
- **kubernetes/**: Contains Kubernetes deployment and service configuration.
- **nginx/**: Contains Nginx configuration for proxying requests.

## Setup

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`.
3. Start the server: `npm start`.

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`.
3. Start the development server: `npm start`.

### Database

1. Run the `schema.sql` script in your MySQL database to create the required tables.

### Kubernetes

1. Apply the deployment and service configuration: `kubectl apply -f kubernetes/`.

### Nginx

1. Configure Nginx to proxy requests to the frontend and backend services.
