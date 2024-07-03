// TaskForm.js
import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, taskToEdit, onCancel }) => {
  const [taskName, setTaskName] = useState('');
  const [complexity, setComplexity] = useState('');
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTaskName(taskToEdit.taskName);
      setComplexity(taskToEdit.complexity);
      setDateTime(taskToEdit.dateTime);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ taskName, complexity, dateTime });
    setTaskName('');
    setComplexity('');
    setDateTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        required
      />
      
  
  <select type="text"
        placeholder="Complexity"
        value={complexity}
        onChange={(e) => setComplexity(e.target.value)}
        required>
    <option value="" selected="selected" disabled="disabled">--Complexity--</option>
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
 
  </select>

      <input
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
        required
      />
      <button type="submit">{taskToEdit ? 'Update' : 'Add'} Task</button>
      {taskToEdit && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default TaskForm;
