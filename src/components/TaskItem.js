import React from 'react';

const TaskItem = ({ task, index, onToggle, onDelete }) => (
  <li className="list-group-item d-flex justify-content-between align-items-center">
    <div>
      <strong>{task.title}</strong><br />
      <small>{task.desc}</small><br />
      <span className={task.completed ? "text-success" : "text-muted"}>
        {task.completed ? "Completed" : "Pending"}
      </span>
    </div>
    <div>
      <button onClick={() => onToggle(index)} className="btn btn-sm btn-success me-2">Toggle</button>
      <button onClick={() => onDelete(index)} className="btn btn-sm btn-danger">Delete</button>
    </div>
  </li>
);

export default TaskItem;
