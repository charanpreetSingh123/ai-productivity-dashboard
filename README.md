#⚡ AI Productivity Dashboard

A modern full-stack web application designed to help users manage daily tasks efficiently while providing intelligent productivity insights. The project combines task management, dashboard analytics, and a rule-based recommendation system to encourage better productivity habits. It demonstrates practical implementation of React components, REST API integration, state management, and responsive UI design.

---

##🚀 Features

* 📝 Task Management – Create, delete, and mark tasks as completed through an intuitive user interface.
* 📊 Real-Time Dashboard Statistics – Monitor total, completed, and pending tasks with automatically updated metrics.
* ⚡ AI-Based Productivity Suggestions – Receive dynamic recommendations based on current task completion status and productivity trends.
* 🔄 REST API Integration – Perform CRUD operations using a JSON Server backend to simulate real-world API interactions.
* 🎨 Responsive User Interface – Optimized for different screen sizes with smooth transitions and a clean design.
* 🧩 Component-Based Architecture – Built using reusable React components for maintainability and scalability.

---

##🧠 AI Suggestion System

The dashboard includes a rule-based productivity recommendation engine that analyzes task activity and generates contextual suggestions for the user.

Current Behaviors

* When the number of pending tasks becomes high, the system recommends prioritizing important tasks to improve productivity.
* When completed and pending tasks are balanced, the system encourages users to maintain their current progress and consistency.
* When all tasks have been completed, the system provides positive feedback and motivational messages.

This feature demonstrates how simple decision-making logic can be used to create an intelligent and interactive user experience.

---

##🏗️ Tech Stack

Frontend

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3

Backend (Mock API)

* JSON Server

Development Tools

* Git
* GitHub
* Visual Studio Code

---

##📁 Project Structure

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

##⚙️ Installation & Setup

1. Clone the Repository

git clone https://github.com/charanpreetSingh123/ai-productivity-dashboard.git

2. Navigate to the Project Directory

cd ai-productivity-dashboard

3. Install Dependencies

npm install

4. Start the Backend Server

json-server --watch db.json --port 5000

5. Start the Frontend Application

npm start

The application will be available locally in your browser after both the frontend and backend servers are running.

---

##🌐 API Endpoints

Method	Endpoint	Description
GET	/tasks	Retrieve all available tasks
POST	/tasks	Create a new task
PUT	/tasks/:id	Update an existing task
DELETE	/tasks/:id	Remove a task

---

##🎯 Key Highlights

* Developed using a scalable component-based React architecture.
* Implemented complete CRUD functionality through REST API integration.
* Designed a responsive and user-friendly dashboard interface.
* Built a rule-based recommendation system for productivity guidance.
* Demonstrates practical frontend-backend communication workflows.
* Follows modern web development practices and clean code principles.

---

##🚀 Future Improvements

* Integration with OpenAI or Gemini APIs for advanced AI-generated recommendations.
* User authentication and personalized task management.
* Migration from JSON Server to MongoDB or PostgreSQL for persistent data storage.
* Drag-and-drop functionality for task organization.
* Dark mode and customizable themes.
* Productivity tracking analytics with weekly and monthly reports.
* Notification and reminder system for pending tasks.

---

##👨‍💻 Author

###Charanpreet Singh

---

⭐ Contributing

Contributions, feature suggestions, and improvements are always welcome. Feel free to fork the repository, create a new branch, and submit a pull request.
