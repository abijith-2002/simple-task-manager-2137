import React, { useEffect, useRef, useState } from 'react';

/**
 * TaskItem displays a single task with toggle, inline edit, and delete controls.
 * Keyboard: Enter to save in edit, Escape to cancel.
 */
// PUBLIC_INTERFACE
export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(task.text);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [editing]);

  useEffect(() => {
    setDraft(task.text);
  }, [task.text]);

  const handleSave = () => {
    const trimmed = draft.trim();
    if (!trimmed) {
      // If cleared, don't save; keep editing or allow delete
      setDraft(task.text);
      setEditing(false);
      return;
    }
    if (trimmed !== task.text) onEdit(trimmed);
    setEditing(false);
  };

  const handleCancel = () => {
    setDraft(task.text);
    setEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleCancel();
    }
  };

  return (
    <>
      <input
        type="checkbox"
        className="task-checkbox"
        checked={task.completed}
        onChange={onToggle}
        aria-label={`Mark "${task.text}" as ${task.completed ? 'not completed' : 'completed'}`}
      />
      <div className="task-main" style={{ width: '100%' }}>
        {!editing ? (
          <span className={`task-text ${task.completed ? 'completed' : ''}`}>
            {task.text}
          </span>
        ) : (
          <input
            ref={inputRef}
            className="edit-input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Edit task"
          />
        )}
      </div>
      <div className="task-actions">
        {!editing ? (
          <>
            <button
              type="button"
              className="icon-btn primary"
              onClick={() => setEditing(true)}
              title="Edit task"
              aria-label={`Edit "${task.text}"`}
            >
              Edit
            </button>
            <button
              type="button"
              className="icon-btn danger"
              onClick={onDelete}
              title="Delete task"
              aria-label={`Delete "${task.text}"`}
            >
              Delete
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className="icon-btn success"
              onClick={handleSave}
              title="Save"
              aria-label="Save edit"
            >
              Save
            </button>
            <button
              type="button"
              className="icon-btn"
              onClick={handleCancel}
              title="Cancel"
              aria-label="Cancel edit"
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </>
  );
}
