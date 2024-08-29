import { InputTodoComponent } from "./components/InputTodoComponent";
import { UlTodoComponent } from "./components/UlTodoComponent";
import { useTodo } from "./hooks/useTodo";
import "./App.css";
import { useState } from "react";
import { createUser, loginUser } from "./utils/fetch";

function App() {
  const [account, setAccount] = useState("edwin");
  const [userSession, setUserSession] = useState({ name: "", todos: [] });
  const [userApi, setuserApi] = useState({ name: "", id: "" });

  const handleCreateUser = () => {
    setuserApi(account);
    createUser(userApi).then((user) => setAccount(user));
  };

  const handlerLogin = () => {
    loginUser(userSession).then((userLogin) => setUserSession(userLogin));
  };
  console.log(userSession.todos);

  const {
    todo,
    setTodo,
    addTodo,
    arrayTodo,
    deleteTodo,
    setArrayTodo,
    isUpdating,
    setIsUpdating,
    inputUpdating,
    handleTaskUpdate,
    hanldeDoneTodo,
    setInputUpdating,
  } = useTodo();

  return (
    <>
      <div className="container">
        <h1 className="title">Todo List </h1>
        <h3>{userApi?.name}</h3>
        <h3>{userSession.name}</h3>
        <input
          type="text"
          name="user"
          value={account.name}
          onChange={(e) => setAccount(e.target.value)}
        />
        <button onClick={handleCreateUser}>Create user</button>
        <input
          type="text"
          name="name"
          value={userSession.name}
          onChange={(e) => setUserSession(e.target.value)}
        />
        <button onClick={handlerLogin}>login</button>
        <main className="container_todo">
          <section className="main_container">
            <article>
              <InputTodoComponent
                todo={todo}
                arrayTodo={arrayTodo}
                addTodo={addTodo}
                setTodo={setTodo}
              />
              {arrayTodo.length == 0 ? (
                <h2 className="add_task_h2">Add task</h2>
              ) : (
                <UlTodoComponent
                  deleteTodo={deleteTodo}
                  arrayTodo={arrayTodo}
                  isUpdating={isUpdating}
                  setIsUpdating={setIsUpdating}
                  setArrayTodo={setArrayTodo}
                  inputUpdating={inputUpdating}
                  handleTaskUpdate={handleTaskUpdate}
                  hanldeDoneTodo={hanldeDoneTodo}
                  setInputUpdating={setInputUpdating}
                />
              )}
            </article>
            <footer className="items">{arrayTodo.length} items</footer>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
