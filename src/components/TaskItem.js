import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

export const TaskItem = ({ task }) => {
  const { toggleTask, editTask, deleteTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    if (editText.trim()) {
      editTask(task.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') {
      setEditText(task.text);
      setIsEditing(false);
    }
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          className="task-checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        {isEditing ? (
          <input
            type="text"
            className="edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <span className="task-text">{task.text}</span>
        )}
      </div>

      <div className="button-group">
        {isEditing ? (
          <button className="btn btn-save" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button
            className="btn btn-edit"
            onClick={() => setIsEditing(true)}
            disabled={task.completed}
          >
            Edit
          </button>
        )}
        <button className="btn btn-delete" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};