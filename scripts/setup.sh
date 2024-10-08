#!/bin/bash

# Update and install necessary packages
sudo apt-get update
sudo apt-get install -y nginx mysql-server docker.io docker-compose

# Configure MySQL
sudo mysql -e "CREATE DATABASE travel_community;"
sudo mysql -e "CREATE USER 'root'@'localhost' IDENTIFIED BY 'password';"
sudo mysql -e "GRANT ALL PRIVILEGES ON travel_community.* TO 'root'@'localhost';"
sudo mysql -e "FLUSH PRIVILEGES;"

# Clone the repository and set up the project
git clone https://github.com/your-repo-url.git /var/www/travel-community
cd /var/www/travel-community

# Build and start Docker containers
docker-compose up -d

# Configure Nginx
sudo cp config/nginx.conf /etc/nginx/nginx.conf
sudo service nginx restart

echo "Setup complete. Visit your server IP to access the website."
