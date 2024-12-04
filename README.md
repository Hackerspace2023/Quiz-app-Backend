
# Quiz-app-backend

Welcome to the **Quiz-app-backend** repository! This project serves as the backend for a quiz application. It handles user authentication, quiz management, and result processing using **Node.js**, **Express.js**, and **MongoDB**.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- User Authentication (Register/Login)
- Quiz CRUD Operations
- Question Management within Quizzes
- Quiz Submission and Result Generation
- Role-Based Access Control (Admin/User)
- RESTful APIs for seamless integration

---

## Technologies Used

- **Node.js**: Backend runtime
- **Express.js**: Web framework
- **MongoDB**: Database
- **Mongoose**: ODM for MongoDB
- **JWT**: For secure user authentication
- **bcrypt.js**: For password hashing
- **dotenv**: For environment variable management
- **Joi**: For input validation

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **MongoDB** (local or cloud-based)

### Installation

1. Fork and clone the repository:

   ```bash
   git clone https://github.com/bidisha-15/Quiz-app-backend.git
   cd Quiz-app-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your `.env` file (see [Environment Variables](#environment-variables)).

4. Start the development server:

   ```bash
   npm run dev
   ```

---

## Environment Variables

Create a `.env` file in the root directory and include the following:

```plaintext
PORT=5000
MONGO_URL=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
NODE_ENV=development
```

Replace `<your-mongodb-connection-string>` and `<your-secret-key>` with appropriate values.

---

## API Documentation

Refer to the [API Documentation](docs/API.md) (create this file for detailed endpoint descriptions).

### Example Endpoints:

#### **Authentication**
- **POST** `/api/auth/register` - Register a new user.
- **POST** `/api/auth/login` - Log in a user.

#### **Quizzes**
- **GET** `/api/quizzes` - Get all quizzes.
- **POST** `/api/quizzes` - Create a quiz (Admin only).

#### **Quiz Taking**
- **POST** `/api/quizzes/:id/submit` - Submit answers to a quiz.

_For detailed API information, check the documentation linked above._

---

## Contributing

We welcome contributions to improve this project! Here's how you can contribute:

### Steps to Contribute

1. Fork this repository.
2. Clone your forked repository:

   ```bash
   git clone https://github.com/your-username/Quiz-app-backend.git
   ```

3. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature-name
   ```

4. Make your changes and commit them:

   ```bash
   git add .
   git commit -m "Add your message here"
   ```

5. Push your changes to your forked repository:

   ```bash
   git push origin feature-name
   ```

6. Submit a pull request to the `main` branch of the original repository.

### Contribution Guidelines

- Follow [JavaScript Standard Style](https://standardjs.com/) for code formatting.
- Write clear and concise commit messages.
- Add comments to explain complex code logic.
- Ensure all tests pass before submitting a PR.
- Update documentation as necessary.

---

## Contributors

<a href="https://github.com/bidisha-15/Quiz-app-backend/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=bidisha-15/Quiz-app-backend" />
</a>

---
## Forkers

[![Forkers repo roster for @bidisha-15/Quiz-app-backend](https://reporoster.com/forks/bidisha-15/Quiz-app-backend)](https://github.com/bidisha-15/Quiz-app-backend/network/members)

---
## License

This project is licensed under the [MIT License](LICENSE).

---

### Need Help?

If you encounter any issues, feel free to open an issue in the [issues section](https://github.com/bidisha-15/Quiz-app-backend/issues).

---

Happy coding! 😊
