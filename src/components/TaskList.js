import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onDelete }) => (
  <ul className="list-group">
    {tasks.map((task, index) => (
      <TaskItem key={index} task={task} index={index} onToggle={onToggle} onDelete={onDelete} />
    ))}
  </ul>
);

export default TaskList;
