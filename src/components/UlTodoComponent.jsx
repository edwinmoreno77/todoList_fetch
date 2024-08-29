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
  hanldeDoneTodo,
  setInputUpdating,
}) => {
  return (
    <ul>
      {arrayTodo.map((task, i) => (
        <div key={i}>
          <div className="li_container">
            {isUpdating === i ? (
              <UpdatingTaskComponent
                inputUpdating={inputUpdating}
                handleTaskUpdate={handleTaskUpdate}
                setIsUpdating={setIsUpdating}
                index={i}
              />
            ) : (
              <LiTodoComponent
                hanldeDoneTodo={hanldeDoneTodo}
                task={task}
                setIsUpdating={setIsUpdating}
                setInputUpdating={setInputUpdating}
                deleteTodo={deleteTodo}
                i={i}
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
  isUpdating: PropTypes.number.isRequired,
  setIsUpdating: PropTypes.func.isRequired,
  setArrayTodo: PropTypes.func.isRequired,
  inputUpdating: PropTypes.object.isRequired,
  handleTaskUpdate: PropTypes.func.isRequired,
  hanldeDoneTodo: PropTypes.func.isRequired,
  setInputUpdating: PropTypes.func.isRequired,
};
