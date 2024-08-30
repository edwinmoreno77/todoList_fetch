import { useState } from "react";
import {
  createTask,
  createUser,
  deleteTask,
  loginUser,
  updateTask,
} from "../api/fetch";

export const useTodo = () => {
  const [todo, setTodo] = useState({ label: "", is_done: false, id: null });
  const [arrayTodo, setArrayTodo] = useState([]);
  const [isUpdating, setIsUpdating] = useState(null);
  const [account, setAccount] = useState({ name: "", id: "" });
  const [userSession, setUserSession] = useState({ name: "", todos: [] });
  const [userApi, setuserApi] = useState({ name: "", id: "" });
  const [inputUpdating, setInputUpdating] = useState({
    label: "",
    is_done: false,
    id: null,
  });

  const addTodo = (e) => {
    if (e.key == "Enter" && todo.label !== "") {
      createTask(userSession, todo).then(() => {
        handlerLogin();
      });
      setTodo({ label: "", is_done: false });
    }
  };

  const deleteTodo = (todo) => {
    deleteTask(todo.id).then(() => {
      handlerLogin();
    });
  };

  const handleTaskUpdate = (e, id) => {
    // Stop updating when Enter is pressed
    if (e.key === "Enter") {
      arrayTodo.forEach(async (todo) => {
        if (todo.id == id) {
          updateTask(todo.id, {
            label: inputUpdating.label,
            is_done: todo.is_done,
          }).then(() => {
            handlerLogin();
          });
        }
      });
      setIsUpdating(null);
    }
  };

  // Toggle the completion status of a task
  const handleDoneTodo = (i) => {
    const newArrayTodo = arrayTodo.map((todo, index) =>
      index === i ? { ...todo, is_done: !todo.is_done } : todo
    );
    setArrayTodo(newArrayTodo);
  };

  const handleCreateUser = () => {
    setuserApi(account);
    createUser(userApi.name).then((user) => setuserApi(user));
  };

  const handlerLogin = () => {
    loginUser(userSession.name).then((userLogin) => {
      setUserSession(userLogin);
      setArrayTodo(userLogin.todos);
    });
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
    handleDoneTodo,
    handleCreateUser,
    handlerLogin,
    userApi,
    setAccount,
    userSession,
    account,
    setUserSession,
  };
};
