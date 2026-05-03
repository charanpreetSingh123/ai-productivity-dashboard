import React from "react";

function TaskList({ tasks, deleteTask, toggleComplete }) {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          
          <div className="task-left">
            <span
              className={`task-check ${task.completed ? "checked" : ""}`}
              onClick={() => toggleComplete(task)}
            >
              {task.completed ? "✔" : "○"}
            </span>

            <span
              className={`task-text ${task.completed ? "completed" : ""}`}
            >
              {task.text}
            </span>
          </div>

          <button
            className="delete-btn"
            onClick={() => deleteTask(task.id)}
          >
            🗑
          </button>

        </div>
      ))}
    </div>
  );
}

export default TaskList;