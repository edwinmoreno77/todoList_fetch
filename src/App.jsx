import { InputTodoComponent } from "./components/InputTodoComponent";
import { UlTodoComponent } from "./components/UlTodoComponent";
import { useTodo } from "./hooks/useTodo";
import "./App.css";

function App() {
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
    handleDoneTodo,
    setInputUpdating,
    userApi,
    userSession,
    account,
    setAccount,
    handleCreateUser,
    handlerLogin,
    setUserSession,
  } = useTodo();

  console.log(arrayTodo);

  return (
    <>
      <div className="container">
        <h1 className="title">Todo List </h1>
        <div>
          <h3>{userApi?.name}</h3>
          <h3>{userSession?.name}</h3>
        </div>
        <div style={{ margin: "5px", padding: "5px" }}>
          <input
            type="text"
            name="name"
            value={userSession?.name}
            placeholder=""
            onChange={(e) =>
              setUserSession({ ...userSession, name: e.target.value })
            }
          />
          <button style={{ margin: "5px" }} onClick={handlerLogin}>
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
        </div>
        <main className="container_todo">
          <section className="main_container">
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
                  isUpdating={isUpdating || null}
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
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
