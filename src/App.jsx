import { InputTodoComponent } from "./components/InputTodoComponent";
import { UlTodoComponent } from "./components/UlTodoComponent";
import { useTodo } from "./hooks/useTodo";
import "./App.css";

function App() {
  const {
    // ----- state variables ----
    todo,
    account,
    userApi,
    arrayTodo,
    isUpdating,
    userSession,
    inputUpdating,
    // ----- sets variables ----
    setTodo,
    setAccount,
    setArrayTodo,
    setIsUpdating,
    setUserSession,
    setInputUpdating,
    // ------ function -------
    addTodo,
    deleteTodo,
    handleLogin,
    handleDoneTodo,
    handleCreateUser,
    handleTaskUpdate,
  } = useTodo();

  return (
    <>
      <div className="container">
        <h1 className="title">Todo List </h1>
        <header>
          <h3>{userApi?.name}</h3>
          <h3>{userSession?.name}</h3>
        </header>
        <section style={{ margin: "5px", padding: "5px" }}>
          <input
            type="text"
            name="name"
            value={userSession?.name}
            placeholder=""
            onChange={(e) =>
              setUserSession({ ...userSession, name: e.target.value })
            }
          />
          <button style={{ margin: "5px" }} onClick={handleLogin}>
            login
          </button>
          <input
            type="text"
            name="user"
            value={account.name}
            onChange={(e) => setAccount(e.target.value)}
          />
          <button style={{ margin: "5px" }} onClick={handleCreateUser}>
            Create user
          </button>
        </section>
        <section className="container_todo">
          <main className="main_container">
            <article>
              <InputTodoComponent
                todo={todo}
                arrayTodo={arrayTodo}
                addTodo={addTodo}
                setTodo={setTodo}
              />
              {arrayTodo?.length == 0 ? (
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
                  handleDoneTodo={handleDoneTodo}
                  setInputUpdating={setInputUpdating}
                />
              )}
            </article>
            <footer className="items">{arrayTodo.length} items</footer>
          </main>
        </section>
      </div>
    </>
  );
}

export default App;
