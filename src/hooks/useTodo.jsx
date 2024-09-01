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
  const [userSession, setUserSession] = useState({ name: "", todos: [] });
  const [userApi, setUserApi] = useState({ name: "", id: "" });
  const [isUpdating, setIsUpdating] = useState(null);
  const [arrayTodo, setArrayTodo] = useState([]);
  const [account, setAccount] = useState("");
  const [inputUpdating, setInputUpdating] = useState({
    label: "",
    is_done: false,
    id: null,
  });

  const addTodo = (e) => {
    if (e.key == "Enter" && todo.label !== "") {
      createTask(userSession, todo).then(() => {
        handleLogin();
      });
      setTodo({ label: "", is_done: false });
    }
  };

  const deleteTodo = (todo) => {
    deleteTask(todo.id).then(() => {
      handleLogin();
    });
  };

  const handleTaskUpdate = (id) => {
    arrayTodo.forEach((todo) => {
      if (todo.id == id) {
        updateTask(todo.id, {
          label: inputUpdating.label,
          is_done: todo.is_done,
        }).then(() => {
          handleLogin();
        });
      }
    });
    setIsUpdating(null);
  };

  const handleDoneTodo = (id) => {
    arrayTodo.forEach((todo) => {
      if (todo.id == id) {
        updateTask(todo.id, {
          ...todo,
          is_done: !todo.is_done,
        }).then(() => {
          handleLogin();
        });
      }
    });
  };

  const handleCreateUser = () => {
    createUser(account).then((user) => {
      if (user.detail) {
        alert(user.detail);
      } else {
        loginUser(user.name).then((userLogin) => {
          setUserSession(userLogin);
          setArrayTodo(userLogin.todos);
          setUserApi(userLogin);
        });
      }
    });
  };

  const handleLogin = () => {
    loginUser(userSession.name).then((userLogin) => {
      if (userLogin.detail) {
        alert(userLogin.detail);
      } else {
        setUserSession(userLogin);
        setArrayTodo(userLogin.todos);
        setUserApi(userLogin);
      }
    });
  };

  return {
    // ----- state variables
    todo,
    account,
    userApi,
    arrayTodo,
    isUpdating,
    userSession,
    inputUpdating,
    // ----- sets variables ----
    setTodo,
    setUserApi,
    setAccount,
    setArrayTodo,
    setIsUpdating,
    setUserSession,
    setInputUpdating,
    // ------function-------
    addTodo,
    deleteTodo,
    handleLogin,
    handleDoneTodo,
    handleCreateUser,
    handleTaskUpdate,
  };
};
