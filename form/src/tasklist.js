// TaskList.js
import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
          <div className="task-details">
            <span>{task.taskName}</span>
            <span>{task.complexity}</span>
            <span>{task.dateTime}</span>
          </div>
          <div className="task-actions">
            <button onClick={() => onEdit(index)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
