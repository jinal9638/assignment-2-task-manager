import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

export const TaskItem = ({ task }) => {
  // Extract state actions from custom context hook
  const { toggleTask, editTask, deleteTask } = useTasks();
  // Local state to manage component display mode (read-only vs inline editing)
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  // Commit edited text changes back to global state
  const handleSave = () => {
    if (editText.trim()) {
      editTask(task.id, editText.trim());// Dispatch update action
      setIsEditing(false);// Exit inline edit mode
    }
  };

  // Keyboard shortcut handlers (Enter to save, Escape to cancel)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') {
      setEditText(task.text);// Revert back to original task text
      setIsEditing(false);// Exit inline edit mode
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