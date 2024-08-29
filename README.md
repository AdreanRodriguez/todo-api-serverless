# TODO API Project
### This project provides a serverless TODO API, designed to handle basic CRUD (Create, Read, Update, Delete) operations for managing TODO items. 
### Built using AWS Lambda functions and the Serverless Framework, it offers a scalable and efficient solution for task management.

## Features
* Get Todos: Retrieve a list of all TODO items.
* Get Todo By ID: Fetch a specific TODO item by its unique identifier.
* Post Todo: Create a new TODO item.
* Update Todo: Modify an existing TODO item by its ID.
* Delete Todo: Remove a TODO item by its ID.
##Architecture
* Provider: AWS
* Runtime: Node.js 20.x
* Region: eu-north-1 (Stockholm)
* Deployment Method: Direct deployment with the Serverless Framework
## Dependencies
* Serverless Framework for deployment
* Node.js for backend logic
## Setup
* Install Dependencies: Run npm install to install the required packages.
* Deploy: Use serverless deploy to deploy the functions to AWS Lambda.
* Test: Use serverless offline to test the API locally.
