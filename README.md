# BlogApp 📝

BlogApp is a dynamic and responsive web application for creating, managing, and viewing blogs. Built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), BlogApp offers seamless user interaction, robust CRUD functionality, and an intuitive user interface.

---

## Features ✨

- **Dynamic Blog Management**: Create, update, delete, and view blogs in real time.
- **Responsive UI**: Designed using React.js to deliver an engaging and user-friendly interface.
- **RESTful APIs**: Supports efficient data operations and scalability.
- **Search and Pagination**: Easily navigate through large datasets with advanced filtering options.
- **Authentication**: Secure login and user authentication using JWT (JSON Web Tokens).

---

## Technologies Used 🛠️

### Frontend:
- **React.js**: For building the user interface.
- **HTML5/CSS3**: To ensure a responsive and visually appealing design.

### Backend:
- **Node.js**: For the server-side application.
- **Express.js**: To manage API routes and server functionality.

### Database:
- **MongoDB**: A NoSQL database for efficient data storage and retrieval.

### Tools:
- **VS Code**: As the development environment.
- **Postman**: For testing and debugging APIs.
- **Git/GitHub**: Version control and project collaboration.

---

## Installation 🚀

Follow these steps to set up and run BlogApp locally:

### Prerequisites:
1. Install [Node.js](https://nodejs.org/)
2. Install [MongoDB](https://www.mongodb.com/)
3. Install [Git](https://git-scm.com/)

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/sivasaidwarapureddy/blogapp.git
2. Navigate to the project directory: cd blogapp

3. Install dependencies for the backend: cd server npm install
4. Install dependencies for the frontend: cd ../client npm install
5. Start the backend server: cd ../server npm start
6. Start the frontend development server: cd ../client npm startAPI Endpoints 🛣️

Blog Routes:
    # Blog API Endpoints

This section describes the available endpoints for the Blog API.

| Method | Endpoint            | Description                      |
|--------|---------------------|----------------------------------|
| GET    | `/api/blogs`         | Fetch all blogs                  |
| GET    | `/api/blogs/:id`     | Fetch a single blog by ID        |
| POST   | `/api/blogs`         | Create a new blog                |
| PUT    | `/api/blogs/:id`     | Update a blog by ID              |
| DELETE | `/api/blogs/:id`     | Delete a blog by ID              |



