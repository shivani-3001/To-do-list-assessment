# Todo List App

## Overview

This is a simple todo list application built using React.js. The application allows users to add, edit, delete, and mark tasks as completed. Users can also filter tasks by completion status, search for tasks by title, and sort tasks alphabetically or by completion status. The task list persists between sessions, meaning that tasks remain visible even after refreshing the page or returning to the application.

## Components

### TaskForm

The `TaskForm` component provides a form for users to add new tasks. It includes an input field for entering the task title and a button to submit the task.

### TaskControls

The `TaskControls` component contains controls for filtering, searching, and sorting tasks. Users can select the filter options (all, completed, or incomplete), enter a search term to filter tasks by title, and choose the sorting criteria (alphabetical or by completion status).

### TaskList

The `TaskList` component displays the list of tasks. It receives the task data as props and maps over the tasks to render individual `TaskItem` components for each task.

### TaskItem

The `TaskItem` component represents a single task in the list. It displays the task title and provides buttons for editing, deleting, and marking the task as completed or incomplete.

Architecture and Design Decisions
The todo list app is built using React.js, a popular JavaScript library for building user interfaces. The application follows a component-based architecture, with each UI element represented by a separate component (e.g., TaskForm, TaskList, TaskItem).

Key design decisions include:

Component Reusability: Components are designed to be reusable and modular, allowing for easy composition and maintenance of the application.
State Management: The application uses React's useState hook for managing state within functional components. Task data and UI state (e.g., filter options, search term) are stored in component state.
Local Storage: Task data is persisted between sessions using the browser's local storage API. This ensures that tasks remain visible even after refreshing the page or closing/reopening the browser.
Assumptions Made During Development
During development, the following assumptions were made:

Unique Task IDs: Each task object is assumed to have a unique identifier (ID) to ensure proper rendering and manipulation of tasks.
Consistent Task Order: The order of tasks in the task list remains consistent across renders, allowing for stable rendering and sorting of tasks.
User Interaction: Users are assumed to interact with the application primarily through the provided UI controls (e.g., buttons, input fields).

## Running the App

To run the todo list app locally:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the dependencies by running `npm install`.
4. Start the development server by running `npm start`.
5. Open your web browser and visit `http://localhost:3000` to view the app.

## Demo

Here's a brief demonstration of the todo list app:

[Insert link to a live demo or a GIF/video demonstration of the app in action]
