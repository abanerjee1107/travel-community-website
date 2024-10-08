# Travel Community Website

This is a full-stack travel community website where like-minded travelers can connect and plan future trips.

## Features

- **Before Login**: Home, About Us, Contact Us, Signup/Login
- **After Login**: Home, About Us, Contact Us, Blog, Find Members
- **User Profiles**: Users can create and update profiles.
- **Blog**: Users can create and view blog posts.
- **Find Members**: Users can search for other members based on travel preferences.
- **Messaging**: Users can send and receive messages.
- **Trip Planning Tools**: Users can plan and organize trips.

## Setup and Installation

### Prerequisites

- Node.js
- MySQL
- Docker and Docker Compose
- Nginx
- Kubernetes (for deployment)

### Local Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-repo-url.git
    cd travel-community-website
    ```

2. **Setup MySQL Database**:
    ```bash
    mysql -u root -p
    source db/schema.sql
    ```

3. **Install dependencies and run the application**:
    ```bash
    npm install
    npm start
    ```

4. **Access the website**:
    Open your browser and go to `http://localhost:3000`.

### Deployment

#### AWS Deployment Instructions

1. **Setup server environment**:
    ```bash
    ./scripts/setup.sh
    ```

2. **Access the website**:
    Visit your server IP in the browser.

#### Kubernetes Deployment

1. **Build and push Docker images**:
    ```bash
    docker-compose build
    docker-compose push
    ```

2. **Deploy with Kubernetes**:
    ```bash
    kubectl apply -f config/kubernetes/deployment.yaml
    kubectl apply -f config/kubernetes/service.yaml
    ```

3. **Access the website**:
    Visit the IP address or DNS of your Kubernetes service.

### Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.

### License

This project is licensed under the MIT License.
