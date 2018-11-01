# Single Resource Mongo and Express API

## Overview
This application is a server with POST, GET, DELETE, and PUT functionality and utilizes MongoDB for storage

## Getting Started
- Clone this repository
- Ensure node.js is installed
    - If not, run the command `brew install node` in the terminal
- Ensure MongoDB is installed
    - If not, follow the instructions at [https://docs.mongodb.com/manual/installation/](https://docs.mongodb.com/manual/installation/)
- Navigate to the `/13-object-relational-mapping/lab` directory and run the command `npm i` to install dependencies
- Create a .env file
    - Set PORT to 8080
    - Set MONGODB_URI to mongodb://localhost:27017/candy
- Run the command `node index.js` to start the server

## Testing Instructions
- Open up Postman
    - Postman can be downloaded at [https://www.getpostman.com/](https://www.getpostman.com/)

- To make a POST request:
    - Click on the dropdown and change it to POST
    - Type `localhost:8080/api/candy` in the address bar
    - Click on the Body tab and set it to raw
    - In the body, type a note in JSON with name and chocolate content
        - { "name": "[name]", "chocolate": "[boolean]" }
    - Click Send

- To make a GET request:
    - Click on the dropdown and change it to GET
    - Type `localhost:8080/api/candy/:id` in the address bar
    - Click Send
    
- To make a DELETE request:
    - Click on the dropdown and change it to DELETE
    - Type `localhost:8080/api/candy/:id` in the address bar
    - Click Send

- To make a PUT request:
    - Click on the dropdown and change it to PUT
    - Type `localhost:8080/api/candy/:id` in the address bar
    - Click on the Body tab and set it to raw
    - In the body, type a note in JSON with name and/or chocolate content
        - { "name": "[name]", "chocolate": "[boolean]" }
    - Click Send