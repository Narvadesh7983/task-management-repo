import React, { useState } from "react";

function TaskForm({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskTitle.trim() === "") return;

    onAddTask(taskTitle.trim());
    setTaskTitle("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task..."
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />

      <button type="submit" className="add-btn">
        + Add Task
      </button>
    </form>
  );
}

export default TaskForm;