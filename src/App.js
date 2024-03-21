import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import './App.css';
import TaskControls from "./components/TaskControls";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });  
  
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // 'all', 'completed', 'incomplete'
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("title"); // 'title', 'status'

console.log('filteredTasks=======', filteredTasks)
   // Save tasks to local storage whenever tasks state changes
   useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    filterTasks();
  }, [tasks, filter, searchTerm, sortBy]);

  useEffect(() => {
    filterTasks();
  }, [tasks]);

  const filterTasks = () => {
    let filtered = tasks;
    if (filter === "completed") {
      filtered = tasks.filter((task) => task.completed);
    } else if (filter === "incomplete") {
      filtered = tasks.filter((task) => !task.completed);
    }
    if (searchTerm) {
      filtered = filtered.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (sortBy === "title") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "status") {
      filtered.sort((a, b) => {
        if (a.completed && !b.completed) {
          return 1;
        } else if (!a.completed && b.completed) {
          return -1;
        } else {
          return 0; // Tasks have same status, maintain their original order
        }
      });
    }
    console.log(filtered)

    setFilteredTasks(filtered);
  };

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id, newTitle) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TaskForm addTask={addTask} />
      <div className="task-box">
        <TaskControls
          filter={filter}
          setFilter={setFilter}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
        editTask={editTask}
      />
    </div>
  );
};

export default App;
