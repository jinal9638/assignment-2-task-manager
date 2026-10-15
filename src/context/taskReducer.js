// Constant string definitions to prevent typos across action dispatches
export const ACTION_TYPES = {
  ADD_TASK: 'ADD_TASK',
  TOGGLE_TASK: 'TOGGLE_TASK',
  EDIT_TASK: 'EDIT_TASK',
  DELETE_TASK: 'DELETE_TASK',
  CLEAR_ALL: 'CLEAR_ALL',
};

// Default initial tasks array provided on first app load
export const initialTaskState = {
  tasks: [
    { id: '1', text: 'Complete React Advanced State Assignment', completed: false },
    { id: '2', text: 'Review Context API & useReducer concepts', completed: true },
  ],
};

// Pure function determining state transitions based on action.type
export function taskReducer(state, action) {
  switch (action.type) {
    // Action 1: Add new task to global state array
    case ACTION_TYPES.ADD_TASK:
    // Prevent adding empty or whitespace-only tasks
      if (!action.payload.trim()) return state;
      return {
        ...state,// Spread current state to preserve other state properties if added later
        tasks: [
          ...state.tasks,
          {
            id: Date.now().toString(),// Generate unique ID using current timestamp
            text: action.payload.trim(),
            completed: false,// New tasks start as incomplete by default
          },
        ],
      };

    // Action 2: Toggle completed boolean for a specific task ID
    case ACTION_TYPES.TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
         task.id === action.payload ? 
        { ...task, completed: !task.completed }// Flip completed boolean
        : task // Keep unmodified task as-is
        ),
      };

    // Action 3: Edit text content for a specific task ID
    case ACTION_TYPES.EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ?
         { ...task, text: action.payload.text } // Update text field
         : task
        ),
      };
    
    // Action 4: Remove a task from array by filtering out matching ID
    case ACTION_TYPES.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    // Action 5: Delete all tasks from state array
    case ACTION_TYPES.CLEAR_ALL:
      return {
        ...state,
        tasks: [],// Reset to empty array
      };

    // Fallback: Return unchanged state for unhandled action types
    default:
      return state;
  }
}