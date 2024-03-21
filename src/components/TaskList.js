import React from 'react';
import { ListGroup } from 'react-bootstrap';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion, editTask }) => {
  console.log('tasksss=======', tasks)
  return (
    <ListGroup className="list-box">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
          editTask={editTask}
        />
      ))}
    </ListGroup>
  );
};

export default TaskList;
