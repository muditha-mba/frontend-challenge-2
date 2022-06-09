import PropTypes from "prop-types";
import { Check } from "@mui/icons-material";
import "./Service.css";

const styles = {
  height: "2rem",
  width: "2rem",
  color: "#671cc9",
};

const Service = ({
  isChecked,
  setIsChecked,
  name,
  heading,
  description,
  image,
}) => {
  return (
    <div
      onClick={() => {
        setIsChecked(isChecked, name);
      }}
      className={`service ${
        isChecked ? "service-checked" : "service-notChecked"
      }`}
    >
      <div className="left flex-row">
        <div className="img-container">
          <img src={image} alt="pic" />
        </div>
        <div className="text-container">
          <p>{heading}</p>
          <span>{description}</span>
        </div>
      </div>
      <div className="right">
        <div
          className={`checkbox-container flex-row ${
            isChecked ? "show-checkbox" : "hide-checkbox"
          }`}
        >
          <Check className="checkbox" style={styles} />
        </div>
      </div>
    </div>
  );
};
Service.propTypes = {
  name: PropTypes.string.isRequired,
  setIsChecked: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Service;
