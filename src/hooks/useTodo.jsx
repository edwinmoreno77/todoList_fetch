import { useState } from "react";

export const useTodo = () => {
  const [todo, setTodo] = useState({ label: "", is_done: false });
  const [arrayTodo, setArrayTodo] = useState([]);
  const [isUpdating, setIsUpdating] = useState(null);
  const [inputUpdating, setInputUpdating] = useState({
    label: "",
    is_done: false,
  });

  const addTodo = (e) => {
    if (e.key == "Enter" && todo.label !== "") {
      setArrayTodo([...arrayTodo, { label: todo.label, is_done: false }]);
      setTodo({ label: "", is_done: false });
    }
  };

  const deleteTodo = (todo) => {
    const newArrayTodos = arrayTodo.filter((item) => item.label !== todo.label);
    setArrayTodo(newArrayTodos);
  };

  const handleTaskUpdate = (e, i) => {
    const { value } = e.target;
    setInputUpdating({ label: value, is_done: false });

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
      index === i ? { ...todo, is_done: !todo.is_done } : todo
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
