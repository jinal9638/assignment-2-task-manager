import React from 'react';
import { useTasks } from '../context/TaskContext';
import { TaskItem } from './TaskItem';

export const TaskList = () => {
  const { tasks } = useTasks();

  if (tasks.length === 0) {
    return <p className="empty-msg">No tasks remaining. Add one above!</p>;
  }//if task length zero showing a paragrapgh

  return (
    //unordered list for added task list
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};