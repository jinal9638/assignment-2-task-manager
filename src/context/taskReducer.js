export const ACTION_TYPES = {
  ADD_TASK: 'ADD_TASK',
  TOGGLE_TASK: 'TOGGLE_TASK',
  EDIT_TASK: 'EDIT_TASK',
  DELETE_TASK: 'DELETE_TASK',
  CLEAR_ALL: 'CLEAR_ALL',
};

export const initialTaskState = {
  tasks: [
    { id: '1', text: 'Complete React Advanced State Assignment', completed: false },
    { id: '2', text: 'Review Context API & useReducer concepts', completed: true },
  ],
};

export function taskReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_TASK:
      if (!action.payload.trim()) return state;
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now().toString(),
            text: action.payload.trim(),
            completed: false,
          },
        ],
      };

    case ACTION_TYPES.TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };

    case ACTION_TYPES.EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, text: action.payload.text } : task
        ),
      };

    case ACTION_TYPES.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case ACTION_TYPES.CLEAR_ALL:
      return {
        ...state,
        tasks: [],
      };

    default:
      return state;
  }
}