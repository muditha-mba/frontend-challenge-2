import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
/* import { useSelector } from "react-redux"; */
import "./Selection.css";
import { setType } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Selection = ({ heading, text, img }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const buttonHandler = (e) => {
    e.preventDefault();
    dispatch(setType(heading.toLowerCase()));
    navigate("/onboarding/2");
  };

  /* const { selectedType } = useSelector((state) => state.user); */

  return (
    <div className="selection">
      <div className="selection-content">
        <div className="img-container">
          <img src={img} alt="img" />
        </div>
        <div className="text-container">
          <h2>{heading}</h2>
          <p>{text}</p>
        </div>
        <div className="button-container">
          <button className="main__button--purple" onClick={buttonHandler}>
            Continue
          </button>
        </div>
        <div className="link-container">
          <p className="selection-link">or learn more</p>
        </div>
      </div>
    </div>
  );
};

Selection.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Selection;
