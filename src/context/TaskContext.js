import React, { createContext, useContext, useReducer } from 'react';
import { taskReducer, initialTaskState, ACTION_TYPES } from './taskReducer';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const addTask = (text) => {
    dispatch({ type: ACTION_TYPES.ADD_TASK, payload: text });
  };

  const toggleTask = (id) => {
    dispatch({ type: ACTION_TYPES.TOGGLE_TASK, payload: id });
  };

  const editTask = (id, text) => {
    dispatch({ type: ACTION_TYPES.EDIT_TASK, payload: { id, text } });
  };

  const deleteTask = (id) => {
    dispatch({ type: ACTION_TYPES.DELETE_TASK, payload: id });
  };

  const clearAllTasks = () => {
    dispatch({ type: ACTION_TYPES.CLEAR_ALL });
  };

  return (
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
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};