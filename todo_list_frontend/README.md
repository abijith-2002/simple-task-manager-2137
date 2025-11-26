# Ocean Tasks - React Todo List

A simple, modern todo list app implemented with React and styled with the Ocean Professional theme.

## Features

- Add, view, edit (inline), delete, and toggle tasks
- Local persistence using localStorage
- Responsive layout with keyboard accessibility
  - Enter to add/save
  - Escape to cancel editing
- Modern UI with rounded corners, subtle shadows, and smooth transitions
- Theme toggle (light/dark)

## Theme

Ocean Professional palette:
- Primary: #2563EB
- Secondary/Success: #F59E0B
- Error: #EF4444
- Background: #f9fafb
- Surface: #ffffff
- Text: #111827
- Gradient accents are subtly applied via radial backgrounds

## Project Structure

- src/App.js — SPA shell and state management for tasks
- src/components/Header.js — Title, counts, and theme toggle
- src/components/NewTaskForm.js — Input + Add button
- src/components/TaskList.js — Renders list of tasks
- src/components/TaskItem.js — Single task with inline edit/delete/toggle
- src/utils/storage.js — LocalStorage load/save helpers
- src/App.css — Theme + component styles

## Getting Started

In the project directory:

### npm start
Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.

### npm test
Runs the tests (basic render checks).

### npm run build
Builds the app for production to the build folder.

## Environment Variables

The app can read standard CRA environment variables. Available (but not required) variables include:
- REACT_APP_NODE_ENV, REACT_APP_API_BASE, REACT_APP_BACKEND_URL, REACT_APP_FRONTEND_URL, REACT_APP_WS_URL, REACT_APP_ENABLE_SOURCE_MAPS, REACT_APP_PORT, REACT_APP_TRUST_PROXY, REACT_APP_LOG_LEVEL, REACT_APP_HEALTHCHECK_PATH, REACT_APP_FEATURE_FLAGS, REACT_APP_EXPERIMENTS_ENABLED

Currently, no external services are required; tasks are stored in localStorage.

## Accessibility

- Semantic roles and aria-labels for key controls
- Focus-visible styles with high-contrast focus rings
- Live region updates for task counters
