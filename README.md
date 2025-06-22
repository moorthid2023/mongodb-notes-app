[LinkedIn](https://www.linkedin.com/in/moorthi-d-0b5139119/) or [YouTube](https://www.youtube.com/@MoorthiDev)


# 📝 MongoDB Notes App (Without Mongoose)

A simple backend API for creating and fetching notes using **Node.js**, **Express**, and **MongoDB (native driver)**.  
This project follows a clean architecture with proper separation of concerns:

- **Controller** – Handles request & response logic  
- **Service** – Contains business rules and validations  
- **Repository** – Interacts with MongoDB  
- **Utils** – Provides shared utilities like DB connection

---

## 🚀 Features

- REST API to create and fetch notes
- Clean and scalable folder structure
- Native MongoDB driver (no Mongoose)
- Easy to switch to other databases (e.g., MySQL)
- Environment-based config with `.env` file

---

## 📁 Folder Structure

.
├── controllers/ # Handles req/res
│ └── noteController.js
├── services/ # Business logic (validation, coordination)
│ └── noteService.js
├── repositories/ # Data access layer (MongoDB queries)
│ └── noteRepository.js
├── routes/ # Express route definitions
│ └── noteRoutes.js
├── utils/ # DB connection logic
│ └── mongoClient.js
├── server.js # Entry point of the app
├── .env # Environment variables
└── README.md # Project documentation

yaml
Copy
Edit

---

## 🔧 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/mongodb-notes-app.git
   cd mongodb-notes-app
   
Install dependencies

bash
Copy
Edit
npm install
Set up .env file
Create a .env file in the root directory and add:

env
Copy
Edit
MONGO_URI=mongodb://localhost:27017
DB_NAME=notesdb
PORT=3000
Run the server

bash
Copy
Edit
node server.js
📬 API Endpoints
Method	Route	Description
GET	/api/notes	Fetch all notes
POST	/api/notes	Create a new note

✅ POST Request Body
json
Copy
Edit
{
  "title": "Meeting Notes",
  "content": "Discuss project roadmap"
}
✅ Built With
Node.js

Express.js

MongoDB (native driver)

Dotenv

✨ Future Improvements
Add JWT-based user authentication

Add update & delete functionality

Add schema validation (e.g., using Joi or Zod)

Convert to TypeScript

🧠 Author
Made with ❤️ by Moorthi
Self-taught developer on a fullstack journey 🚀