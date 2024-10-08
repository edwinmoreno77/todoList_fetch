import PropTypes from "prop-types";
import { UpdatingTaskComponent } from "./UpdatingTaskComponent";
import { LiTodoComponent } from "./LiTodoComponent";

export const UlTodoComponent = ({
  arrayTodo,
  deleteTodo,
  isUpdating,
  setIsUpdating,
  inputUpdating,
  handleTaskUpdate,
  handleDoneTodo,
  setInputUpdating,
}) => {
  return (
    <ul>
      {arrayTodo.map((task) => (
        <div key={task.id}>
          <div className="li_container">
            {isUpdating === task.id ? (
              <UpdatingTaskComponent
                inputUpdating={inputUpdating}
                handleTaskUpdate={handleTaskUpdate}
                task={task}
                setInputUpdating={setInputUpdating}
              />
            ) : (
              <LiTodoComponent
                handleDoneTodo={handleDoneTodo}
                task={task}
                setIsUpdating={setIsUpdating}
                setInputUpdating={setInputUpdating}
                deleteTodo={deleteTodo}
              />
            )}
          </div>
          <hr />
        </div>
      ))}
    </ul>
  );
};

UlTodoComponent.propTypes = {
  arrayTodo: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  isUpdating: PropTypes.number,
  setIsUpdating: PropTypes.func.isRequired,
  setArrayTodo: PropTypes.func.isRequired,
  inputUpdating: PropTypes.object.isRequired,
  handleTaskUpdate: PropTypes.func.isRequired,
  handleDoneTodo: PropTypes.func.isRequired,
  setInputUpdating: PropTypes.func.isRequired,
};
