# Todo List Application

A simple Todo List application built with React. This app allows users to add, update, delete, and mark tasks as completed.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Components](#components)
- [Contributing](#contributing)

## Installation

1. Clone the repository:

```
git clone https://github.com/edwinmoreno77/todo_list_project_4Geeks_bootcamp.git
```

2. Navigate to the project directory:

```
cd todo_list_project_4Geeks_bootcamp
```

3. Install the dependencies:

```
npm install
```

## Usage

1. Start the development server:

```
npm run dev
```

2. Open your browser and go to `http://localhost:5173` to view the application.

### Main Screen

![Todo List Image 1](https://github.com/edwinmoreno77/todo_list_project_4Geeks_bootcamp/blob/main/src/assets/todoList_img-1.jpg?raw=true)

![Todo List Image 2](https://github.com/edwinmoreno77/todo_list_project_4Geeks_bootcamp/blob/main/src/assets/todoList_img-2.jpg?raw=true)

## File Structure

### src/components/

- InputTodoComponent.jsx - Component for inputting new tasks.
- LiTodoComponent.jsx - Component for displaying individual tasks with options.
- UlTodoComponent.jsx - Component for displaying the list of tasks.
- UpdatingTaskComponent.jsx - Component for updating existing tasks.

### src/hooks/

- useTodo.js - Custom hook managing the state and logic of the Todo list.

### src/

- App.jsx - Main application component.
- App.css - Styles for the application.

## Components

App.jsx

- Main component that integrates all other components and manages state using the useTodo hook.

InputTodoComponent.jsx

- Provides an input field for adding new tasks.
  Props:
  - todo: Current task state.
  - arrayTodo: Array of tasks.
  - addTodo: Function to add a new task.

LiTodoComponent.jsx

- Displays individual tasks with options to mark as done, edit, or delete.
  Props:
  - hanldeDoneTodo: Function to toggle task completion.
  - task: Task object.
  - setIsUpdating: Function to set the task for updating.
  - setInputUpdating: Function to set the input for updating.
  - deleteTodo: Function to delete a task.
  - i: Index of the task.

UlTodoComponent.jsx

- Renders the list of tasks, either displaying the LiTodoComponent or UpdatingTaskComponent based on the current state.
  Props:
  - arrayTodo: Array of tasks.
  - deleteTodo: Function to delete a task.
  - isUpdating: Index of the task being updated.
  - setIsUpdating: Function to set the task for updating.
  - inputUpdating: Current input for updating.
  - handleTaskUpdate: Function to handle task updates.
  - hanldeDoneTodo: Function to toggle task completion.
  - setInputUpdating: Function to set the input for updating.

UpdatingTaskComponent.jsx

- Provides an input field for updating a task and a button to confirm the update.
  Props:
  - inputUpdating: Current input for updating.
  - handleTaskUpdate: Function to handle task updates.
  - setIsUpdating: Function to stop updating.
  - index: Index of the task being updated.

## Contributing

Feel free to fork the repository and submit pull requests. Any contributions are welcome!
