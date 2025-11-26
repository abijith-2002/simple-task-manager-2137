import React from 'react';
import TaskItem from './TaskItem';

/**
 * TaskList renders the collection of TaskItem components.
 */
// PUBLIC_INTERFACE
export default function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  if (!tasks.length) {
    return (
      <div className="empty-state" role="status" aria-live="polite" style={{ color: 'var(--muted)', padding: '8px 4px' }}>
        No tasks yet. Add one above to get started.
      </div>
    );
  }

  return (
    <ul className="task-list" aria-label="Task list">
      {tasks.map(task => (
        <li key={task.id} className="task-item">
          <TaskItem
            task={task}
            onToggle={() => onToggle(task.id)}
            onDelete={() => onDelete(task.id)}
            onEdit={(text) => onEdit(task.id, text)}
          />
        </li>
      ))}
    </ul>
  );
}
