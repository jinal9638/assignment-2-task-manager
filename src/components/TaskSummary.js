import React from 'react';
import { useTasks } from '../context/TaskContext';

export const TaskSummary = () => {
  const { tasks, clearAllTasks } = useTasks();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="task-summary">
      <div className="stats">
        <span>Total: <strong>{totalTasks}</strong></span>
        <span>Completed: <strong>{completedTasks}</strong></span>
        <span>Pending: <strong>{pendingTasks}</strong></span>
      </div>
      {totalTasks > 0 && (
        <button className="btn btn-clear" onClick={clearAllTasks}>
          Clear All
        </button>
      )}
    </div>
  );
};