import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StepsDropdown.css";

const StepsDropdown = ({ currentLevel }) => {
  const navigate = useNavigate();

  const [currentProgress, setCurrentProgress] = useState(1);
  if (currentLevel > currentProgress) setCurrentProgress(currentLevel);

  const properClass = (stepNo) => {
    if (currentProgress >= stepNo) {
      return "item";
    } else {
      return "unselect-item";
    }
  };

  const navigateTo = (stepNo) => {
    if (currentProgress >= stepNo) navigate(`/onboarding/${stepNo}`);
  };

  return (
    <div className="steps-dropdown">
      <div
        className={properClass(1)}
        onClick={() => {
          navigateTo(1);
        }}
      >
        Step 1: Select Strategy
      </div>
      <div
        className={properClass(2)}
        onClick={() => {
          navigateTo(2);
        }}
      >
        Step 2: Login
      </div>
      <div
        className={properClass(3)}
        onClick={() => {
          navigateTo(3);
        }}
      >
        Step 3: Company Details{" "}
      </div>
      <div
        className={properClass(4)}
        onClick={() => {
          navigateTo(4);
        }}
      >
        Step 4: Select Services
      </div>
      <div
        className={properClass(5)}
        onClick={() => {
          navigateTo(5);
        }}
      >
        Step 5: Finalizing
      </div>
    </div>
  );
};

StepsDropdown.propTypes = {
  currentLevel: PropTypes.number.isRequired,
};

export default StepsDropdown;
