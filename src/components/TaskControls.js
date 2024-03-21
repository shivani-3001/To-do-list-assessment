import React from 'react';
import { Form } from 'react-bootstrap';
import '../style/global.css'


const TaskControls = ({ filter, setFilter, searchTerm, setSearchTerm, sortBy, setSortBy }) => {
    return (
        <>
            {/* Task Filter */}
            <Form.Group controlId="taskFilter" className='inside-task-box'>
                <Form.Label className='label-style'>Filter:</Form.Label>
                <Form.Control as="select" value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </Form.Control>
            </Form.Group>

            {/* Task Search */}
            <Form.Group controlId="taskSearch" className='inside-task-box'>
                <Form.Label className='label-style'>Search tasks:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter task title"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Form.Group>
            
            {/* Task Sorting */}
            <Form.Group controlId="taskSorting" className='inside-task-box'>
                <Form.Label className='label-style'>Sort By:</Form.Label>
                <Form.Control as="select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="title">Title</option>
                    <option value="status">Status</option>
                </Form.Control>
            </Form.Group>
        </>
    );
};

export default TaskControls;
