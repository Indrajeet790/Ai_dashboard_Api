# AI_DASHBORAD_API
## Description

-This repository contains the backend code for the AI product's dashboard. It's built using Node.js and Express to provide API endpoints for retrieving AI model metrics and prediction data. Data is stored in JSON files, and the server ensures proper error handling and validation for API requests.

## Requirements

- Node.js (version X.X.X)
- express (version X.X.X)
## Setup

1. Make sure you have Node.js, Express, on your system.
2. Clone the repository: `https://github.com/Indrajeet790/Ai_dashboard_Api`
3. Install the dependencies: `npm install`
4. Start the server: `node index.js`
5. The API will be available at `http://localhost:8000`.

## Endpoints

- POST `/api/items/create` - Create a new item in the database.
- GET `/api/metrics` - This endpoint responds with mock AI model metrics data in JSON format, including accuracy, precision, and recall.
- GET `/api/predictions`- This endpoint responds with simulated AI predictions and actual results for data visualization.


## Data Storage
The server uses JSON files to store and retrieve AI metrics and prediction data.
## Error Handling and Validation
The server implements proper error handling and validation for API requests. It returns appropriate HTTP status codes and error messages for invalid requests.
