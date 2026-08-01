# Node.js Authentication API

A production-style authentication API built with Node.js and Express while learning backend development principles. This project demonstrates secure user authentication, JWT-based authorization, middleware usage, MongoDB integration, and a structured backend architecture.

## Features

- User registration
- Secure password hashing using bcrypt
- User login authentication
- JWT token generation
- Protected routes using authentication middleware
- Role-based authorization
- MongoDB database integration with Mongoose
- Input validation
- Centralized error handling
- MVC-style project structure
- Service layer architecture

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt
- Postman

## Project Structure

```text
src
├── controllers
│   └── authController.js
├── middleware
│   ├── authMiddleware.js
│   ├── roleMiddleware.js
│   └── errorMiddleware.js
├── models
│   └── userModel.js
├── routes
│   └── authRoutes.js
├── services
│   └── authService.js
└── app.js
```

## API Endpoints

## Register User

### Request

```http
POST /auth/register
```

Example request body:

```json
{
  "username": "example",
  "password": "password123"
}
```

Example response:

```json
{
  "message": "User registered Successfully"
}
```

---

## Login User

### Request

```http
POST /auth/login
```

Example request body:

```json
{
  "username": "example",
  "password": "password123"
}
```

Example response:

```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```

---

## Protected Routes

Protected routes require a JWT token in the request headers.

Example:

```http
Authorization: Bearer TOKEN
```

The authentication middleware verifies the token and attaches the authenticated user's information to the request.

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Rushil-Y/node-auth-api.git
```

Navigate into the project:

```bash
cd node-auth-api
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

The API will run on:

```text
http://localhost:5000
```

## Error Handling

The application uses centralized error handling middleware to provide consistent error responses across the API.

Handled errors include:

- Missing required fields
- Invalid credentials
- Duplicate usernames
- Authentication failures
- Authorization failures

## Learning Goals

This project was built to understand:

- REST API development
- Backend architecture patterns
- Authentication vs authorization
- Secure password storage
- JWT authentication flows
- Middleware design
- Database integration
- MVC architecture
- Service layer patterns
- Error handling strategies

## Future Improvements

- Add automated testing using Jest and Supertest
- Implement refresh token authentication
- Add user profile management
- Deploy the API to the cloud

## Repository

GitHub:

https://github.com/Rushil-Y/node-auth-api

```

```
