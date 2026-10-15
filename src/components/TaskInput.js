import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

export const TaskInput = () => {
  // Local state for controlling uncontrolled input text
  const [text, setText] = useState('');
  // Extract addTask helper function from custom context hook
  const { addTask } = useTasks();

  // Handle task submission event
  const handleSubmit = (e) => {
    e.preventDefault();// Prevent standard browser page refresh
    if (!text.trim()) return;// Validation check against empty inputs
    addTask(text);// Dispatch ADD_TASK via global context function
    setText('');//Reset local input field to empty string
  };

  return (
    <form className="task-input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Enter a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn btn-add">
        Add Task
      </button>
    </form>
  );
};