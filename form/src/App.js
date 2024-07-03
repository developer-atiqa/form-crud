// App.js
import React, { useState, useEffect } from 'react';
import TaskForm from './taskform';
import TaskList from './tasklist';
import './App.css';

function App() {
  
  const [taskToEdit, setTaskToEdit] = useState(null);

//get data from ls
const   getStoredTasks=()=>{
  let task =(localStorage.getItem('tasks'));
  if (task){
    return JSON.parse(localStorage.getItem('tasks'));
  }
  else{
    return [];
  }
}
const [tasks, setTasks] = useState(getStoredTasks());

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addOrUpdateTask = (task) => {
    if (taskToEdit !== null) {
      setTasks(tasks.map((t, index) => (index === taskToEdit ? task : t)));
      setTaskToEdit(null);
    } else {
      setTasks([...tasks, task]);
    }
  };

  const editTask = (index) => {
    setTaskToEdit(index);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const cancelEdit = () => {
    setTaskToEdit(null);
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm
        onSubmit={addOrUpdateTask}
        taskToEdit={tasks[taskToEdit]}
        onCancel={cancelEdit}
      />
      <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
