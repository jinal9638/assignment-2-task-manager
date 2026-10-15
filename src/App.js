import React from 'react';
import { TaskProvider } from './context/TaskContext';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import { TaskSummary } from './components/TaskSummary';
import './App.css';

export default function App() {
  return (
    <TaskProvider>
      <div className="app-container">
        <header className="app-header">
          <h1>Task Manager</h1>
          <p>Context API & useReducer State Management</p>
        </header>
        <main className="app-body">
          <TaskInput />
          <TaskSummary />
          <TaskList />
        </main>
      </div>
    </TaskProvider>
  );
}