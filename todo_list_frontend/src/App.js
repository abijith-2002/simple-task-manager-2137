import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import { loadTasks, saveTasks } from './utils/storage';

/**
 * App is the root SPA that renders the header, new task form, and task list.
 * It manages theme and the persisted tasks state (via localStorage).
 */
// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');
  const [tasks, setTasks] = useState(() => loadTasks());

  // Apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Persist tasks to localStorage
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  // Derived counts for accessibility and summary
  const counts = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const active = total - completed;
    return { total, completed, active };
  }, [tasks]);

  const handleAddTask = (text) => {
    const newTask = {
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random()),
      text: text.trim(),
      completed: false,
      createdAt: Date.now()
    };
    setTasks(prev => [newTask, ...prev]);
  };

  const handleToggleTask = (id) => {
    setTasks(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const handleDeleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const handleEditTask = (id, newText) => {
    setTasks(prev => prev.map(t => (t.id === id ? { ...t, text: newText.trim() } : t)));
  };

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App app-shell">
      <div className="gradient-bg" aria-hidden="true" />
      <Header theme={theme} onToggleTheme={toggleTheme} counts={counts} />
      <main className="container">
        <section className="surface card new-task-card" aria-labelledby="new-task-title">
          <h2 id="new-task-title" className="section-title">Add a new task</h2>
          <NewTaskForm onAdd={handleAddTask} />
        </section>

        <section className="surface card tasks-card" aria-labelledby="tasks-title">
          <div className="tasks-header">
            <h2 id="tasks-title" className="section-title">Your Tasks</h2>
            <div className="task-counters" aria-live="polite">
              <span className="badge badge-info">Total: {counts.total}</span>
              <span className="badge badge-success">Active: {counts.active}</span>
              <span className="badge badge-secondary">Done: {counts.completed}</span>
            </div>
          </div>
          <TaskList
            tasks={tasks}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
          />
        </section>
      </main>
      <footer className="footer">
        <small>Environment: {process.env.REACT_APP_NODE_ENV || 'development'}</small>
      </footer>
    </div>
  );
}

export default App;
