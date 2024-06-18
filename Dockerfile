FROM node:latest

# Set the working directory in the container

WORKDIR /var/www/html/mesonmotesdetoledo_website

# Expose the port on which your React app will run (default is 3000)

EXPOSE 3000

# Start the React app

CMD [“npm”, “start”]

