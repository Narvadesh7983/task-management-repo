import React, { useState } from "react";

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  const handleEdit = () => {
    if (editTitle.trim() === "") return;

    onEdit(task.id, editTitle.trim());
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      {isEditing ? (
        <input
          className="edit-input"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleEdit();
          }}
        />
      ) : (
        <span className="task-title">{task.title}</span>
      )}

      <div className="task-actions">
        {isEditing ? (
          <button className="save-btn" onClick={handleEdit}>
            Save
          </button>
        ) : (
          <button
            className="edit-btn"
            onClick={() => {
              setEditTitle(task.title);
              setIsEditing(true);
            }}
          >
            Edit
          </button>
        )}

        <button
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;