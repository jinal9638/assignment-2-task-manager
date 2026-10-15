import React, { createContext, useContext, useReducer } from 'react';
import { taskReducer, initialTaskState, ACTION_TYPES } from './taskReducer';

// Create React Context object for global broadcast
const TaskContext = createContext();

// Wraps application root and provides task state + action helpers to child components
export const TaskProvider = ({ children }) => {
  // Initialize reducer hook with external reducer function and initial state
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  // Helper function to dispatch ADD_TASK action
  const addTask = (text) => {
    dispatch({ type: ACTION_TYPES.ADD_TASK, payload: text });
  };

  // Helper function to dispatch TOGGLE_TASK action
  const toggleTask = (id) => {
    dispatch({ type: ACTION_TYPES.TOGGLE_TASK, payload: id });
  };

  // Helper function to dispatch EDIT_TASK action
  const editTask = (id, text) => {
    dispatch({ type: ACTION_TYPES.EDIT_TASK, payload: { id, text } });
  };

  // Helper function to dispatch DELETE_TASK action
  const deleteTask = (id) => {
    dispatch({ type: ACTION_TYPES.DELETE_TASK, payload: id });
  };

  // Helper function to dispatch CLEAR_ALL action
  const clearAllTasks = () => {
    dispatch({ type: ACTION_TYPES.CLEAR_ALL });
  };

  return (
    // Expose task data and dispatch helpers through Context Provider
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        toggleTask,
        editTask,
        deleteTask,
        clearAllTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  // Throw clear runtime error if hook is called outside <TaskProvider>
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};