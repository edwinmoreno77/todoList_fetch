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
    hanldeDoneTodo,
    setInputUpdating,
  } = useTodo();

  return (
    <>
      <div className="container">
        <h1 className="title">Todo List</h1>
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
