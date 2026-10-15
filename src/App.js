import React from 'react';
import { TaskProvider } from './context/TaskContext';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import { TaskSummary } from './components/TaskSummary';
import './App.css';

export default function App() {
  return (
    // Wrap entire app tree inside TaskProvider to grant child components access to global context
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