# 🚀 Team Task Manager Backend

A Node.js + Express + MongoDB backend application for managing projects and tasks with authentication and role-based access.

---

## 📌 Features

- User Authentication (JWT)
- Role-based Access (Admin / User)
- Project Management
- Task Management
- Dashboard (project & task stats)
- REST API

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Render (Deployment)

---

## 📂 Folder Structure

Server/
│── middleware/
│   ├── auth.js
│   ├── role.js
│
│── models/
│   ├── User.js
│   ├── Project.js
│   ├── Task.js
│
│── routes/
│   ├── auth.js
│   ├── project.js
│   ├── task.js
│   ├── dashboard.js
│
│── .env
│── server.js
│── package.json

---

## ⚙️ Installation

git clone https://github.com/vishnuvardhanreddytavutu/Task-manager-backend.git  
cd Task-manager-backend  
npm install  

---

## 🔑 Environment Variables

Create a `.env` file and add:

mongodb+srv://vishnu:Vishnu%401234@cluster0.tufwq5a.mongodb.net/taskmanager  
JWT_SECRET=your_secret_key  
PORT=5000 

---

## ▶️ Run Project

npm run dev  

Server runs at:  
http://localhost:5000  

---

## 📡 API Endpoints

### 🔐 Auth

POST /api/auth/register → Register user  
POST /api/auth/login → Login user  

---

### 📁 Projects

POST /api/projects → Create project (Admin only)  
GET /api/projects → Get all projects  

---

### ✅ Tasks

POST /api/tasks → Create task  
GET /api/tasks → Get all tasks  
PUT /api/tasks/:id → Update task  

---

### 📊 Dashboard

GET /api/dashboard → Get project & task stats  

---

## 🔐 Authorization

Use JWT token in headers:

Authorization: Bearer <your_token>

---

## 🌍 Live URL

https://your-app-name.onrender.com  

---

## 👨‍💻 Author

Vishnu Vardhan Reddy  

GitHub: https://github.com/vishnuvardhanreddytavutu  

---

## ⭐ Notes

- .env and node_modules are ignored using .gitignore  
- Use Postman to test APIs  
- Admin role required for creating projects  

---

## 🎯 Future Improvements

- Task assignment to users  
- Notifications  
- Frontend integration (React)  

---
