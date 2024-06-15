# Polling-System-API

Polling System API is open to all app, to create questions for poll and voters can vote through it.
- The project is built using a tech stack consisting of Node.js for the server-side scripting.
- Express for handling HTTP requests and routing.
- MongoDB for storing and managing the data and project follows REST architectural design pattern.

## Prerequisite

- NodeJs installed on your device.
- A basic understanding of NodeJs, Express, and MongoDB.
- Knowledge of how to set up MongoDB and how to get your connection string.
- Postman installed.
- Knowledge of using the terminal.
- If you are running this project in the local environment then you need to add .env file in tne root directory with following environment variables
  ```
  BASE_URL=http://127.0.0.1:3000
  PORT=3000
  MONGO_URI=mongodb://127.0.0.1:27017/Polling-System

  ```

## Installation

To run this application on your local machine, please follow these steps:

Clone this repository using the following command:
```
$ git clone https://github.com/Vivid26/Polling-System-API.git
```
Install the required dependencies using the following command:
```
$ npm install 
```
Start the application using the following command:
```
$ npm start 
```
now you will see that server is running at http://127.0.0.1:3000


## Usage

Follow below journey to know insights of application.

- [ ] Create a question for a poll
- [ ] Create option for respective question. Add single option at a time.
- [ ] View question by its id parameter.
- [ ] View all questions in the databse.
- [ ] Edit/Delete the question.
- [ ] Give vote to poll questions by clicking respective options link.
- [ ] See total votes for particular option.
- [ ] Edit/Delete the option.


## Deployment

This project is deployed on Render app hosting service. 
Visit [Polling System]() to see live hosted app.
Visit [Swagger Polling System API Documentation]() to see documentation along with functionality.

## Testing
Visit [Polling System Postman Collection]() to test all API's locally.

# Technologies

<div align="center">

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![VSCode](https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)
![Swagger](https://img.shields.io/badge/swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=white)
![Postman](https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

</div>