import PropTypes from "prop-types";

export const UpdatingTaskComponent = ({
  inputUpdating,
  handleTaskUpdate,
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
        onKeyDown={(e) => {
          if (e.key === "Enter" && inputUpdating.label.trim() !== "") {
            handleTaskUpdate(task.id);
          }
        }}
      />
      <span
        onClick={() => {
          handleTaskUpdate(task.id);
        }}
      >
        done
      </span>
    </div>
  );
};

UpdatingTaskComponent.propTypes = {
  inputUpdating: PropTypes.object.isRequired,
  handleTaskUpdate: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  setInputUpdating: PropTypes.func.isRequired,
};
