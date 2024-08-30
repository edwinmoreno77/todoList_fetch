import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faCircleCheck,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

export const LiTodoComponent = ({
  handleDoneTodo,
  task,
  setIsUpdating,
  setInputUpdating,
  deleteTodo,
  i,
}) => {
  return (
    <div className="option_container">
      <li onClick={() => handleDoneTodo(i)}>
        {task.is_done ? (
          <span>
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>
        ) : (
          <span>
            <FontAwesomeIcon icon={faCircle} />
          </span>
        )}
        {`  ${task.label}`}
      </li>
      <div className="show_span">
        <span
          onClick={() => {
            // locate by index the task that must be updated
            setIsUpdating(task.id);
            // setInputUpdating is used so that the task to be
            // updated keeps the text and does not start empty
            setInputUpdating(task);
          }}
        >
          <FontAwesomeIcon icon={faEdit} />
        </span>
        <span onClick={() => deleteTodo(task)}>
          <FontAwesomeIcon icon={faTrash} />
        </span>
      </div>
    </div>
  );
};

LiTodoComponent.propTypes = {
  handleDoneTodo: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  setIsUpdating: PropTypes.func.isRequired,
  setInputUpdating: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  i: PropTypes.number.isRequired,
};
