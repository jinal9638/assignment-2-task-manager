# Task Manager Application (Context API & useReducer)

A fully responsive Task Manager web application built with **React**, demonstrating advanced state management using **Context API** and the **`useReducer`** hook. This project isolates state logic from UI components, eliminates prop-drilling, and provides an intuitive user interface across Mobile, Tablet, and Desktop screens.

---

## Key Features

- **Global State Management:** Powered by React's Context API and `useReducer` hook.
- **Task Operations (CRUD):**
  - **Add Task:** Create new tasks with form validation.
  - **Toggle Completion:** Mark tasks as complete/incomplete with visual feedback (line-through effect).
  - **Edit Task:** Modify existing task text inline (supports `Enter` to save, `Escape` to cancel).
  - **Delete Task:** Remove single tasks individually.
  - **Clear All:** Wipe all tasks simultaneously with a single action.
- **Live Summary Metrics:** Real-time dynamic counts for **Total**, **Completed**, and **Pending** tasks.
- **Fully Responsive Design:** Customized viewports optimized for **Desktop**, **Tablet**, and **Mobile** devices.

---

##  State Management Architecture

The project utilizes a unidirectional data flow to handle state updates efficiently:

1. **`taskReducer.js`**: Pure reducer function defining action types (`ADD_TASK`, `TOGGLE_TASK`, `EDIT_TASK`, `DELETE_TASK`, `CLEAR_ALL`) and handling state mutations without direct side effects.
2. **`TaskContext.jsx`**: Global context provider wrapping the app hierarchy and exposing dispatch helper methods via a custom `useTasks()` hook.
3. **UI Components (`TaskInput`, `TaskList`, `TaskItem`, `TaskSummary`)**: Decoupled presentation components consuming state and dispatching actions through context without prop-drilling.

---

## Project Structure


Task_Manager_YourName/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TaskInput.js
│   │   ├── TaskItem.js
│   │   ├── TaskList.js
│   │   └── TaskSummary.js
│   ├── context/
│   │   ├── TaskContext.js
│   │   └── taskReducer.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── screenshots/
│   ├── desktop-view.jpg
│   ├── tablet-view.jpg
│   └── mobile-view.jpg
├── package.json
├── package-lock.json
└── README.md



## `Deployement`

This section has moved here: [https://assignment-2-task-manager.vercel.app/]