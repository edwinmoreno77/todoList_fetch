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
        <h2 className="title">Todo List </h2>
        <header>
          <h2>{`Bienvenido, ${userApi?.name}`}</h2>
        </header>
        <section style={{ margin: "5px", padding: "5px" }}>
          <div>
            <input
              type="text"
              name="name"
              value={userSession.name}
              placeholder=""
              onChange={(e) =>
                setUserSession({ ...userSession, name: e.target.value })
              }
            />
            <button style={{ margin: "5px" }} onClick={handleLogin}>
              login
            </button>
          </div>
          <div>
            <input
              type="text"
              name="user"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
            />
            <button style={{ margin: "5px" }} onClick={handleCreateUser}>
              Create user
            </button>
          </div>
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
