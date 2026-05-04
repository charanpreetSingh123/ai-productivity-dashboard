# ⚡ AI Productivity Dashboard

A modern full-stack web application designed to manage daily tasks efficiently while providing intelligent productivity insights. This project demonstrates clean UI design, REST API integration, and a rule-based AI suggestion system.

---

## 🚀 Features

- 📝 Task Management (Add, Delete, Complete Tasks)  
- 📊 Real-Time Dashboard Statistics  
- ⚡ AI-Based Productivity Suggestions  
- 🔄 REST API Integration (JSON Server)  
- 🎨 Responsive UI with Smooth Animations  
- 🧩 Component-Based Architecture  

---

## 🧠 AI Suggestion System

Implements a rule-based system that analyzes task activity:

- Suggests prioritization when pending tasks are high  
- Encourages consistency when progress is balanced  
- Motivates users when all tasks are completed  

---

## 🏗️ Tech Stack

Frontend:  
- React.js  
- JavaScript (ES6+)  
- HTML5, CSS3  

Backend (Mock API):  
- JSON Server  

Tools:  
- Git, GitHub  
- VS Code  

---

## 📁 Project Structure

<pre>
ai-productivity-dashboard/
│
├── public/
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
</pre>

---

## ⚙️ Installation & Setup

### 1. Clone the repository
git clone https://github.com/charanpreetSingh123/ai-productivity-dashboard.git

### 2. Navigate to project
cd ai-productivity-dashboard

### 3. Install dependencies
npm install

### 4. Run backend (JSON Server)
json-server --watch db.json --port 5000

### 5. Run frontend
npm start

---

## 🌐 API Endpoints

- GET /tasks → Fetch all tasks  
- POST /tasks → Add new task  
- PUT /tasks/:id → Update task  
- DELETE /tasks/:id → Delete task  

---

## 🎯 Key Highlights

- Scalable component-based architecture  
- API integration with async handling  
- Clean UI/UX design principles  
- Real-world productivity dashboard simulation  

---

## 🚀 Future Improvements

- Real AI API integration (OpenAI / Gemini)  
- Authentication system  
- Database integration (MongoDB / PostgreSQL)  
- Drag-and-drop tasks  
- Dark mode  

---

## 👨‍💻 Author

Charanpreet Singh

---

## ⭐ Contributing

Contributions are welcome. Fork the repo and submit a pull request.
