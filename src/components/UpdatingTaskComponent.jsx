import PropTypes from "prop-types";

export const UpdatingTaskComponent = ({
  inputUpdating,
  handleTaskUpdate,
  setIsUpdating,
  index,
}) => {
  return (
    <div className="show_span option_container">
      <input
        className="input_updating"
        type="text"
        value={inputUpdating.label}
        onChange={(e) => handleTaskUpdate(e, index)}
        onKeyDown={(e) => handleTaskUpdate(e, index)}
      />
      <span onClick={() => setIsUpdating(null)}>done</span>
    </div>
  );
};

UpdatingTaskComponent.propTypes = {
  inputUpdating: PropTypes.object.isRequired,
  handleTaskUpdate: PropTypes.func.isRequired,
  setIsUpdating: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
