import React, { useState } from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';
import '../style/global.css';

const TaskItem = ({ task, deleteTask, toggleTaskCompletion, editTask }) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleSaveEdit = () => {
    editTask(task.id, newTitle);
    setEditing(false);
  };

  return (
    <ListGroup.Item className={`d-flex justify-content-between align-items-center ${task.completed ? 'list-group-item-success' : ''}`}>
      {editing ? (
        <Form.Control
          type="text"
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
          autoFocus
          className='edit-input'
        />
      ) : (
        <>
          <span className="task-title">{task.title}</span>
          <div className="btn-group action-btn" role="group">
            <Button variant="outline-success" size="sm" onClick={() => setEditing(true)}>Edit</Button>
            <Button variant="outline-danger" size="sm" onClick={() => deleteTask(task.id)}>Delete</Button>
            <Button variant={task.completed ? 'warning' : 'primary'} size="sm" onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </Button>
          </div>
        </>
      )}
      {editing && (
        <Button variant="success" size="sm" className='save-btn' onClick={handleSaveEdit}>Save</Button>
      )}
    </ListGroup.Item>
  );
};

export default TaskItem;
