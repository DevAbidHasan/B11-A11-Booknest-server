## 📚 Booknest Library Management System – Server Side

This is the backend API for the Booknest Library Management System, responsible for handling book data, user actions, and interactions with the database. The server is built with Node.js, Express.js, and MongoDB, and secured with environment variables.
#### Client Repository : https://github.com/DevAbidHasan/B11-A11-Booknest-client 
#### Live Link : https://book-nest-75887.web.app/
---
### 🛠 Tech Stack

- Node.js – Runtime environment

- Express.js – Backend framework

- MongoDB – Database

- dotenv – Environment variable management

- CORS – Cross-origin resource sharing
---

### 🚀 Getting Started

Follow these steps to run the server locally:

1️⃣ Clone the repository
```
git clone https://github.com/your-username/booknest-server.git
cd booknest-server
```
2️⃣ Install dependencies
```
npm install
```
3️⃣ Setup Environment Variables

Create a .env file in the root of your server project and add your configuration:
```
PORT = 3000
MONGO_URI = your_mongodb_connection_string

```
4️⃣ Run the development server
( I've used nodemon )
```
nodemon index.js
```


#### Your server should now be running on: 👉 http://localhost:3000
---
### 📌 API Overview

⚠️ Note: Replace http://localhost:3000 with your deployed server URL if hosted.

🔹 Get All Books
```
GET /books
```

Returns a list of all books in the library.

🔹 Get Single Book
```
GET /books/:id
```

Returns details of a single book.

🔹 Add a New Book
```
POST /books
```

Add a new book entry to the database.

🔹 Update a Book
```
PUT /books/:id
```

Update an existing book.

🔹 Delete a Book
```
DELETE /books/:id
```

Delete a book by ID.

🔹 Borrowed Books
```
GET /borrowed-books
POST /borrowed-books
DELETE /borrowed-books/:id
```

Endpoints for managing borrowed books.
---
### 🏗 Project Structure
```
booknest-server/
├── index.js          # Entry point 
├── .env              # Environment variables
└── package.json      # Dependencies and scripts
``` 
