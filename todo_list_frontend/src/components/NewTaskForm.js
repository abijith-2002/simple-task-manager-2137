import React, { useRef, useState } from 'react';

/**
 * NewTaskForm provides an input and a button to add a new task.
 * Enter adds, disabled on empty. Calls onAdd(text).
 */
// PUBLIC_INTERFACE
export default function NewTaskForm({ onAdd }) {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    onAdd(value);
    setText('');
    inputRef.current?.focus();
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="new-task" className="sr-only">New task</label>
      <input
        id="new-task"
        ref={inputRef}
        className="new-task-input"
        placeholder="What do you need to get done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="New task description"
      />
      <button
        type="submit"
        className="btn btn-primary"
        disabled={!text.trim()}
        aria-disabled={!text.trim()}
        title="Add task"
      >
        Add
      </button>
    </form>
  );
}
