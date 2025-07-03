import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, desc, completed: false });
    setTitle('');
    setDesc('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="form-control mb-2" />
      <textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="Description" className="form-control mb-2" />
      <button className="btn btn-primary" type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
