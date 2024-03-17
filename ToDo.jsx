import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTask = () => {
    if (inputValue.trim() !== '') {
      if (editIndex !== -1) {
        // Edit mode
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = inputValue;
        setTasks(updatedTasks);
        setEditIndex(-1);
      } else {
        // Add mode
        setTasks([...tasks, inputValue]);
      }
      setInputValue('');
    }
  };

  const editTask = (index) => {
    setEditIndex(index);
    setInputValue(tasks[index]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const clearTasks = () => {
    setTasks([]);
    setInputValue('');
    setEditIndex(-1);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter task"
      />
      <button onClick={addTask}>
        {editIndex !== -1 ? 'Edit Task' : 'Add Task'}
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={clearTasks}>Clear All Tasks</button>
    </div>
  );
}

export default TodoApp;
