import PropTypes from "prop-types";

export const UpdatingTaskComponent = ({
  inputUpdating,
  handleTaskUpdate,
  setIsUpdating,
  task,
  setInputUpdating,
}) => {
  return (
    <div className="show_span option_container">
      <input
        className="input_updating"
        type="text"
        value={inputUpdating.label}
        onChange={(e) =>
          setInputUpdating({
            ...inputUpdating,
            label: e.target.value,
          })
        }
        onKeyDown={(e) => handleTaskUpdate(e, task.id)}
      />
      <span onClick={() => setIsUpdating(null)}>done</span>
    </div>
  );
};

UpdatingTaskComponent.propTypes = {
  inputUpdating: PropTypes.object.isRequired,
  handleTaskUpdate: PropTypes.func.isRequired,
  setIsUpdating: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  setInputUpdating: PropTypes.func.isRequired,
};
