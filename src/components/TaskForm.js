import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import "../style/global.css"

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title);
    setTitle('');
  };

  return (
    <div className='form-box'>
    <Form onSubmit={handleSubmit} className="mb-4 form-width">
        <Form.Control
          type="text"
          placeholder="Add a new task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='input-width'
        />
          <Button variant="primary" type="submit" className='add-btn'>Add Task</Button>
    </Form>
    </div>
  );
};

export default TaskForm;
