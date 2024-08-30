import { InputTodoComponent } from "./components/InputTodoComponent";
import { UlTodoComponent } from "./components/UlTodoComponent";
import { useTodo } from "./hooks/useTodo";
import { Login } from "./components/Login";
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
    setUserApi,
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
        {userApi?.name === "" ? (
          <Login
            userSession={userSession}
            setUserSession={setUserSession}
            handleLogin={handleLogin}
            setAccount={setAccount}
            account={account}
            handleCreateUser={handleCreateUser}
          />
        ) : (
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
        )}
        {userApi?.name !== "" && (
          <button
            className="btn_logout"
            onClick={() => setUserApi({ name: "", id: "" })}
          >
            Logout
          </button>
        )}
      </div>
    </>
  );
}

export default App;
