# 🚀 Team Task Manager (Backend)

A full-stack ready backend application for managing teams, projects, and tasks with role-based access control.

---

## 🌐 Live API

👉 https://task-manager-backend-0wy9.onrender.com

---

## 📌 Features

* 🔐 **Authentication**

  * User Signup & Login
  * JWT-based authentication

* 👥 **Role-Based Access**

  * Admin & Member roles
  * Protected routes

* 📁 **Project Management**

  * Create projects (Admin only)
  * View all projects

* ✅ **Task Management**

  * Create tasks
  * Assign tasks to users
  * Track status (Todo / In Progress / Done)

* 📊 **Dashboard**

  * Total projects
  * Total tasks
  * Completed tasks
  * Pending tasks

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas
* **Authentication:** JWT
* **Hosting:** Render

---

## 📂 Project Structure

Server/
│
├── middleware/
│   ├── auth.js
│   └── role.js
│
├── models/
│   ├── User.js
│   ├── Project.js
│   └── Task.js
│
├── routes/
│   ├── auth.js
│   ├── projects.js
│   ├── task.js
│   └── dashboard.js
│
├── server.js
├── package.json
└── .env

---

## ⚙️ Environment Variables

Create a `.env` file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

---

## 🚀 Installation & Run

git clone https://github.com/vishnuvardhanreddytavutu/Task-manager-backend
cd Task-manager-backend
npm install
npm start

---

## 📬 API Endpoints

### 🔐 Auth

POST /api/auth/signup
POST /api/auth/login

---

### 📁 Projects

POST /api/projects (Admin only)
GET /api/projects

---

### ✅ Tasks

POST /api/tasks
GET /api/tasks

---

### 📊 Dashboard

GET /api/dashboard

---

## 🔑 Authorization

Add token in headers:

Authorization: Bearer <your_token>

---

## 🧪 Sample Request (Signup)

{
"name": "test",
"email": "[test@gmail.com](mailto:test@gmail.com)",
"password": "123456"
}

---

## 🏆 Project Highlights

* RESTful API design
* Secure authentication using JWT
* Role-based authorization
* Scalable MongoDB schema design
* Cloud deployment using Render

---

## 🚀 Future Improvements

* Task deadlines & overdue alerts
* Team collaboration features
* Notifications system
* Frontend integration (React)

---

## 👨‍💻 Author

Vishnuvardhan Reddy
GitHub: https://github.com/vishnuvardhanreddytavutu
LinkedIn: https://linkedin.com/in/vishnuvardhanreddytavutu

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
