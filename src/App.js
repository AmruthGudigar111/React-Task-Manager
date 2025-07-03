import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ToggleThemeButton from './components/ToggleThemeButton';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState('light-mode');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tasks"));
    if (stored) setTasks(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const deleteTask = (index) => setTasks(tasks.filter((_, i) => i !== index));
  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light-mode' ? 'dark-mode' : 'light-mode');
  };

  const appStyle = {
    backgroundImage: "url('./assets/background.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    minHeight: "100vh"
  };

  return (
    <div className={`app-wrapper ${theme}`} style={appStyle}>

      <ToggleThemeButton toggleTheme={toggleTheme} />
      <img src="./assets/logo.png" alt="Logo" className="logo" />
      <div className="container py-4">
        <h2 className="text-center mb-4">📝 Task Manager</h2>
        <TaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </div>
      <footer>🔐 Signed by Creator – <strong>Amruth Gudigar</strong></footer>
    </div>
  );
};




export default App;
