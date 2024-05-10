# Use a lightweight web server image , alpine - smallest in size and performance oriented
FROM node:alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the HTML, CSS, and JavaScript files into the container
COPY . /usr/src/app

# install dependencies inside the container
RUN npm install 

# Expose port 4200 to the outside world
EXPOSE 8080

# Command to start the nginx server
CMD ["node", "src/server.js"] 
