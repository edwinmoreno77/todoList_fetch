import { useState } from "react";

export const useTodo = () => {
  const [todo, setTodo] = useState({ task: "", done: false });
  const [arrayTodo, setArrayTodo] = useState([]);
  const [isUpdating, setIsUpdating] = useState(null);
  const [inputUpdating, setInputUpdating] = useState({
    task: "",
    done: false,
  });

  const addTodo = (e) => {
    if (e.key == "Enter" && todo.task !== "") {
      setArrayTodo([...arrayTodo, { task: todo.task, done: false }]);
      setTodo({ task: "", done: false });
    }
  };

  const deleteTodo = (todo) => {
    const newArrayTodos = arrayTodo.filter((item) => item.task !== todo.task);
    setArrayTodo(newArrayTodos);
  };

  const handleTaskUpdate = (e, i) => {
    const { value } = e.target;
    setInputUpdating({ task: value, done: false });

    // Update the task in the array
    const newArrayTodo = arrayTodo.map((todo, index) =>
      index === i ? inputUpdating : todo
    );

    setArrayTodo(newArrayTodo);
    // Stop updating when Enter is pressed
    if (e.key === "Enter") {
      setIsUpdating(null);
    }
  };
  // Toggle the completion status of a task
  const hanldeDoneTodo = (i) => {
    const newArrayTodo = arrayTodo.map((todo, index) =>
      index === i ? { ...todo, done: !todo.done } : todo
    );
    setArrayTodo(newArrayTodo);
  };

  return {
    addTodo,
    deleteTodo,
    todo,
    arrayTodo,
    setTodo,
    setArrayTodo,
    isUpdating,
    setIsUpdating,
    inputUpdating,
    setInputUpdating,
    handleTaskUpdate,
    hanldeDoneTodo,
  };
};
