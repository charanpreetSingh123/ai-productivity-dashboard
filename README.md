# ⚡ AI Productivity Dashboard

A modern full-stack web application designed to manage daily tasks efficiently while providing intelligent productivity insights. This project combines clean UI design, REST API integration, and a rule-based AI suggestion system to simulate real-world product architecture.

---

## 🚀 Features

- 📝 Task Management (Add, Delete, Complete Tasks)
- 📊 Real-Time Dashboard Statistics (Total, Completed, Pending)
- ⚡ AI-Based Productivity Suggestions
- 🔄 REST API Integration (JSON Server)
- 🎨 Modern Responsive UI with Smooth Animations
- 🧩 Component-Based Architecture (React)

---

## 🧠 AI Suggestion System

Implements a rule-based intelligent system that analyzes task completion patterns and provides actionable insights:

- Suggests prioritization when pending tasks are high  
- Encourages consistency when progress is balanced  
- Motivates completion when all tasks are done  

---

## 🏗️ Tech Stack

Frontend:
- React.js
- JavaScript (ES6+)
- HTML5 & CSS3

Backend (Mock API):
- JSON Server

Tools:
- VS Code
- Git & GitHub

---

## 📁 Project Structure

ai-productivity-dashboard/ │ ├── public/ ├── src/ │   ├── components/ │   │   ├── Navbar.jsx │   │   ├── TaskInput.jsx │   │   ├── TaskList.jsx │   │   ├── DashboardStats.jsx │   │   ├── AISuggestions.jsx │   │   └── About.jsx │   │ │   ├── pages/ │   │   └── Home.jsx │   │ │   ├── services/ │   │   └── api.js │   │ │   ├── styles/ │   │   ├── main.css │   │   ├── dashboard.css │   │   └── theme.css │   │ │   ├── App.js │   └── index.js │ ├── db.json ├── package.json └── README.md

---

## ⚙️ Installation & Setup

### 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/ai-productivity-dashboard.git

### 2. Navigate to project
cd ai-productivity-dashboard

### 3. Install dependencies
npm install

### 4. Run backend (JSON Server)
json-server --watch db.json --port 5000

---

## 🌐 API Endpoints

| Method | Endpoint              | Description        |
|-------|----------------------|--------------------|
| GET   | /tasks               | Fetch all tasks    |
| POST  | /tasks               | Add new task       |
| PUT   | /tasks/:id           | Update task        |
| DELETE| /tasks/:id           | Delete task        |

---

## 🎯 Key Highlights

- Built with scalable component-based architecture
- Demonstrates API integration & asynchronous handling
- Includes data-driven UI rendering
- Focused on clean UI/UX design principles
- Simulates real-world productivity tools

---
## ⚙️ Available Scripts

- npm start → Run frontend  
- npm run build → Production build  

## 🚀 Future Improvements

- Integration with real AI APIs (OpenAI / Gemini)
- User authentication system
- Persistent storage with database (MongoDB / PostgreSQL)
- Drag-and-drop task management
- Dark mode support

---

## 👨‍💻 Author

Charanpreet Singh

- 💼 Engineering Student  
- 🚀 Passionate about Full Stack Development & AI Integration  

---

## ⭐ Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.
