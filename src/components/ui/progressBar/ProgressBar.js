import PropTypes from "prop-types";
import "./ProgressBar.css";

const ProgressBar = ({ currentLevel, steps }) => {
  const widthForOneStep = 100 / steps;
  const width = widthForOneStep * currentLevel;

  return (
    <div className="progressBar">
      <span
        style={{ width: `${width}%` }}
        data-level={currentLevel || 1}
        className="progressBar-level"
      />
    </div>
  );
};

ProgressBar.propTypes = {
  currentLevel: PropTypes.number.isRequired,
  steps: PropTypes.number.isRequired,
};

export default ProgressBar;
