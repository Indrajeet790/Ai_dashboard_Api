# Ai_dashboard_Api# BookStore-assignment

Published postman documentation of BookStore Api:https://documenter.getpostman.com/view/25896599/2s93z3eQqD

## Description

-This repository contains the backend code for the AI product's dashboard. It's built using Node.js and Express to provide API endpoints for retrieving AI model metrics and prediction data. Data is stored in JSON files, and the server ensures proper error handling and validation for API requests.

## Requirements

- Node.js (version X.X.X)
- express (version X.X.X)
## Setup

1. Make sure you have Node.js, Express,on your system.
2. Clone the repository: `git clone https://github.com/Indrajeet790/BokkStore-assignment
3. Install the dependencies: `npm install`
4. Start the server: `node index.js`
5. The API will be available at `http://localhost:8000`.

## Endpoints

- POST `/api/items/create` - Create a new item in the database.
- GET `/api/items/listAll?page=1&limit=3` - Retrieve all items from the database.
- GET `/api/items/:id` - Retrieve a specific item by its ID.
- PUT `/api/items/update/:id` - Update an existing item by its ID.
- DELETE `/api/items/delete/:id` - Delete an item by its ID.

## Logging

The project uses the Winston logging library for basic error logging. The logs are printed to the console.
