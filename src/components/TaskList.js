import React from 'react';
import { useTasks } from '../context/TaskContext';
import { TaskItem } from './TaskItem';

export const TaskList = () => {
  // Access global task array
  const { tasks } = useTasks();
  // Empty state fallback visual when list contains 0 tasks
  if (tasks.length === 0) {
    return <p className="empty-msg">No tasks remaining. Add one above!</p>;
  }

  return (
    //unordered list for added task list
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};