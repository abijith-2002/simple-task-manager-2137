import React from 'react';

/**
 * Header renders the application title and theme toggle button.
 * It also shows a brief summary of task counts.
 */
// PUBLIC_INTERFACE
export default function Header({ theme, onToggleTheme, counts }) {
  return (
    <header className="header">
      <div className="brand">
        <span className="title" aria-label="App title">Ocean Tasks</span>
        <span className="subtitle">A simple, elegant todo list</span>
      </div>
      <div className="brand">
        <div className="task-counters" aria-hidden="true">
          <span className="badge badge-info">Total: {counts.total}</span>
          <span className="badge badge-success">Active: {counts.active}</span>
          <span className="badge badge-secondary">Done: {counts.completed}</span>
        </div>
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          <span className="dot" />
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </header>
  );
}
