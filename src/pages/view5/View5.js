import "./View5.css";
import ViewWrapper from "../../components/ui/viewWrapper/ViewWrapper";
import img from "../../imgs/illustrations/wizard/finish.svg";
import imgDark from "../../imgs/illustrations/wizard/finish-dark.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const View5 = () => {
  const { services } = useSelector((state) => state.user);
  const { isDarkMode } = useSelector((state) => state.app);
  const navigate = useNavigate();
  return (
    <ViewWrapper>
      <div className="view5 flex-column">
        <div className="top-texts">
          <h2>Congrats! You're all set.</h2>
          <p>Thank you for completing this wizard successfully</p>
        </div>
        <div className="image-container">
          <img src={isDarkMode ? imgDark : img} alt="img" />
        </div>
        <div className="bottom-texts">
          <h2>Get ready for next steps.</h2>
          <p>{`Last response ${services?.response}`}</p>
        </div>
        <div className="view5__button--container">
          <button
            onClick={() => navigate(-1)}
            className="main__button--purple "
          >
            Go Back!
          </button>
        </div>
      </div>
    </ViewWrapper>
  );
};

export default View5;
