import React, { useState, useEffect } from "react";
import AISuggestions from "../components/AISuggestions";
import About from "../components/About";
import TaskInput from "../components/TaskInput";
import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";
import DashboardStats from "../components/DashboardStats";
import {
  getTasks,
  addTaskAPI,
  deleteTaskAPI,
  updateTaskAPI,
} from "../services/api";

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const addTask = async (taskText) => {
    const newTask = {
      text: taskText,
      completed: false,
    };
    await addTaskAPI(newTask);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await deleteTaskAPI(id);
    fetchTasks();
  };

  const toggleComplete = async (task) => {
    const updatedTask = {
      ...task,
      completed: !task.completed,
    };
    await updateTaskAPI(task.id, updatedTask);
    fetchTasks();
  };

  return (
    <div className="container">
      <Navbar />

      <h1>AI Productivity Dashboard</h1>

      <DashboardStats tasks={tasks} />

      <TaskInput addTask={addTask} />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />

      <AISuggestions tasks={tasks} />

      <About />
    </div>
  );
}

export default Home;