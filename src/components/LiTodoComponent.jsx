import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faCircleCheck,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

export const LiTodoComponent = ({
  hanldeDoneTodo,
  task,
  setIsUpdating,
  setInputUpdating,
  deleteTodo,
  i,
}) => {
  return (
    <div className="option_container">
      <li onClick={() => hanldeDoneTodo(i)}>
        {task.done ? (
          <span>
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>
        ) : (
          <span>
            <FontAwesomeIcon icon={faCircle} />
          </span>
        )}
        {`  ${task.task}`}
      </li>
      <div className="show_span">
        <span
          onClick={() => {
            // locate by index the task that must be updated
            setIsUpdating(i);
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
  hanldeDoneTodo: PropTypes.func.isRequiered,
  task: PropTypes.object.isRequiered,
  setIsUpdating: PropTypes.func.isRequiered,
  setInputUpdating: PropTypes.func.isRequiered,
  deleteTodo: PropTypes.func.isRequiered,
  i: PropTypes.number.isRequiered,
};
