# HNG12 Stage 0 Backend Task

## Task Overview

A simple public API that returns the basic information below:

1. Registered email address (used to register on the HNG12 Slack workspace)

2. The current datetime as an ISO 8601 formatted timestamp.

3. The GitHub URL of the project's codebase.

## Set up Instructions

1. Clone the repository:

git clone https://github.com/HilaryOkonkwo/HNG12-Backend-Stage0Task

2. Install dependencies:

npm install express cors

3. Run the server:

npm run dev

4. Access the API at:

http://localhost:3000/

## Deployment:

The project is deployed on Vercel, a platform known for its fast and easy deployment of web applications.

Live URL: https://hng-12-backend-stage0-task.vercel.app/

## API Documentation

### Base URL: 

https://your-vercel-deployment-url.com

### End Point: 

Get '/'

### Response Format:

The API will return a JSON Object with the following fields:

{
 
  "email": "somtoochukwuhilary@gmail.com",

  "current_datetime": "2025-01-30T09:30:00Z",

  "github_url": "https://github.com/HilaryOkonkwo/HNG12-Backend-Stage0Task"
  
}


## Useful Links
[Hire Nodejs Developer](https://hng.tech/hire/nodejs-developers)
