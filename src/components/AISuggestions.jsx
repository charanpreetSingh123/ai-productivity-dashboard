import React, { useState } from "react";

function AISuggestions({ tasks }) {
  const [suggestion, setSuggestion] = useState("");

  const generateSuggestion = () => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const pending = total - completed;

    if (total === 0) {
      setSuggestion("Start by adding tasks to organize your day.");
    } else if (pending > completed) {
      setSuggestion("Focus on completing pending tasks first.");
    } else if (completed === total) {
      setSuggestion("Great job! All tasks are completed.");
    } else {
      setSuggestion("You are doing well. Keep progressing steadily.");
    }
  };

  return (
    <div className="ai-box">
      <button onClick={generateSuggestion}>
        ⚡ Get AI Suggestion
      </button>

      {suggestion && (
        <p className="ai-text">
          {suggestion}
        </p>
      )}
    </div>
  );
}

export default AISuggestions;