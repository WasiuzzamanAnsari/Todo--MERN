# 📝 Todo List App

A simple full-stack Todo List application built with **React**, **Node.js**, **Express**, and **MySQL**. Users can create, view, and delete tasks. The app features a clean UI and persistent backend storage using a relational database.

---

## 📖 Description

This Todo app lets users manage their daily tasks efficiently. You can add new tasks, mark them as completed, and delete ones you no longer need. The backend API is built with Express.js and MySQL, while the frontend is built using React and Axios.

---

## 🚀 Features

- ✅ Add new tasks
- 📋 View all tasks
- 🗑️ Delete tasks
- 🔗 Connects to a MySQL database
- 🔐 REST API with clear routes

---

## 🛠 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/WasiuzzamanAnsari/Todo--MERN.git
cd todo-app

cd backend
npm install

Create a .env file inside backend
PORT=5000
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASS=
MYSQL_DB=todolist_db


node server.js


Setup the Frontend
cd ../frontend
npm install
npm run dev
