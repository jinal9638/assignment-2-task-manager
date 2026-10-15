import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

export const TaskInput = () => {
  const [text, setText] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText('');//initially setting text empty
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