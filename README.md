# ⚡ AI Productivity Dashboard 


<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Backend-JSON%20Server-green?style=for-the-badge" alt="JSON Server">
  <img src="https://img.shields.io/badge/API-REST-orange?style=for-the-badge" alt="REST API">
  <img src="https://img.shields.io/badge/AI-Rule--Based%20Recommendations-purple?style=for-the-badge" alt="AI">
</p>

<p align="center">
  <b>A Modern Full-Stack Task Management Application with Intelligent Productivity Insights</b>
</p>

<p align="center">
  <a href="#-overview">Overview</a> •
  <a href="#-features">Features</a> •
  <a href="#-ai-suggestion-system">AI Suggestions</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-installation--setup">Installation</a> •
  <a href="#-future-improvements">Future Plans</a> •
  <a href="#-author">Author</a>
</p>

---

## 📌 Overview

AI Productivity Dashboard is a modern full-stack web application designed to help users efficiently manage daily tasks while providing intelligent productivity insights.

The project combines task management, dashboard analytics, and a rule-based recommendation system to encourage better productivity habits. It demonstrates practical implementation of React components, REST API integration, state management, and responsive UI design.

---

## ✨ Features

### 📝 Task Management

- Create new tasks
- Delete existing tasks
- Mark tasks as completed
- Intuitive and user-friendly interface

---

### 📊 Dashboard Analytics

- Total Tasks
- Completed Tasks
- Pending Tasks
- Real-time statistics
- Automatic dashboard updates

---

### 🤖 AI Productivity Suggestions

- Dynamic productivity recommendations
- Rule-based decision engine
- Personalized task guidance
- Motivation based on progress

---

### 🔄 REST API Integration

- Full CRUD operations
- JSON Server backend
- Simulated real-world API interactions
- Efficient frontend-backend communication

---

### 🎨 Responsive User Interface

- Responsive layout
- Clean and modern design
- Smooth transitions
- Mobile-friendly interface

---

### 🧩 Component-Based Architecture

- Reusable React components
- Scalable project structure
- Maintainable codebase
- Separation of concerns

---

## 🧠 AI Suggestion System

The dashboard includes a rule-based productivity recommendation engine that analyzes task completion patterns and provides contextual suggestions.

### Current Behaviors

- High number of pending tasks → Recommends prioritizing important work.
- Balanced completed and pending tasks → Encourages maintaining consistency.
- All tasks completed → Displays positive feedback and motivational messages.

This feature demonstrates how simple decision-making logic can be used to create an intelligent and interactive user experience.

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React.js |
| Language | JavaScript (ES6+) |
| Markup | HTML5 |
| Styling | CSS3 |
| Backend | JSON Server |
| API | REST API |
| Version Control | Git & GitHub |
| Development Environment | Visual Studio Code |

---

## 📂 Project Structure

```text
ai-productivity-dashboard/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── TaskInput.jsx
│   │   ├── TaskList.jsx
│   │   ├── DashboardStats.jsx
│   │   ├── AISuggestions.jsx
│   │   └── About.jsx
│   │
│   ├── pages/
│   │   └── Home.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── styles/
│   │   ├── main.css
│   │   ├── dashboard.css
│   │   └── theme.css
│   │
│   ├── App.js
│   └── index.js
│
├── db.json
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/charanpreetSingh123/ai-productivity-dashboard.git
```

### 2️⃣ Navigate to the Project Directory

```bash
cd ai-productivity-dashboard
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Start the Backend Server

```bash
json-server --watch db.json --port 5000
```

### 5️⃣ Start the React Application

```bash
npm start
```

The application will be available locally after both the frontend and backend servers are running.

---

## 🌐 REST API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Retrieve all tasks |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update an existing task |
| DELETE | `/tasks/:id` | Delete a task |

---

## 🔄 Application Workflow

```text
User Opens Dashboard
          │
          ▼
Create / Update Tasks
          │
          ▼
REST API (JSON Server)
          │
          ▼
Dashboard Statistics Update
          │
          ▼
AI Suggestion Engine
          │
          ▼
Personalized Productivity Recommendations
```

---

## 🎯 Key Highlights

- Modern React-based architecture
- Complete CRUD functionality
- REST API integration
- Rule-based AI recommendation engine
- Responsive dashboard interface
- Component-driven development
- Clean and maintainable codebase
- Practical frontend-backend communication

---

## 📚 Learning Outcomes

This project demonstrates:

- React.js Development
- Component-Based Architecture
- REST API Integration
- State Management
- CRUD Operations
- Responsive Web Design
- Rule-Based AI Logic
- Modern JavaScript (ES6+)

---

## 🚀 Future Improvements

### 🤖 AI Features

- OpenAI API Integration
- Google Gemini Integration
- Personalized AI recommendations
- Natural language task creation

### 👤 User Management

- User Authentication
- Secure Login & Registration
- Personalized dashboards
- Cloud synchronization

### 🗄 Database

- MongoDB Integration
- PostgreSQL Support
- Persistent cloud storage
- Backend migration

### 📈 Productivity

- Weekly productivity reports
- Monthly analytics
- Performance tracking
- Smart reminders

### 🎨 User Experience

- Drag-and-drop task organization
- Dark Mode
- Custom themes
- Push notifications

---

## 🌟 Project Vision

The long-term vision of this project is to evolve into a fully AI-powered productivity platform capable of intelligently managing tasks, analyzing work patterns, and providing personalized recommendations to improve efficiency and productivity.

Future versions will leverage Large Language Models (LLMs) and advanced analytics to deliver a smarter and more adaptive user experience.

---

## 👨‍💻 Author

### Charanpreet Singh

Developed as a full-stack React application demonstrating REST API integration, component-based architecture, responsive UI development, and intelligent productivity recommendations.

---

<p align="center">
  ⭐ If you found this project useful, consider giving it a star
</p>
